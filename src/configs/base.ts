import type { Asset, Url } from "boltz-swaps/types";
import type log from "loglevel";

export type Config = {
    apiUrl: Url;
    network: "mainnet" | "regtest";
    isBeta?: boolean;
    isPro?: boolean;
    assets?: Record<string, Asset>;
    cctpApiUrl?: string;
    solburnUrl?: string;
    torUrl?: string;
} & typeof defaults;

const defaults = {
    // Disables API endpoints that create cooperative signatures for claim
    // and refund transactions
    // **Should only be enabled for testing purposes**
    cooperativeDisabled: false,

    preventReloadOnPendingSwaps: true,

    loglevel: "info" as log.LogLevelDesc,
    defaultLanguage: "en",
    gasSponsor: {
        normal: "https://sponsor.ccxp.space/",
        tor: "http://bcyxkoqqofgnygmajez5rmpk2ne3bbq3p4l2c6yk57cilvfm4pnbp6ad.onion/",
    },
    supportUrl: "",
    twitterUrl: "",
    githubUrl: "https://github.com/coinos",
    repoUrl: "https://github.com/coinos/boltz-web-app",
    backendRepoUrl: "https://github.com/BoltzExchange/boltz-backend",
    docsUrl: "",
    blogUrl: "",
    partnerUrl: "",
    nostrUrl: "",
    statusUrl: "",
    youtubeUrl: "",
    brandingUrl: "",
    regtestUrl: "",
    email: "",
    dnsOverHttps: "https://1.1.1.1/dns-query",
    chatwootUrl: undefined as string | undefined,
    preimageValidation: "https://validate-payment.com",
    layerZeroExplorerUrl: "https://layerzeroscan.com",
    cctpExplorerUrl: "https://ccxp.space",
    oftDeploymentsUrl: "https://docs.usdt0.to/api/deployments",
    rateProviders: {
        Kraken: "https://api.kraken.com/0/public/Ticker",
        Mempool: "https://mempool.space/api/v1/prices",
        CoinGecko: "https://api.coingecko.com/api/v3/simple/price",
    },
};

const isTor = () =>
    typeof window !== "undefined" &&
    window.location.hostname.endsWith(".onion");

const chooseUrl = (url?: Url) =>
    url ? (isTor() && url.tor ? url.tor : url.normal) : undefined;

const baseConfig: Omit<Config, "network" | "apiUrl"> = defaults;

export { baseConfig, chooseUrl, isTor };
