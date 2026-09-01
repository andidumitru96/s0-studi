export const projects = [
  {
    slug: "casa-q",
    title: "Casa Q",
    year: "2026",
    location: "Bucharest, Romania",
    discipline: "Interior architecture",
    statement: "Dark timber, quiet light, one continuous interior.",
    description:
      "A refined interior shaped through depth, continuity and material intensity. Dark timber forms a continuous architectural envelope, interrupted by precise stone insertions and the sculptural green-marble island. Herringbone flooring extends the spatial flow, while soft neutral furnishings and controlled light bring balance to the composition.",
    cover: "/images/05/f01 (2).png",
    images: [
      "/images/05/f01 (2).png",
      "/images/05/f01 (1).png",
      "/images/05/f01 (3).png",
      "/images/05/f01 (4).png",
      "/images/05/f01 (5).png",
    ],
  },
  {
    slug: "apartament-ad",
    title: "Apartament AD",
    year: "2026",
    location: "Bucharest, Romania",
    discipline: "Interior architecture",
    statement: "Warm walnut and mineral surfaces, held in balance.",
    description:
      "A calm interior defined by warm walnut joinery and soft mineral surfaces. Continuous timber volumes integrate storage and lighting into a single spatial language, while microcement, matte walls and neutral textiles diffuse light. Terracotta and brushed-metal accents add depth without disturbing the room's quiet clarity.",
    cover: "/images/01/a01-3.png",
    images: [
      "/images/01/a00.png",
      "/images/01/a01-3.png",
      "/images/01/a01-4.png",
      "/images/01/a01-5.png",
      "/images/01/a01-6.png",
      "/images/01/a01-7.png",
    ],
  },
  {
    slug: "apartament-m",
    title: "Apartament M",
    year: "2026",
    location: "Bucharest, Romania",
    discipline: "Interior architecture",
    statement: "A precise sequence of rooms, material and light.",
    description:
      "A contemporary interior organised by dark-walnut volumes and precise detailing. Joinery integrates storage and spatial transitions into a unified system. Warm neutrals, natural stone and soft textures allow daylight to shape the rooms, while restrained contrasts introduce focus without breaking the continuity.",
    cover: "/images/03/d01 (2).png",
    images: [
      "/images/03/d01 (2).png",
      "/images/03/d01 (3).png",
      "/images/03/d01 (4).png",
      "/images/03/d01 (6).png",
      "/images/03/d01 (7).png",
      "/images/03/d01 (8).png",
    ],
  },
  {
    slug: "casa-t",
    title: "Casa T",
    year: "2026",
    location: "Bucharest, Romania",
    discipline: "Interior architecture",
    statement: "Timber warmth cut by sculptural stone.",
    description:
      "An interior with a strong material identity, structured by the dialogue between timber surfaces and sculptural stone. Continuous wall-veneer volumes create a warm architectural envelope, while green marble elements introduce a tactile, geological presence and a controlled point of contrast.",
    cover: "/images/04/e 01 (1).png",
    images: [
      "/images/04/e 01 (1).png",
      "/images/04/e 01 (2).png",
      "/images/04/e 01 (3).png",
      "/images/04/e 01 (4).png",
      "/images/04/e 01 (5).png",
      "/images/04/e 01 (6).png",
    ],
  },
  {
    slug: "apartment-ac-b",
    title: "Apartment AC-B",
    year: "2025–2026",
    location: "Bucharest, Romania",
    discipline: "Interior architecture",
    statement: "Clarity of form, continuity of material.",
    description:
      "A calm and balanced apartment anchored by dark-walnut volumes. Storage, seating and transitions are integrated into a cohesive architectural system; neutral walls and soft textiles amplify natural light and keep the composition measured, warm and distinctly inhabitable.",
    cover: "/images/06/g01 (1).png",
    images: [
      "/images/06/g01 (1).png",
      "/images/06/g01 (2).png",
      "/images/06/g01 (3).png",
      "/images/06/g01 (4).png",
      "/images/06/g01 (5).png",
    ],
  },
  {
    slug: "apartament-x",
    title: "Apartament X",
    year: "2025",
    location: "Bucharest, Romania",
    discipline: "Interior architecture",
    statement: "A restrained home with moments of deliberate colour.",
    description:
      "A clean interior where neutral tones and dark timber organise the space. Stone and muted green surfaces add depth to the living areas, while a vivid red ceramic volume gives the bathroom an unexpected focal point — a controlled interruption within an otherwise quiet composition.",
    cover: "/images/02/b01 (1).png",
    images: [
      "/images/02/b01 (1).png",
      "/images/02/b01 (2).png",
      "/images/02/b01 (3).png",
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
