import { Button, Input, Textarea } from '@nextui-org/react';
import InputPassword from './InputPassword';
import InputFile from './InputFile';
import SelectorInput from './SelectorInput';

export default function FormHoster() {
  return (
    <form
      action=""
      className="mx-auto container flex flex-col gap-7">
      <Input
        type="text"
        label="Username"
        labelPlacement="outside"
        placeholder="Username"
        radius="sm"
        size="lg"
        variant="bordered"
      />
      <InputPassword variant="bordered" />
      <Input
        type="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Email"
        radius="sm"
        size="lg"
        variant="bordered"
      />
      <Input
        type="number"
        label="Nomor Handphone"
        labelPlacement="outside"
        placeholder="Nomor Handphone"
        radius="sm"
        size="lg"
        variant="bordered"
      />
      <Textarea
        label="Alamat"
        labelPlacement="outside"
        placeholder="Masukkan alamat lengkap"
        variant="bordered"
        radius="sm"
        size="lg"
      />
      <InputFile
        label="Upload Foto KTP"
        description="Upload Foto KTP"
      />
      <InputFile
        label="Upload Foto Selfie Dengan KTP"
        description="Upload Foto Selfie Dengan KTP"
      />
      <SelectorInput />
      <Input
        type="number"
        label="Input Nomor Rekening"
        labelPlacement="outside"
        placeholder="Input Nomor Rekening"
        radius="sm"
        size="lg"
        variant="bordered"
      />
      <InputFile
        label="Foto Buku Tabungan"
        description="Foto Buku Tabungan"
      />
      <Button
      size='lg'
      radius='sm'
      color='danger'
      >
        Register
      </Button>
    </form>
  );
}
