# Been There Done That

## About

Personal Blog companion to by vlogs.


---

## Article Templates (markdown)

```md
---
slug: placeholder-md
title: Placeholder MD
authors: [brennan]
tags: []
---

log posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

:::

{/* truncate */}

For example, use JSX to create an interactive button:

```js
<button onClick={() => alert("button clicked!")}>Click me!</button>

```

## Apps Preview Image Generation

1. Develop your app, publish it.
2. Use https://www.site-shot.com/ to capture a screenshot of your app - Card preview resolution: `1200 x 675`
3. Alternatively, just use computer's native screen capture features

## Google Maps Embed API (FREE and UNLIMITED)

![API Pricing](/docs/api-pricing.png)

![API Restriction](/docs/api-restriction.png)

## Embeding a MapEmbed using MapEmbed.tsx - 3 Options (placeName, placeId, coordinates)

```ts
import { MapEmbed } from "@site/src/_components/MapEmbed";

// Option 1
<MapEmbed placeName="Sembawang Hot Spring Park" />

// Option 2
<MapEmbed placeId="ChIJWwsOaXkT2jERYqyeEFN3rPA" />

// Option 3
<MapEmbed latitude={1.434938} longitude={103.82206} zoom={15} />
```
- In sequence of most tediousness to implement.
  - Option 1 - Self-explanatory. Just type the place name.
  - Option 2 - Use the Place ID Finder API (https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder).
  - Option 3 - Key in location on Google Maps, Right Click the pin on the Maps, Copy the coordinates.