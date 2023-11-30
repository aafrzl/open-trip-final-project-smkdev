'use client'

import { Input } from '@nextui-org/react';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

interface InputPasswordProps {
  variant?: 'bordered' | 'flat';
}

export default function InputPassword({ variant = 'bordered' }: InputPasswordProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="Password"
      labelPlacement="outside"
      placeholder="Password"
      radius="sm"
      size="lg"
      variant={variant}
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
  );
}
