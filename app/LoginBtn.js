'use client'

import { usePathname, useRouter } from 'next/navigation';

export default function LoginBtn() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <button onClick={() => { 
            router.push('/potato/login?signin=true');
        }}>Sign in</button>
    );
}