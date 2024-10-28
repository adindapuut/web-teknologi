import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Logo Section */}
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">
          {/* Logo Image */}
          <Image
            src="/logo/uia-logo.png"
            width={150}
            height={75}
            className="block object-contain"
            alt="Banner UIA"
          />
        </div>
      </Link>
      
      {/* Navigation Links and Sign Out */}
      <div className="flex grow flex-col justify-between">
        <NavLinks />

        {/* Spacer (optional) */}
        <div className="hidden h-auto w-full grow md:block"></div>
        
        {/* Sign Out Button */}
        <form>
          <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <span className="hidden md:block">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}