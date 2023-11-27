import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navbar/Navigation';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function RegisterLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
