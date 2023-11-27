'use client'

import { Button, Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function RegiterPage() {
  const router = useRouter();

  return (
    <div className="h-screen bg-register-bg bg-cover flex items-center justify-start">
      <div className="flex flex-col items-start justify-center bg-zinc-50 w-[31rem] mx-10 gap-y-14 rounded-xl p-14">
        <h2 className="text-3xl font-medium">Choose Registration</h2>
        <Button
          size="lg"
          color="danger"
          className="font-medium w-full"
          radius="sm"
          onClick={() => router.push('/register/user')}
          >
          Register as User
        </Button>
        <Divider />
        <Button
          size="lg"
          color="danger"
          className="font-medium w-full"
          radius="sm"
          onClick={() => router.push('/register/hoster')}>
          Register as Hoster
        </Button>
      </div>
    </div>
  );
}

// https://dsc.gg/coding-with-afrizal