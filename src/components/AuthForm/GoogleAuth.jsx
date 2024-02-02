import React from 'react'
import { Button, Image, Text } from '@chakra-ui/react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';
import useShowToast from '../../hooks/useShowToast';
import useAuthStore from '../../store/authStore';
import { doc, getDoc } from "firebase/firestore";


function GoogleAuth({ prefix }) {
  const showToast = useShowToast()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const loginUser = useAuthStore((state) => state.login)

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle()
      if (!newUser && error) {
        showToast("Error", error.message, "error")
        return
      }

      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);


      if (userSnap.exists()) {

        // if already signed with google then it will not create another document of data in authentication and firestore
        const userDoc = userSnap.data()
        localStorage.setItem("user-info", JSON.stringify(userDoc))
        loginUser(userDoc)
      }
      else {
        // id user is signing up for first time uging google then it create a document and save user in it
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,                     //getting email from goggle
          username: newUser.user.email.split("@")[0],
          fullname: newUser.user.displayName,            //getting fullname from goggle
          bio: "",
          profilePicUrl: newUser.user.photoURL,          //getting photo from goggle
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

    } catch (error) {
      showToast("Error", error.message, "error")
    }
  }

  return (
    <Button gap={2} cursor={"pointer"} my={"12px"} onClick={handleGoogleAuth} isLoading={loading} bg={"transparent"}>
      <Image src='/google.png' h={"24px"} alt='google logo' />
      <Text color={"blue.500"}>{prefix} with Google</Text>
    </Button>
  )
}

export default GoogleAuth