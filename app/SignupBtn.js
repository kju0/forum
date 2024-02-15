'use client'

import { signIn } from 'next-auth/react'

export default function SignupBtn() {
    return (
        <button onClick={() => { signIn() }}>Sign In</button>
    )
}

