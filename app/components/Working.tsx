import { Camera, Eye, Users, BookOpen } from "lucide-react";
import { jetbrainsMono } from "@/lib/fonts";

export default function Working() {
    const steps = [
        {
            icon: <Camera className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Snap a Screenshot",
            description:
                "Capture any page — code, article, or study material. Genie AF instantly recognizes what’s on your screen.",
        },
        {
            icon: <Eye className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Get Instant Clarity",
            description:
                "Receive clean, simple explanations in real-time. No searching, no distractions — just direct understanding.",
        },
        {
            icon: <Users className="w-8 h-8 text-[#E4D9FF]" />,
            title: "See Other Perspectives",
            description:
                "Explore how others interpreted the same screenshot. Compare insights and discover new ways of thinking.",
        },
        {
            icon: <BookOpen className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Save & Learn",
            description:
                "Organize your explanations into a personal library. Revisit anytime or share when you’re ready.",
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-12 text-center">
            <h1 className={`${jetbrainsMono.className} text-2xl sm:text-3xl md:text-6xl font-semibold mb-4`}>
                How it Works?
            </h1>
            <p className={`${jetbrainsMono.className} text-base sm:text-xl max-w-4xl mx-auto leading-relaxed mb-10 text-gray-300`}>
                Genie AF turns screenshots into instant clarity. Stay in flow, learn smarter, and keep your knowledge invisible until you want to share.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="rounded-xl p-8 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition bg-[url('/paper-texture.jpg')] bg-cover bg-blend-overlay"
                        style={{ backgroundColor: "#2F2B3A" }}
                    >
                        {/* Icon */}
                        <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3B3452] rounded-lg">
                                {step.icon}
                            </div>
                        </div>
                        {/* Title */}
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            {step.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-400 text-lg mb-4">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
