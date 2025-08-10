import { Code, Zap, Users, Trophy } from "lucide-react";

export default function Working() {
    const steps = [
        {
            icon: <Code className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Pick a Challenge",
            description:
                "Choose from a vast library of coding problems tailored to your level and goals. Whether you're brushing up on basics or tackling advanced algorithms, there's something for you.",
        },
        {
            icon: <Zap className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Code & Solve",
            description:
                "Dive into the editor and put your skills to the test. Solve problems at your own pace or race against the clock in speed challenges.",
        },
        {
            icon: <Users className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Learn From Others",
            description:
                "After solving, explore creative solutions from other developers. Compare approaches, learn new tricks, and discuss strategies with the community.",
        },
        {
            icon: <Trophy className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Level Up",
            description:
                "Track your progress, earn badges, and climb the leaderboard as you complete challenges and improve your coding skills.",
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-12 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-4">
                How it Works?
            </h1>
            <p className="text-base sm:text-xl max-w-4xl mx-auto leading-relaxed mb-10 text-gray-300">
                From beginner to expert, follow these simple steps to enhance your skills, challenge yourself, and grow as a developer.
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
