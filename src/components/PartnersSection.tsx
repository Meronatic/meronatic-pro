"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";

const PARTNERS = [
    { name: "Meydan", logo: "/images/partners/meydan.png" },
    { name: "SPC Free Zone", logo: "/images/partners/spc-free-zone.png" },
    { name: "Ajman Free Zone", logo: "/images/partners/ajman-free-zone.png" },
];

export function PartnersSection() {
    return (
        <section className="py-12 md:py-16 bg-transparent border-b border-primary/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <FadeIn>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        Trusted by Leading Corporate Entities
                    </p>
                </FadeIn>
            </div>

            <div className="relative flex overflow-hidden mask-linear-fade">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex gap-4 md:gap-24 animate-tech-scroll flex-nowrap min-w-full">
                    {/* Render 8 sets to ensure smooth loop on large screens */}
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div key={i} className="whitespace-nowrap flex items-center justify-center transition-all duration-500 cursor-default relative w-28 md:w-80 h-14 md:h-40 bg-white/5 rounded-lg border border-white/5 mx-2 md:mx-4 shrink-0">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                sizes="(max-width: 768px) 112px, 320px"
                                className="object-contain p-2 md:p-6"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
