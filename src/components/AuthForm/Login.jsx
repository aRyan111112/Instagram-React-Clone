import React from 'react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

function Login() {
    const [inputs, setinputs] = useState({
        email: "",
        password: "",
      })
    return (
        <>
            <Input
                placeholder='Email'
                value={inputs.email}
                onChange={(e) => setinputs({ ...inputs, email: e.target.value })}
                fontSize={14}
                type='email'
                size={"sm"}
            />
            <Input
                placeholder='Password'
                fontSize={14}
                onChange={(e) => setinputs({ ...inputs, password: e.target.value })}
                value={inputs.password}
                type='password'
                size={"sm"}

            />

            <Button w={"full"} colorScheme='blue'>
                Log in
            </Button>
        </>
    )
}

export default Login