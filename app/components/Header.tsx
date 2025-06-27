import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 h-16 bg-zinc-900 border-b border-zinc-700">
            {/* Noise overlay inside header */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-[-1]" />
            <div className="max-w-8xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 text-white font-bold text-3xl">
                    <Image src="/logo.png" alt="DevTyper" width={35} height={24} />
                    DevTyper
                </Link>

                {/* Center: Nav Links */}
                <nav className="hidden md:flex gap-8 text-zinc-300 text-base">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>
                </div>

                {/* Right: User Actions */}
                <div className="flex gap-2">
                    <Link href="/login">
                        <button className="px-4 py-1.5 border border-white text-white rounded-md text-sm hover:bg-white hover:text-zinc-900 transition">Login</button>
                    </Link>
                    <Link href="/join">
                        <button className="px-4 py-1.5 border border-red-500 text-red-500 rounded-md text-sm hover:bg-red-500 hover:text-white transition">Join</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}