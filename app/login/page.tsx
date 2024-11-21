import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-300 p-4 md:h-52">
                <Image
                    src="/logo/uia-logo.png"
                    width={400}
                    height={300}
                    className="hidden md:block"
                    alt="Banner UIA"
                />
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 m-auto">
                <form className="space-y-6">
                    <h1 className={`${lusitana.className} text-xl md:text-2xl`}>
                        Silahkan Masuk dengan akun Anda.
                    </h1>
                    <div className="w-full">
                        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Ketikkan alamat email"
                                required
                            />
                            <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
                            Kata Sandi
                        </label>
                        <div className="relative">
                            <input
                                className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Ketikkan kata sandi"
                                required
                            />
                            <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Masuk <ArrowRightIcon className="h-5 w-5" />
                    </button>
                </form>
            </div>
        </main>
    );
}