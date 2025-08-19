import { Code2, Timer } from "lucide-react";

export default function FeaturesGrid() {
    const features = [
        {
            icon: <Code2 className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Instant Explanations",
            description:
                "Turn any screenshot into clarity within seconds. Genie AF instantly breaks down complex pages — whether it’s code, articles, or study material — so you can focus on understanding, not searching. Learn faster, stay in flow, and reveal insights only when you want to.",
            image: "/Feature/coding-illustration.avif"
        },
        {
            icon: <Timer className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Stealth Learning",
            description:
                "Learn without distractions or pressure. Genie AF works in the background, instantly explaining what’s on your screen while staying invisible to others. Stay in control of when you reveal your insights — making your learning process private, seamless, and focused entirely on clarity.",
            image: "/Feature/speed-illustration.avif"
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-12">
            <div className="grid gap-6 sm:grid-cols-3 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${
                            index === 0 ? "sm:col-span-2" : "sm:col-span-1"
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
