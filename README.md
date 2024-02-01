# OnlySwap Interface

An open source interface for OnlySwap -- a protocol for decentralized exchange of Ethereum tokens.

- Website       : [OnlyLayer](https://onlylayer.com/)
- Interface     : [OnlySwap](https://onlyswap.org/)
- Whitepaper    : [Docs Only](https://only-layer.gitbook.io/only-layer/)
- Twitter       : [Twitter](https://x.com/onlylayer)
- Discord       : [Discord](https://discord.gg/EphNbybAgb)

## Social Media the OnlySwap

---
[![Website](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png)](https://onlylayer.com/)[1]
[![Interface](https://cdn-icons-png.flaticon.com/512/2644/2644370.png)](https://onlyswap.org/)[2]
[![Whitepaper](https://cdn-icons-png.freepik.com/512/2702/2702154.png)](https://only-layer.gitbook.io/only-layer/)[3]
---

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.
