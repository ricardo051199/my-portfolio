import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="">option 1</Link>
                <Link href="">option 2</Link>
                <Link href="">option 3</Link>
            </nav>
        </header>
    );
};

export default Header;