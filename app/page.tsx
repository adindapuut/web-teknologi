import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Header section */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-32">
        <Image
          src="/logo/uia-logo.png"
          width={150}  // Lebih kecil agar sesuai
          height={100}
          className="hidden md:block"
          alt="Banner UIA"
        />
      </div>

      {/* Main content */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Left section with welcome message */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-4 py-8 md:w-2/5 md:px-10">

          <p className={`${lusitana.className} text-lg text-gray-800 md:text-2xl md:leading-relaxed`}>
            <strong>Selamat Datang!</strong> <br /> Ini adalah situs web pembelajaran{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Mata Kuliah Web Teknologi
            </a>, Dosen pengampu <b>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
          </p>

          {/* Login button */}
          <Link
            href="/login"
            className="flex items-center gap-3 self-start rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Right section for hero images */}
        <div className="flex items-center justify-center p-4 md:w-3/5 md:px-12 md:py-10">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}