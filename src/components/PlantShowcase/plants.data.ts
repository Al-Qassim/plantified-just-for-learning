const base = import.meta.env.BASE_URL;

export type PlantStats = {
  lifespan: string;
  height: string;
  watering: string;
};

export type Plant = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stats: PlantStats;
};

export const plants: Plant[] = [
  {
    id: "cactus",
    name: "Cactus: Spike",
    description:
      "The ultimate minimalist companion for your workspace. Spike doesn’t care about drama, never complains about the dry office air, and is perfectly happy being ignored for weeks. It stores its own water and guards your desk like a tiny, green, prickly soldier.",
    price: 18.99,
    image: `${base}plants/cactus.png`,
    stats: { lifespan: "10 - 50 Years", height: "15 - 30 cm", watering: "1x / Month" },
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    description:
      "Bella is the calming presence your stressful workweek needs. With its soothing, plump, gel-filled leaves, it acts like a little natural healthcare worker on your desk. It looks incredibly neat, clean, and adds a peaceful, refreshing aura to any workspace.",
    price: 18.99,
    image: `${base}plants/aloe-vera.png`,
    stats: { lifespan: "5 - 25 Years", height: "60 - 90 cm", watering: "1x / 3 Weeks" },
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    description:
      "Zeus is practically immortal and thrives on absolute neglect. Whether your office has zero sunlight or you forget to water it for a month, Zeus just keeps standing tall and sharp. It's the best plant for beginners who want maximum green vibes with zero effort.",
    price: 18.99,
    image: `${base}plants/snake-plant.png`,
    stats: { lifespan: "5 - 12 Years", height: "30 - 45 cm", watering: "1x / 2 Weeks" },
  },
  {
    id: "pothos",
    name: "Pothos",
    description:
      "Ivy is the overachiever of the plant world. Give it just a tiny bit of water and a splash of light, and its beautiful cascading vines will start growing rapidly. It loves to climb around monitors, shelves, and looks like a living, green waterfall on your desk.",
    price: 18.99,
    image: `${base}plants/pothos.png`,
    stats: { lifespan: "5 - 10 Years", height: "1 - 2 m", watering: "1x / Week" },
  },
  {
    id: "monstera",
    name: "Monstera",
    description:
      "Monty is the undisputed king of aesthetic workspaces. With its iconic, large, split leaves, it instantly elevates your desk from a boring workspace to a luxury aesthetic cafe. It’s a bit dramatic and loves to take up its own space, but it knows it looks good.",
    price: 18.99,
    image: `${base}plants/monstera.png`,
    stats: { lifespan: "15 - 30 Years", height: "1 - 1.5 m", watering: "1x / Week" },
  },
  {
    id: "pilea",
    name: "Pilea",
    description:
      'Penny brings a unique, playful energy to your desk with its perfectly round, coin-shaped leaves balancing on delicate stems. It pops out tiny baby plants constantly, making it the perfect "friendship plant" to pass around to your favorite coworkers.',
    price: 18.99,
    image: `${base}plants/pilea.png`,
    stats: { lifespan: "5 - 10 Years", height: "20 - 30 cm", watering: "1x / Week" },
  },
];
