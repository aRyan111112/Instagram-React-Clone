import React from 'react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import useLogin from '../../hooks/useLogin'
import { Alert, AlertIcon } from '@chakra-ui/react'

function Login() {
    const [inputs, setinputs] = useState({
        email: "",
        password: "",
    })

    const { loading, error, login } = useLogin()
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

            {error && (
                <Alert status='error'>
                    <AlertIcon />
                    {error.message}
                </Alert>
            )}


            <Button w={"full"} colorScheme='blue' onClick={() => login(inputs)} isLoading={loading}>
                Log in
            </Button>
        </>
    )
}

export default Login