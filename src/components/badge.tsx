import { ReactNode } from "react";
import { lexendDeca } from "@/utils/fonts";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

const CustomBadge = ({ children, className }: BadgeProps) => {
    return <div className={`${lexendDeca.className} ${className} bg-black text-white w-fit text-7xl border-white border-2 px-10 py-4 font-semibold rounded-full`}>{children}</div>;
};

export default CustomBadge;
