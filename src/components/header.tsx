
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@img/logo.png";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between p-4 sticky top-0 w-full z-50 bg-background border-b border-gray">
            <Image src={logo} alt="Logo" width={100} height={100} />
        </nav>
    );
}
