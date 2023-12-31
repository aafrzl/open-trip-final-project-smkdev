import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navbar/Navigation';
interface Props {
  children: React.ReactNode;
}

export default function LayoutHomepage({ children }: Props) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
