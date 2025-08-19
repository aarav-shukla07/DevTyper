import { jetbrainsMono } from "@/lib/fonts";

export default function Description(){
    return(
        <div className={`${jetbrainsMono.className} flex flex-col items-center justify-center text-center p-4`}>
                <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-4">
                A Community of Learners
                </h1>
                <p className="text-base sm:text-xl max-w-5xl leading-relaxed">
                    Genie AF connects curious minds who believe learning should be effortless. From students to professionals, our users share explanations, tips, and insights that turn complex pages into simple knowledge. Every screenshot becomes a spark for understanding — helping you and others learn faster, smarter, and with greater clarity.
                </p>
        </div>
    );
}