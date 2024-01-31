import React from 'react'
import {auth} from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

function useSignUpWithEmailAndPassword() {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const signup = async (inputs) => {
    if(!inputs.email || !inputs.password || !inputs.fullname || !inputs.username){
      console.log("Please fill all the details")
      return
    }
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if(!newUser && error){
        console.log(error);
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
      }
    } 
    catch (error) {
      console.log(error);
    }
  }
  return {
    
  }
}

export default useSignUpWithEmailAndPassword