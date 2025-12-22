import { Code2, Palette, Rocket, Users } from 'lucide-react';

const features = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Creation of modern and scalable web applications using the latest technologies.',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Intuitive and attractive interfaces focused on the user experience.',
    },
    {
        icon: Rocket,
        title: 'Optimization',
        description: 'Exceptional performance and best practices in every project.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Effective teamwork and clear communication at all times.',
    },
];

const AboutMe = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">About me</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-center mb-6">I am a systems engineer passionate about building technological solutions. My background is in software design, planning, and development, where I enjoy creating robust, functional, and scalable applications.</p>
                    <p className="text-center mb-6">I have experience in backend and frontend development, where I integrate technologies such as artificial intelligence and blockchain to build innovative projects.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={feature.title} className="bg-withe dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-[#393E46] dark:text-white" />
                            </div>
                            <h3 className="mb-2">{feature.title}</h3>
                            <p className="text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;