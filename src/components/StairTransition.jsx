'use client';

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const StairTransition = () => {
    const pathname = usePathname()
    return (
        <>
            <AnimatePresence mode="wait" >
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-event-none z-40 flex " key={pathname}>
                </div>
            </AnimatePresence>
        </>
    )
}

export default StairTransition