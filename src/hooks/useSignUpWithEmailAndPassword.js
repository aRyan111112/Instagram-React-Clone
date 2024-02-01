import { auth, firestore } from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from "firebase/firestore";
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { collection, query, where, getDocs } from "firebase/firestore";


function useSignUpWithEmailAndPassword() {

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast()
  const loginUser = useAuthStore(state => state.login)
  const logoutUser = useAuthStore(state => state.logout)

  const usersRef = collection(firestore, "users");


  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.fullname || !inputs.username) {
      showToast("ERROR", "Please fill all the fields", "error")
      return
    }

    // checking if "username" given is already exists, if it exists then we give a error message 
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error")
      return
    }

    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)

      // if newUser has not been created beacuse it already exists and there is a error than we throw this toast
      if (!newUser && error) {
        showToast("Error", error.message, "error")
        return

        // if the user has been created
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio: "",
          profilePicUrl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
        }
        // putting the above data in firestore
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        // putting the above data in local storage
        localStorage.setItem("user-info", JSON.stringify(userDoc))
        // adding user-info to 'user' state in authStore.js
        loginUser(userDoc)

      }
    }
    catch (error) {
      showToast("Error", error.message, "error")
    }
  }
  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword