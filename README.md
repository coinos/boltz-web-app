# Coinos Swap Web App

This is the source of the web app served at
[swap.coinos.io](https://swap.coinos.io/). It enables **non-custodial** swaps
between different Bitcoin layers (Lightning / Bitcoin / Liquid).

It is a fork of the excellent
[BoltzExchange/boltz-web-app](https://github.com/BoltzExchange/boltz-web-app),
rebranded for the independent swap service operated by
[coinos](https://coinos.io). It is **not** operated by or affiliated with Team
Boltz — please do not contact Boltz for support with swaps made on
swap.coinos.io.

## Changes from upstream

- Rebranded as Coinos Swap (logos, PWA manifests, social metadata, i18n copy)
- API endpoint pointed at the swap.coinos.io backend
- Removed Boltz product pages, support/social links, Chatwoot widget, and
  legal documents
- Trimmed the landing page (removed node stats, integrations and partner
  sections)

The backend serving swap.coinos.io is an **unmodified**
[BoltzExchange/boltz-backend](https://github.com/BoltzExchange/boltz-backend)
(official Docker image).

## Building

```
bun install
bun run mainnet                              # select src/configs/mainnet.ts
bun run index-template-vars.mjs --regular    # generate index.html
bun run build
```

The build output lands in `dist/`.

## License

[AGPL-3.0](LICENSE), same as upstream.
