import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-[#030303] text-[#F1EFEC] h-[20vh] flex items-center justify-between px-[10%]">
            <div>Logo</div>
            <nav className="hidden md:flex gap-10 items-center">
                <Link href="/">Home</Link>
                <Link href="/about-me">About me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div>Mode</div>
        </header>
    );
};

export default Header;