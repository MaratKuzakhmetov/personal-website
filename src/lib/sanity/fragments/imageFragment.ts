export const imageFragment = /* groq */ `
  "src": asset->url + "?auto=format&q=70",
  "dimensions": asset->metadata.dimensions,
  "alt": alt,
  "key": _key
`;
