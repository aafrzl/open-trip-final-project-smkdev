'use client';

import { Button, Input } from '@nextui-org/react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FormLogin() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 w-[80%] lg:w-1/2">
      <form className="flex flex-col gap-y-10 w-full">
        <Input
          label="Username"
          labelPlacement="outside"
          placeholder="Username"
          radius="sm"
          size="lg"
        />
        <Input
          label="Password"
          labelPlacement="outside"
          placeholder="Password"
          radius="sm"
          size="lg"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}>
              {isVisible ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
        <Button
          color="danger"
          radius="sm"
          size="lg"
          className="text-medium font-semibold">
          Login
        </Button>
      </form>
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="text-[#8F8F8F] text-base font-normal">
          Forgot password?
        </Link>
        <div className="inline-flex items-center gap-x-1">
          <p className="text-[#8F8F8F] text-base font-normal">
            Don’t have an account?
          </p>
          <Link
            href={'/register/user'}
            className="text-main">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

// https://dsc.gg/coding-with-afrizal
