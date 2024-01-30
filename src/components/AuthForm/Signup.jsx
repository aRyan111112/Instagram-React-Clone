import React from 'react'
import { useState } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

function Signup() {
  const [inputs, setinputs] = useState({
    email: "",
    username: "",
    fullname: "",
    password: ""
  }
  )
  const [showPassword, setshowPassword] = useState(false)

  return (
    <>
      <Input
        placeholder='Email'
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setinputs({ ...inputs, email: e.target.value })}
        fontSize={14}
        type='email'
      />
       <Input
        placeholder='Username'
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setinputs({ ...inputs, username: e.target.value })}
        fontSize={14}
        type='text'
      />
       <Input
        placeholder='Fullname'
        size={"sm"}
        value={inputs.fullname}
        onChange={(e) => setinputs({ ...inputs, fullname: e.target.value })}
        fontSize={14}
        type='text'
      />
      
      <InputGroup>
      <Input
        placeholder='Password'
        fontSize={14}
        size={"sm"}
        onChange={(e) => setinputs({ ...inputs, password: e.target.value })}
        value={inputs.password}
        type={showPassword ? "text" : "password"}
      />

      <InputRightElement h={"full"}>
        <Button onClick={() => {setshowPassword(!showPassword)}} variant={"ghost"} size={"sm"}>
          {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
        </Button>
      </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme='blue'>
        Sign Up
      </Button>
    </>
  )
}

export default Signup