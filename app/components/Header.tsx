'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 h-16 bg-zinc-900 border-b border-zinc-700">
            {/* Noise overlay inside header */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-[-1]" />
            <div className="max-w-8xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 text-white font-bold text-3xl">
                    <Image src="/logo.png" alt="Genie AF" width={35} height={24} />
                    Genie AF
                </Link>

                {/* Center: Nav Links */}
                <nav className="hidden md:flex gap-6 text-zinc-300 text-base">
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <Link href="/about" className="hover:text-white transition">About</Link>
                    <Link href="/documentation" className="hover:text-white transition">Documentation</Link>
                    <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </nav>
                </div>

                {/* Right: User Actions */}
                <div className="hidden md:flex gap-2">
                    <Link href="/login">
                        <button className="px-4 py-1.5 border border-white text-white rounded-md text-sm hover:bg-white hover:text-zinc-900 transition">Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className="px-4 py-1.5 border border-violet-500 text-violet-500 rounded-md text-sm hover:bg-violet-500 hover:text-white transition">SignUp</button>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg 
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ): (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                </button>

                {/* Mobile Drop-down */}
                {menuOpen && (
                    <div className="md:hidden absolute top-full right-4 mt-2 w-64 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg p-4 space-y-3 z-50">
                        <Link href="/" className="block text-zinc-300 hover:text-white">Home</Link>
                        <Link href="/about" className="block text-zinc-300 hover:text-white">About</Link>
                        <Link href="/documentation" className="block text-zinc-300 hover:text-white">Documentation</Link>
                        <Link href="/contact" className="block text-zinc-300 hover:text-white">Contact</Link>
                        <hr className="border-zinc-700" />
                        <Link href="/login" className="block text-white">Login</Link>
                        <Link href="/join" className="block text-red-500">Join</Link>
                    </div>
                )}
            </div>
        </header>
    )
}