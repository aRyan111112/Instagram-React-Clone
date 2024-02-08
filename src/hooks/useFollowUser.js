import React from 'react'
import { useState, useEffect} from 'react'
import useAuthStore from '../store/authStore'
import useUserProfileStore from '../store/userProfileStore'
import useShowToast from './useShowToast'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'

function useFollowUser(userId) {
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const setAuthUser = useAuthStore((state) => state.setUser)
    const {userProfile, setUserProfile} = useUserProfileStore()
    const showToast = useShowToast()

    const handleFollowUser = async () => {
        setIsUpdating(true)
        try {
            const currentUserRef = doc(firestore, "users", authUser.uid) //taking reference of current user
            const userToFollowOrUnfollowRef = doc(  firestore, "users", userId) //taking reference to user to follow or unfollow

            // updating the following list of user who is following another user in firestore
            await updateDoc(currentUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId) 
            })
            // updating the followers list of user who is being followed in firestore
            await updateDoc(userToFollowOrUnfollowRef, {
                followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
            })

            if(isFollowing){
                //unfollow
                setAuthUser({
                    ...authUser,
                    following: authUser.following.filter((uid) => uid !== userId)
                })
                if(userProfile)({
                    ...userProfile,
                    followers: userProfile.followers.filter((uid) => uid !== authUser.uid)
                })

                localStorage.setItem("user-info",
                JSON.stringify({
                    ...authUser,
                    following: authUser.following.filter((uid) => uid !== userId)
                }))
                setIsFollowing(false)
            } else {
                // follow
                setAuthUser({
                    ...authUser,
                    following: [...authUser.following, userId]
                })
                if(userProfile) {
                    setUserProfile({
                        ...userProfile,
                        followers: [...userProfile.followers, authUser.uid]
                    })
                }
                localStorage.setItem("user-info", JSON.stringify({
                    ...authUser,
                    following: [...authUser.following, userId]
                }))
                setIsFollowing(true)
            }

        } catch (error) {
            showToast("Error", error.message, "error")
        } finally {
            setIsUpdating(false)
        }
    }

    useEffect(() => {
      if(authUser) {
            const isFollowing = authUser.following.includes(userId)
            setIsFollowing(isFollowing)
      }
    }, [authUser, userId])
    


  return {handleFollowUser, isFollowing, isUpdating}
}

export default useFollowUser