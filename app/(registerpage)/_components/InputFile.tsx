import React from 'react';
import { FileIcon } from '../../../components/Icons/Icons';

interface InputFileProps {
  label: string;
  description: string;
}

export default function InputFile({ label, description }: InputFileProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-medium mb-2">{label}</h3>
      <div className="h-40 rounded-lg border-2 border-dashed flex items-center justify-center flex-col">
        <label
          htmlFor="file"
          className="cursor-pointer text-center p-4 md:p-8">
          <FileIcon className="mx-auto" />
          <p className="mt-3 text-[#bbb] mx-auto text-xs">{description} (JPG, PNG)</p>
        </label>
        <input
          id="file"
          type="file"
          className="hidden"
        />
      </div>
    </div>
  );
}
