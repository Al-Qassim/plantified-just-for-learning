const base = import.meta.env.BASE_URL;

export type Personality = {
  id: string;
  prompt: string;
  name: string;
  price: number;
  image: string;
};

export const personalities: Personality[] = [
  {
    id: "ivy",
    prompt: "Always you Busy?",
    name: "Meet Ivy",
    price: 24.99,
    image: `${base}plants/ivy.png`,
  },
  {
    id: "mint",
    prompt: "Need for inspiration?",
    name: "Meet mint",
    price: 5.99,
    image: `${base}plants/mint.png`,
  },
  {
    id: "spike",
    prompt: "Always on the move?",
    name: "Meet Spike",
    price: 16.99,
    image: `${base}plants/cactus-spike.png`,
  },
];
