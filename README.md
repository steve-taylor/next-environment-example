# Next.js runtime config POC

This demonstrates passing environment variables to Next.js at runtime and making use of them in the app.

The magic happens in [next.config.js](next.config.js) and [src/common/constants.ts](src/common/constants.ts).

## Setup

```sh
npm ci
```

## How to use

1. Set the `API_ORIGIN` environment variable to the API's origin (e.g. `https://api.example.com`).
2. Run `npm run dev`, e.g.
   ```sh
   API_ORIGIN=https://api.example.com npm run dev
   ```
3. Open http://localhost:3000/ in your browser

## Further reading

[next.config.js: Runtime Configuration | Next.js](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration)
