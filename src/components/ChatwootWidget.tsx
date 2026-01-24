"use client";

import Script from "next/script";

export function ChatwootWidget() {
    return (
        <Script
            id="chatwoot-widget"
            src="http://chatwoot-twcoc0go8gg8cgsg0kwcog4o.72.62.191.145.sslip.io/packs/js/sdk.js"
            strategy="lazyOnload"
            onLoad={() => {
                // @ts-ignore
                window.chatwootSDK.run({
                    websiteToken: "LFQQNMEq872v3i3jwoRmZPZ9",
                    baseUrl:
                        "http://chatwoot-twcoc0go8gg8cgsg0kwcog4o.72.62.191.145.sslip.io",
                });
            }}
        />
    );
}
