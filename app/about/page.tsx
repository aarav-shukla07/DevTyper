import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header />
            <div className="relative bg-zinc-900 text-white min-h-screen">
                <div className="absolute inset-0 z-0 bg-noise" />
                <main className="relative z-10">
                </main>
            </div>
        </>
    )
}