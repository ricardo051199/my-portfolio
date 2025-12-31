"use client";

import { Button } from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Textarea from '@/app/components/ui/Textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Message sent successfully! I will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'jricardo.pelaez.05@gmail.com',
            link: 'mailto:jricardo.pelaez.05@email.com',
        },
        {
            icon: Phone,
            title: 'Teléfono',
            value: '+591 76460793',
            link: 'tel:+51976460793',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Cochabamba, Bolivia',
            link: null,
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 bg-clip-text">
                        Contact
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div key={info.title} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                <info.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                {info.title}
                                </p>
                                {info.link ? (
                                <a
                                    href={info.link}
                                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {info.value}
                                </a>
                                ) : (
                                <p className="text-slate-700 dark:text-slate-300">
                                    {info.value}
                                </p>
                                )}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm text-slate-700 dark:text-slate-300">
                                Full Name
                                </label>
                                <Input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your full name"
                                required
                                className="w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-slate-700 dark:text-slate-300">
                                Email
                                </label>
                                <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                                className="w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm text-slate-700 dark:text-slate-300">
                                Message
                                </label>
                                <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Message . . ."
                                required
                                rows={6}
                                className="w-full"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full bg-blue-400">
                                <Send className="w-5 h-5 mr-2" />Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;