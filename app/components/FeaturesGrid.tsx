import { Code2, Timer } from "lucide-react";

export default function FeaturesGrid() {
    const features = [
        {
            icon: <Code2 className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Real Coding Challenges",
            description: "Work on practical, time-bound problems inspired by real-world scenarios. Each challenge pushes you to think critically, code efficiently, and adapt quickly — just like in professional development environments or competitive programming contests.",
            image: "/Feature/coding-illustration.avif"
        },
        {
            icon: <Timer className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Speed Tracking",
            description: "Monitor your coding speed with precise timers that record your start-to-finish performance. Identify bottlenecks, track your improvements over time, and set personal benchmarks to stay motivated and keep pushing your limits.",
            image: "/Feature/speed-illustration.avif"
        },
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        className="rounded-xl p-6 text-left shadow-md hover:shadow-lg hover:-translate-y-1 transition bg-[url('/paper-texture.jpg')] bg-cover bg-blend-overlay"
                        style={{ backgroundColor: '#2F2B3A' }} 
                    >

                        <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3B3452] rounded-lg">
                                {feature.icon}
                            </div>
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-xl mb-6">{feature.description}</p>
                        {feature.image && (
                            <div className="w-full flex justify-center">
                                <img src={feature.image} alt={feature.title} className="mt-4 w-full h-full object-cover rounded-lg" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
