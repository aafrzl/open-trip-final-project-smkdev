import { Logo } from '@/components/Icons/Icons';
import FormLogin from '@/components/Login/FormLogin';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-login-bg w-1/2 h-screen bg-cover hidden lg:flex" />
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 gap-y-20 mt-24 sm:mt-0">
        <Logo />
        <FormLogin />
      </div>
    </div>
  );
}
