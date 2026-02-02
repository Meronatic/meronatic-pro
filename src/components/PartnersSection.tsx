"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";

const PARTNERS = [
    { name: "Meydan", logo: "/images/partners/meydan.jpg" },
    { name: "SPC Free Zone", logo: "/images/partners/spc-free-zone.jpg" },
    { name: "Ajman Free Zone", logo: "/images/partners/ajman-free-zone.jpg" },
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

                <div className="flex gap-16 md:gap-24 animate-tech-scroll flex-nowrap min-w-full">
                    {/* Render 8 sets to ensure smooth loop on large screens */}
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div key={i} className="whitespace-nowrap flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 duration-500 cursor-default relative w-80 h-40">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
