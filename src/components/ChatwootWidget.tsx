"use client";

import Script from "next/script";

export function ChatwootWidget() {
    return (
        <Script
            id="chatwoot-widget"
            src="https://chat.meronatic.com/packs/js/sdk.js"
            strategy="lazyOnload"
            onLoad={() => {
                // @ts-ignore
                window.chatwootSDK.run({
                    websiteToken: "LFQQNMEq872v3i3jwoRmZPZ9",
                    baseUrl: "https://chat.meronatic.com",
                });
            }}
        />
    );
}
