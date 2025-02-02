import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { GoogleLogin } from "@react-oauth/google"

export default function Profile() {
    const isLoggedIn = true;
    const onSuccess = (res: { credentials: string }) => {

    }
    return (
        <>
            {isLoggedIn ? (
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <Link href={`/user/$user.id`} className='text-neutral-400 font-semibold hover:underline'>
                            First Last
                        </Link>
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/kbpatel309.png" />
                            <AvatarFallback>
                                KP
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            ) : (
                <GoogleLogin onSuccess={res => onSuccess(res)} />
            )}
        </>
    );
}