import { buildMainnetConfig } from "boltz-swaps/presets/mainnet";
import { type Config, baseConfig, chooseUrl } from "src/configs/base";
import { envRpcUrls } from "src/configs/rpcs";
import { usdt0CanSendOverrides } from "src/configs/usdt0";

const mainnetPreset = buildMainnetConfig({
    rpcUrls: envRpcUrls,
    canSend: usdt0CanSendOverrides,
    btcMempoolApiUrl: import.meta.env.VITE_MEMPOOL_API_URL || undefined,
});

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
    assets: mainnetPreset.assets,
} as Config;

export { config, chooseUrl };
