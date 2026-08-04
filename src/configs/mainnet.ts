import { buildMainnetConfig } from "boltz-swaps/presets/mainnet";
import { type Config, baseConfig, chooseUrl } from "src/configs/base";
import { envRpcUrls } from "src/configs/rpcs";
import { usdt0CanSendOverrides } from "src/configs/usdt0";

const mainnetPreset = buildMainnetConfig({
    rpcUrls: envRpcUrls,
    canSend: usdt0CanSendOverrides,
    btcMempoolApiUrl: import.meta.env.VITE_MEMPOOL_API_URL || undefined,
});

// coinos runs a BTC / L-BTC / Lightning-only backend — no EVM/stablecoin
// pairs are served, so restrict the asset picker to what actually works.
// LN is injected by the selector regardless (it's BTC's Lightning transport).
const enabledAssets = new Set(["BTC", "L-BTC"]);
const assets = Object.fromEntries(
    Object.entries(mainnetPreset.assets ?? {}).filter(([symbol]) =>
        enabledAssets.has(symbol),
    ),
);

const config = {
    ...baseConfig,
    network: "mainnet",
    loglevel: "debug",
    apiUrl: {
        normal: "https://swap.coinos.io",
        tor: "https://swap.coinos.io",
    },
    cctpApiUrl: mainnetPreset.cctpApiUrl,
    solburnUrl: mainnetPreset.solburnUrl,
    assets,
} as Config;

export { config, chooseUrl };
