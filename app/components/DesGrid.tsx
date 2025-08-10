import { Edit, Eye } from "lucide-react";

export default function DesGrid() {
    const features = [
        {
            icon: <Edit className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Create Your Own Challenges",
            description:
                "Design coding problems that match your interests and target specific skill sets. Push the community with your creativity, insight, and coding expertise. From classic interview-style tasks to high-pressure speed challenges, your ideas can shape how others learn. Earn recognition as a top contributor and inspire the next wave of developers.",
            image: "/Feature/thinking1.png"
        },
        {
            icon: <Eye className="w-8 h-8 text-[#E4D9FF]" />,
            title: "Learn From Every Perspective",
            description:
                "After each challenge, explore how others approached the same problem. Compare solutions, discover clever shortcuts, and uncover techniques you never considered. Share your thoughts, debate best practices, and gain a deeper understanding by seeing the problem through many minds.",
            image: "/Feature/Mindshot.png"
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-12">
            <div className="grid gap-6 sm:grid-cols-3 max-w-6xl mx-auto">
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
