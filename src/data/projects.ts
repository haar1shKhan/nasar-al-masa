import type { ProjectCategory } from "./services";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  year?: string;
  scope?: string;
  description?: string;
  client?: string;
  consultant?: string;
  featured?: boolean;
  coverImage?: string;
  images?: string[];
};

// Source: "Our Projects" in the elevator and HVAC brochures. Add `coverImage` / `images`
// (paths under /public) as photography becomes available; placeholders hold the layout until then.
export const projects: Project[] = [
  // Elevators & escalators
  {
    slug: "dubai-library-fujairah",
    title: "Dubai Library",
    category: "elevators",
    location: "Fujairah, UAE",
    scope: "Supply and installation",
    description: "Elevator supply and installation for a library in Fujairah.",
    featured: true,
    coverImage: "/images/projects/dubai-library-fujairah.png",
  },
  {
    slug: "naser-al-hafari",
    title: "Naser Al Hafari",
    category: "elevators",
    location: "Fujairah, UAE",
    scope: "Supply and installation",
    description:
      "Custom-built elevator solutions for residential and commercial properties.",
    coverImage: "/images/projects/aluminium-shaft.jpg",
  },
  {
    slug: "saif-al-hafari",
    title: "Saif Al Hafari",
    category: "elevators",
    location: "Siji, Fujairah, UAE",
    scope: "Supply and installation",
    description: "Supply and installation of elevators tailored to the building.",
    coverImage: "/images/projects/aluminium-shaft2.jpg",
  },
  {
    slug: "abdullii-group",
    title: "Abdullii Group",
    category: "elevators",
    location: "Dibba, Fujairah, UAE",
    scope: "Supply and installation",
    description: "Elevator supply and installation for a large-scale development.",
    coverImage: "/images/projects/abdouli-group.jpeg",
  },
  {
    slug: "purvanchal-contracting-jebel-ali-hills",
    title: "Purvanchal Contracting",
    category: "elevators",
    location: "Jebel Ali Hills, Dubai, UAE",
    scope: "Supply and installation",
    client: "Purvanchal Contracting L.L.C",
    description: "Elevator supply and installation for a large-scale development.",
    featured: true,
    coverImage: "/images/projects/jabel-ali-hill-purnvanchal.jpeg",
  },

  // HVAC
  // The first five come from the "Project References" slides of the GAMI presentation (GAMI equipment supplied).
  // Several of those images are architectural renders rather than site photographs.
  {
    slug: "tasameem-tower-dubai",
    title: "Tasameem Tower",
    category: "hvac",
    location: "Dubai, UAE",
    scope: "Supply of GAMI fan coil units",
    description: "1,682 GAMI fan coil units supplied for a high-rise tower in Dubai.",
    featured: true,
    coverImage: "/images/projects/tasameem-tower-dubai.png",
  },
  {
    slug: "saraya-tower-abu-dhabi",
    title: "Saraya Tower",
    category: "hvac",
    location: "Abu Dhabi, UAE",
    scope: "Supply of GAMI fan coil units",
    description: "1,223 GAMI fan coil units supplied for a tower in Abu Dhabi.",
    coverImage: "/images/projects/saraya-tower-abu-dhabi.png",
  },
  {
    slug: "masfoot-hospital-ajman",
    title: "Masfoot Hospital",
    category: "hvac",
    location: "Ajman, UAE",
    scope: "Supply of GAMI chillers, AHUs and FCUs",
    description: "2 chillers and 34 air handling and fan coil units supplied for a hospital in Ajman.",
    featured: true,
    coverImage: "/images/projects/masfoot-hospital-ajman.png",
  },
  {
    slug: "al-qasimi-hospital-sharjah",
    title: "Al Qasimi Hospital",
    category: "hvac",
    location: "Sharjah, UAE",
    scope: "Supply of GAMI chillers and fan coil units",
    description: "More than 2,900 tons of cooling, with chillers and fan coil units, for a hospital in Sharjah.",
    coverImage: "/images/projects/al-qasimi-hospital-sharjah.png",
  },
  {
    slug: "fujairah-school",
    title: "Fujairah School",
    category: "hvac",
    location: "Fujairah, UAE",
    scope: "Supply of GAMI chillers and AHUs",
    description: "5 chillers and 12 air handling units supplied for a school in Fujairah.",
    coverImage: "/images/projects/fujairah-school.png",
  },

  // HVAC — from the Nasar Al Masa HVAC brochure. Commented out until project photos are available:
  // uncomment an entry and add a coverImage to show it again.
  //   {
  //     slug: "dubai-islamic-bank-abu-dhabi",
  //     title: "Dubai Islamic Bank",
  //     category: "hvac",
  //     location: "Abu Dhabi, UAE",
  //     scope: "MEP",
  //     client: "Al Hasabi",
  //     consultant: "Al Suwaidi Engineering & Consultant",
  //   },
  //   {
  //     slug: "rawadat-residential-ewan-buildings",
  //     title: "Rawadat Residential, 3 EWAN Buildings",
  //     category: "hvac",
  //     location: "Abu Dhabi, UAE",
  //     scope: "MEP",
  //     client: "REEM Developers",
  //     consultant: "Architect & Engineering Consultant, Abu Dhabi",
  //     description: "Buildings 74C, 75C and 76C.",
  //   },
  //   {
  //     slug: "muscat-sohar-products",
  //     title: "Muscat Sohar Products",
  //     category: "hvac",
  //     location: "Muscat / Sohar, Oman",
  //     scope: "MEP",
  //     client: "OPIC",
  //     consultant: "TEDODIN",
  //   },
  //   {
  //     slug: "integrated-refinery-expansion",
  //     title: "Integrated Refinery Expansion Project",
  //     category: "hvac",
  //     scope: "MEP",
  //     client: "Oman Petroleum",
  //     consultant: "Al Najaf Engineering & Consultant",
  //   },
  //   {
  //     slug: "emal-extension",
  //     title: "Emirates Aluminium (EMAL) Extension Project",
  //     category: "hvac",
  //     scope: "MEP",
  //     client: "EMAL",
  //     consultant: "Johnson Controls",
  //   },
  //   {
  //     slug: "mirfa-ammonia-plant",
  //     title: "Mirfa Ammonia Plant",
  //     category: "hvac",
  //     scope: "MEP",
  //     consultant: "Johnson Controls",
  //   },
];

export const categoryLabel: Record<ProjectCategory, string> = {
  elevators: "Elevator & Escalator",
  hvac: "HVAC",
  "swimming-pool": "Swimming Pool",
};

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsByCategory = (category: ProjectCategory) =>
  projects.filter((p) => p.category === category);
export const featuredProjects = () => projects.filter((p) => p.featured);
