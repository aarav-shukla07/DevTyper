import Image from "next/image"
import Link from "next/link"

export default function FeatureSection() {
    return (
        <div className="flex flex-col md:flex-row bg-[#978BAD] rounded-2xl overflow-hidden text-white shadow-lg gap-8 max-w-6xl mx-auto p-4 sm:p-6 md:p-0">
            {/* Left Side Content */}
            <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-10">
                {/* Heading */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-mono tracking-tight">
                    Clarity in One Snap
                </div>
                {/* Description */}
                <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                    Genie AF is your invisible learning companion, built to make understanding effortless. 
                    Instead of wasting time searching, just snap a screenshot and get instant explanations of any page. 
                    Unlike traditional tools, Genie AF works in stealth mode — invisible until you choose to reveal it. 
                    Learn faster, stay focused, and keep your flow uninterrupted.
                    Master clarity, speed, and confidence — one screenshot at a time.
                </p>
                {/* Button (Visible on all devices now) */}
                <div className="flex gap-2">
                    <Link href="/login">
                        <button className="px-4 py-1.5 border border-white text-white rounded-md text-base sm:text-lg hover:bg-white hover:text-zinc-900 transition">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex justify-center items-center">
                <Image
                    src="/Feature/img.avif"
                    alt="Your Next Challenge"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-md w-full h-auto max-w-sm sm:max-w-md md:max-w-lg"
                />
            </div>
        </div>
    )
}
