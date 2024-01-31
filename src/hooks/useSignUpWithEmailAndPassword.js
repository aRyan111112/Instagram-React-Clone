import { auth, firestore} from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from "firebase/firestore";
import useShowToast from './useShowToast';

function useSignUpWithEmailAndPassword() {

  const [ createUserWithEmailAndPassword, loading, error ] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast()
  
  const signup = async (inputs) => {
    if(!inputs.email || !inputs.password || !inputs.fullname || !inputs.username){
      showToast("ERROR", "Please fill all the fields", "error")
      return
    }
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if(!newUser && error){
      showToast("ERROR", "thisis", "error")    
      return
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
        // puting the above data in firestore
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        // puting the above data in local storage
        localStorage.setItem("user-info", JSON.stringify(userDoc))

      }
    } 
    catch (error) {
      showToast("ERROR", "THIS IS AN ERROR", "error")
    }
  }
  return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword