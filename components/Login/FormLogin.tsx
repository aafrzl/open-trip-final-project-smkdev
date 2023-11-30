import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import InputPassword from '../../app/(registerpage)/_components/InputPassword';

export default function FormLogin() {
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
        <InputPassword />
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
            href={'/register'}
            className="text-main">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

// https://dsc.gg/coding-with-afrizal
