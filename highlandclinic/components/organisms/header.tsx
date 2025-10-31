// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
 
const Header = () => {
  return (
    <header className="bg-background-2 w-full sticky top-0 z-50">
      <div className="mx-w-[1440px] h-[65px] mx-auto px-6 md:px-8 flex items-center justify-between ">
          {/* Left Section: Logo and Brand Name */}
          <div className="flex items-center">
          
            {/* Whenever someone clics on the link page redirects to home/root "/" */}
            <Link href="/" className="flex items-center gap-3">
                <Image 
                    priority = {true}
                    src="/images/Logo.svg"
                    width={32}
                    height={32}
                    alt="Highland Medical Center"
                />
              
                 
                  {/* hidden in everything but large screens */}
                <h3 className="hidden lg:block"> 
                  Highland Medical Center
                </h3>
              
            </Link>
          </div>
          {/* Right Section: Navigation Links */}
          <div >
            <h4>Right Side</h4>

          </div>

      </div>
    </header>
  );
};
 
export default Header;