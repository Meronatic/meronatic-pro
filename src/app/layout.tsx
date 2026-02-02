import "../index.css";
import React from "react";
import { Inter as FontSans } from "next/font/google"; // Using Inter as default sans font
import { cn } from "../components/ui/utils";
import { WhatsAppButton } from "../components/WhatsAppButton";
import Script from "next/script";
<<<<<<< HEAD
import { ChatwootWidget } from "../components/ChatwootWidget";
=======

>>>>>>> 378a0f332e613ea88367b8665c1a6b7d0bd5cb55

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Meronatic PRO Services",
    description: "Professional PRO Services in UAE",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}>
                {children}
                {/* <WhatsAppButton /> */}
<<<<<<< HEAD
                <ChatwootWidget />
=======
                <Script id="chatwoot-widget" strategy="afterInteractive">
                    {`
            (function(d,t) {
            var BASE_URL="https://chat.meronatic.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
                window.chatwootSDK.run({
                    websiteToken: 'LFQQNMEq872v3i3jwoRmZPZ9',
                    baseUrl: BASE_URL
                })
            }
        })(document,"script");
            `}
                </Script>
>>>>>>> 378a0f332e613ea88367b8665c1a6b7d0bd5cb55

            </body>
        </html>
    );
}
