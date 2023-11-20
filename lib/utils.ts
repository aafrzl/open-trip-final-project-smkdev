import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

export function getDayNight(day: number, night: number) {
  return `${day}D${night}N`;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);
}
