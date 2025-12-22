import { Button } from "@/app/components/ui/Button";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="mb-4">Hi! I'm</p>
                    <h1 className="text-5xl md:text-7xl mb-6">Peláez Sarabia J. Ricardo</h1>
                    <p className="text-xl md:text-2xl mb-8">Systems Engineer</p>
                    <p className="max-w-2xl mx-auto mb-8">Passionate about software development, artificial intelligence, and blockchain. My drive is to create innovative technological solutions, explore the practical applications of AI, and leverage the potential of decentralized systems to build a more trustworthy and transparent digital future.</p>
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        <Button size="lg" className="bg-blue-400 text-white">Contact me</Button>
                        <Button size="lg" variant="outline">See Projects</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;