'use client';

import { Button, Input } from '@nextui-org/react';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function UserRegister() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="h-screen bg-[url('.//../public/images/register-bg.jpg')] bg-cover flex items-center justify-start">
      <div className="flex flex-col items-start justify-center bg-zinc-50 w-[31rem] mx-10 gap-y-14 rounded-xl p-6 lg:p-14">
        <h2 className="text-3xl font-medium">Choose Registration</h2>
        <form
          action=""
          className="flex flex-col gap-7 w-full ">
          <Input
            type="text"
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
          <Input
            label="Email"
            type="email"
            labelPlacement="outside"
            placeholder="Email"
            radius="sm"
            size="lg"
          />
          <Button
            type="submit"
            size="lg"
            color="danger"
            className="font-medium w-full"
            radius="sm">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

// https://dsc.gg/coding-with-afrizal