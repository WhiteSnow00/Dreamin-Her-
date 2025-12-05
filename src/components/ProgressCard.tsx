"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProgressCardProps {
    title: string;
    subtitle: string;
    progress: number;
    imageSrc?: string;
    delay?: number;
}

export function ProgressCard({
    title,
    subtitle,
    progress,
    imageSrc,
    delay = 0,
}: ProgressCardProps) {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
        >
            {/* Image Area */}
            <div className="relative w-full aspect-[16/10] bg-gray-100 flex items-center justify-center overflow-hidden">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <div className="text-gray-400 font-medium flex flex-col items-center">
                        <span className="text-4xl mb-2">🖼️</span>
                        <span>Sample Image</span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
                    </div>
                    <div className="bg-[#FF69B4] text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                        {clampedProgress}%
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-6 bg-[#E5E5E5] rounded-full overflow-hidden w-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF69B4] to-[#FF85C1]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${clampedProgress}%` }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.8,
                            ease: [0.4, 0, 0.2, 1], // Custom ease-out
                            delay: delay + 0.2,
                        }}
                        onAnimationComplete={() => {
                            // Optional: Trigger pulse effect here if needed via state, 
                            // but CSS animation on a pseudo-element is often smoother for continuous pulse.
                        }}
                    >
                        {/* Pulse effect overlay */}
                        <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
