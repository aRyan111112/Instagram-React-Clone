import {
	Avatar,
	Button,
	Divider,
	Flex,
	GridItem,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";
import Caption from "../Comment/Caption";


function ProfilePost({ post }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const userProfile = useUserProfileStore((state) => state.userProfile)
  const authUser = useAuthStore((state) => state.user)
  const showToast = useShowToast()
  const [isDeleting, setIsDeleting] = useState(false)
  const deletePost = usePostStore((state) => state.deletePost)
  const decrementPostsCount = useUserProfileStore((state) => state.deletePost);

  const handleDeletePost = async () => {
    if(!window.confirm("Are you sure want to delete this post?")) return;
    if(isDeleting) return;

    try {
      const imageRef = ref(storage, `posts/${post.id}`)
      await deleteObject(imageRef)
      const userRef = doc(firestore, "users", authUser.uid)
      await deleteDoc(doc(firestore, "posts", post.id))

      await updateDoc(userRef, {
        posts: arrayRemove(post.id)
      })

      deletePost(post.id)
      decrementPostsCount(post.id)  
      showToast("Success", "Post deleted successfully", "success")
    } catch (error) {
      showToast("Error", error.message, "error")
    } finally {
      setIsDeleting(false)
    }
  }



  return (
    <>
      <GridItem
        aspectRatio={1 / 1}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        cursor={"pointer"}
        position={"relative"}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          bg={"blackAlpha.600"}
          zIndex={1}
          top={0}
          right={0}
          left={0}
          bottom={0}
          justifyContent={"center"}
          alignItems={"center"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={30} fontSize={20}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={1} >
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"}>{post.likes.length}</Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} gap={1}>
              <FaComment size={20} />
              <Text fontWeight={"bold"}>{post.comments.length}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={post.imageURL} w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "3xl", md: "5xl" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex w={{ base: "90", sm: "70%", md: "full" }} mx={"auto"} gap="4" maxH={"90vh"} minH={"50vh"}>

              {/* post image */}
              <Flex flex={1.5}
                borderRadius={4}
                border={"1px solid"}
                overflow={"hidden"}
                borderColor={"whiteAlpha.300"}
                justifyContent={"center"}
                alignItems={"center"}
                >
                <Image src={post.imageURL} alt='Profile-post' objectFit={"contain"}/>
              </Flex>

              {/* ohter things */}
              <Flex flex={1} flexDirection={"column"} px={10} display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={2}>
                    <Avatar src={userProfile.profilePicURL} size={"sm"} name='profile-pic' />
                    <Text fontSize={14} fontWeight={"bold"}>{userProfile.username}</Text>
                  </Flex>
                  {authUser?.uid === userProfile.uid && (
                    <Button _hover={{ bg: "whiteAlpha.300", color: "red.600" }} bg={"transparent"}p={1} borderRadius={4} onClick={handleDeletePost} isLoading={isDeleting}>
                    <AiFillDelete size={20} cursor={"pointer"} />
                  </Button>
                  )}
                </Flex>

                <Divider orientation='horizontal' my={4} bg={"gray.500"} />

                <VStack overflowY={"auto"} w={"full"} alignItems={"start"} maxH={"450px"}>
                  {/* caption */}
                  {post.caption && <Caption post= {post} />}
                  {/* comments */}
                  {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment}/>
                  ))}
                </VStack>
                <Divider orientation='horizontal' my={4} bg={"gray.500"} />
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost