"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { Moon, Sun } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about-me' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
];

const Header = () => {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-[10vh] flex items-center justify-between px-[10%] bg-withe/80 dark:bg-black/80 backdrop-blur-md shadow-md">
            <Image
                className="invert dark:invert-0"
                src="/logo.png"
                alt="Next.js logo"
                width={100}
                height={50}
                priority
            />
            <div className="flex gap-10">
                <nav className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className={`transition-colors ${ pathname === item.href ? 'text-blue-400 font-semibold' : ''}`}>
                            {item.name}
                        </Link>

                    ))}

                </nav>
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                    {isDark ? (<Sun className="h-5 w-5" />) : (<Moon className="h-5 w-5" />)}
                </Button>
            </div>
        </header>
    );
};

export default Header;