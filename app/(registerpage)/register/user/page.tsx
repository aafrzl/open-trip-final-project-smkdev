'use client';

import InputPassword from '@/components/ui/InputPassword';
import { Button, Input } from '@nextui-org/react';

export default function UserRegister() {
  return (
    <div className="h-screen bg-register-bg bg-cover flex items-center justify-start">
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
          <InputPassword />
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