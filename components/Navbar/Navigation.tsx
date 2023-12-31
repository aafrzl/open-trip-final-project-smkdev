'use client';

import { cn } from '@/lib/utils';
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { CompassIcon } from '../Icons/Icons';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      isBordered
      maxWidth="2xl">
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="start">
        <NavbarItem>
          <Link
            href={'/'}
            className="group text-base font-medium">
            Beranda
            <div
              className={cn(
                'block transition-all duration-500 h-0.5 rounded-full bg-main',
                pathname === '/'
                  ? 'max-w-full '
                  : 'max-w-0 group-hover:max-w-full'
              )}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={'/destinasi'}
            className="group text-base font-medium">
            Destinasi
            <div
              className={cn(
                'block transition-all duration-500 h-0.5 rounded-full bg-main',
                pathname === '/destinasi'
                  ? 'max-w-full '
                  : 'max-w-0 group-hover:max-w-full'
              )}
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Popover>
            <PopoverTrigger>
              <Button
                variant="light"
                isIconOnly
                size="sm">
                <Search />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <div className="flex items-center gap-x-2">
                <Input
                  type="text"
                  placeholder="Semua Tempat"
                  labelPlacement='inside'
                  label="Tujuan"
                  size='lg'
                  startContent={<Search />}
                />
                <Input
                  type="date"
                  labelPlacement='inside'
                  label="Jadwal"
                  size='lg'
                  startContent={<Search />}
                />
                <Button
                  color="danger"
                  size="lg"
                  radius="md">
                  Cari
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <div className="inline-flex items-center gap-2">
              <p className="uppercase font-bold text-xl">Open Trip</p>
              <CompassIcon className="w-8 h-8" />
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          variant="solid"
          color="default"
          radius="lg"
          className="font-semibold"
          onClick={() => router.push('/login')}>
          Login
        </Button>
        <Button
          variant="solid"
          color="danger"
          radius="lg"
          className="font-semibold hidden md:block"
          onClick={() => router.push('/register')}>
          Sign up
        </Button>
      </NavbarContent>
      <NavbarMenu
        className="bg-white"
        motionProps={{
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: {
            type: 'tween',
            stiffness: 500,
            damping: 50,
            ease: 'easeInOut',
          },
        }}>
        <NavbarMenuItem className="mb-10">
          <Input
            type="text"
            placeholder="Search your destination"
            startContent={<Search />}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href={'/'}
            className="group text-base font-medium">
            Beranda
            {pathname === '/' && (
              <div className="block max-w-[30%] transition-all duration-500 h-0.5 rounded-full bg-main" />
            )}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href={'/destinasi'}
            className="group text-base font-medium">
            Destinasi
            {pathname === '/destinasi' && (
              <div className="block max-w-[30%] transition-all duration-500 h-0.5 rounded-full bg-main" />
            )}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-4">
          <Button
            variant="solid"
            color="danger"
            radius="lg"
            className="font-semibold w-full">
            Sign up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
