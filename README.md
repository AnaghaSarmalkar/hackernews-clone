# Hackernews Clone

## Reflection

It took me a while to complete this, but I enjoyed this challenge. Currently it takes sometime to load top stories on the UI. Ideally if the API had pagination, load time would improve. Right now I've implemented pagination on the frontend which shows 30 stories at a time.

The data in the original website is built using native HTML tables, but I decided to use Flexbox which is a modern CSS layout and provides more responsiveness.

## Tradeoffs and Limitations

### URL Abbreviation logic

The top level domain and secondary domain are extracted from the URL which works for a lot of cases. If the domain allows creation of user profiles and provides user level domains, Ive included that as well. Examples I found were for github.io.

Additionally, domains which add username in the path parameter like medium.com, github.com or twitter.com have also been included.

I did find some edge cases like `https://jackevans.bearblog.dev/refactoring-python-with-tree-sitter-jedi/` where my logic abbreviates it as `bearblog.dev` but Hackernews abbreviates it to `jackevans.bearblog.dev`. Same with `https://crpgbook.wordpress.com/`.

### State Management

Right now I'm storing the data returned by the API in the local state of the component. This works fine since the response only has 500 entries. But for larger data, I'd use some state management library like Redux or MobX.
To optimize querying and cache the API responses, I'd use `react-query`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
