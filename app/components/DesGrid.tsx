import { Edit, Eye } from "lucide-react";
import { poppins } from "@/lib/fonts";

export default function DesGrid() {
    const features = [
        {
            icon: <Edit className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Capture Your Own Insights",
            description:
                "With Genie AF, every screenshot you take can become a powerful learning resource. Save explanations for later, organize them by topic, or share them with others when you choose. Your captured insights not only strengthen your own understanding but can also guide and inspire the community — making learning smarter, simpler, and more collaborative.",
            image: "/Feature/thinking1.png"
        },
        {
            icon: <Eye className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Understand From Every Angle",
            description:
                "With Genie AF, you’re never limited to a single explanation. Discover how others interpret the same screenshot, compare perspectives, and uncover insights you might have missed. By seeing different ways of breaking things down, you deepen your understanding and expand how you think — one page, many minds.",
            image: "/Feature/Mindshot.png"
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-12">
            <div className={`${poppins.className} grid gap-6 sm:grid-cols-3 max-w-6xl mx-auto`}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${
                            index === 0 ? "sm:col-span-1" : "sm:col-span-2"
                        } rounded-xl p-6 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition bg-[url('/paper-texture.jpg')] bg-cover bg-blend-overlay`}
                        style={{ backgroundColor: "#2F2B3A" }}
                    >
                        {/* Icon */}
                        <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3B3452] rounded-lg">
                                {feature.icon}
                            </div>
                        </div>
                        {/* Title */}
                        <h3 className="text-3xl font-semibold text-white mb-2">
                            {feature.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-400 text-xl mb-6">
                            {feature.description}
                        </p>
                        {/* Image */}
                        {feature.image && (
                            <div className="w-full flex justify-center">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="mt-4 w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
