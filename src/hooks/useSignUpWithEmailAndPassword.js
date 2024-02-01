import { auth, firestore} from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from "firebase/firestore";
import useShowToast from './useShowToast';

function useSignUpWithEmailAndPassword() {

  const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast()

  
  const signup = async (inputs) => {
    if(!inputs.email || !inputs.password || !inputs.fullname || !inputs.username){
      showToast("ERROR", "Please fill all the fields", "error")
      return
    }
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)

      // if newUser has not been created beacuse it already exists and there is a error than we throw this toast
      if(!newUser && error){
        showToast("Error", error.message, "error")
      return

      // if the user has been created
      }
      if(newUser) {
        const userDoc = {
          uid:newUser.user.uid,
          email:inputs.email,
          username:inputs.username,
          fullname:inputs.fullname,
          bio:"",
          profilePicUrl:"",
          followers:[],
          following:[],
          posts:[],
          createdAt: Date.now()
        }
        // putting the above data in firestore
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        // putting the above data in local storage
        localStorage.setItem("user-info", JSON.stringify(userDoc))

      }
    } 
    catch (error) {
      showToast("Error", error.message, "error")
    }
  }
  return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword