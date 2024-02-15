'use client'

import { useRouter } from 'next/navigation';

export default function LoginBtn() {
    const router = useRouter();

    return (
        <button onClick={() => {
            router.push('/register');
        }}>Sign Up</button>
    );
}