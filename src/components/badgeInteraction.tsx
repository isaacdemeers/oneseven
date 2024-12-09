import { motion } from "framer-motion";
import CustomBadge from "./badge";

export default function BadgeInteraction() {
    return (
        <>
            <CustomBadge className="rotate-6">OST +</CustomBadge>
            <CustomBadge className="-rotate-2">NYLAS</CustomBadge>
        </>
    );
}
