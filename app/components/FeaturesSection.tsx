import Image from "next/image"
import Link from "next/link"

export default function FeatureSection() {
    return (
        <div className="flex flex-col md:flex-row bg-[#3a2523] rounded-2xl overflow-hidden text-white-shadow-lg  gap-8 max-w-6xl mx-auto">
            {/*Left sideContent */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
                {/*Heading*/}
                <div className="text-3xl md:text-4xl font-semibold mb-4 font-mono tracking-tight">
                    Master your Skills
                </div>
                {/*Description */}
                <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
                    DevTyper is a speed-focused coding platform designed to sharpen your problem-solving under pressure.
                    Unlike traditional sites, we combine real coding challenges with time limits, live battles, and detailed speed
                    analytics — helping you code faster, think quicker, and level up for interviews and contests.
                    Build speed, consistency, and confidence — one challenge at a time.
                </p>
                {/*Button*/}
                <div className="hidden md:flex gap-2">
                    <Link href="/login">
                        <button className="px-4 py-1.5 border border-white text-white rounded-md text-lg hover:bg-white hover:text-zinc-900 transition">Get Started</button>
                    </Link>
                </div>
            </div>

            {/*Right Side*/}
            <div className="flex-1 flex justify-center items-center">
                <Image
                    src="/Feature/img.avif"
                    alt="Your Next Challenge"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-md"
                />
            </div>
        </div>
    )
}