export type ServiceSlug = "elevators-escalators" | "hvac" | "swimming-pools";
export type ProjectCategory = "elevators" | "hvac" | "swimming-pool";

export type Service = {
  slug: ServiceSlug;
  number: string;
  title: string;
  /** Uppercase label used in eyebrows */
  label: string;
  category: ProjectCategory;
  headline: string;
  summary: string;
  intro: string[];
  scope: { title: string; text: string }[];
  /** Equipment / types handled, shown as a plain list */
  range?: { heading: string; items: string[] };
  facts?: { label: string; value: string }[];
  image?: string;
  imageAlt?: string;
  catalogue?: { label: string; href: string }[];
  /** Used for the WhatsApp / email enquiry on the service page */
  enquiry: string;
  comingSoon?: boolean;
};

// Copy is drawn from the company brochures. Swimming pools has no source material yet,
// so it carries the minimum and renders a "coming soon" treatment.
export const services: Service[] = [
  {
    slug: "elevators-escalators",
    number: "01",
    title: "Elevators & Escalators",
    label: "Elevators & Escalators",
    category: "elevators",
    headline: "Elevators and escalators, from supply to service.",
    summary:
      "Supply and installation of FUJI Universal elevators and escalators, plus modernisation and maintenance of lifts of any brand.",
    intro: [
      "Nasar Al Masa is the sole supplier of FUJI Universal elevators and escalators in the Gulf countries. The range covers passenger, hospital, freight, observation, home and car elevators, dumbwaiters, escalators and moving walks.",
      "Work runs from design and supply through installation to maintenance. A dedicated modernisation team of experienced engineers handles upgrades to existing lifts.",
    ],
    scope: [
      {
        title: "Supply",
        text: "FUJI Universal elevators and escalators, built to the building's requirements, with lift speeds up to 10 m/s.",
      },
      {
        title: "Installation",
        text: "Installation of new elevators, escalators and moving walks under a strict quality assurance process.",
      },
      {
        title: "Modernisation",
        text: "Upgrades to existing installations by a dedicated team of engineers.",
      },
      {
        title: "Maintenance",
        text: "Service of all major lift brands, including Kone, Mitsubishi, Otis, Schindler, Hitachi, Thyssenkrupp and unbranded lifts.",
      },
    ],
    range: {
      heading: "Elevator types",
      items: [
        "Passenger elevator",
        "Hospital elevator",
        "Freight elevator",
        "Observation elevator",
        "Home elevator",
        "Car elevator",
        "Dumbwaiter",
        "Escalator / moving walk",
      ],
    },
    facts: [
      { label: "Manufacturer", value: "FUJI Universal" },
      { label: "Certification", value: "CE and TUV (FUJI products)" },
      { label: "Traction", value: "Permanent-magnet synchronous gearless" },
      { label: "Speed", value: "Up to 10 m/s, to building requirements" },
    ],
    image: "/images/elevator-cover1.jpg",
    imageAlt: "Stainless steel elevator in a stone and timber lobby with a view of the Dubai skyline",
    catalogue: [
      { label: "Explore Elevators", href: "/catalogue?category=elevators" },
      { label: "Explore Escalators", href: "/catalogue?category=escalators" },
    ],
    enquiry: "elevator and escalator services",
  },
  {
    slug: "hvac",
    number: "02",
    title: "HVAC",
    label: "HVAC",
    category: "hvac",
    headline: "Air-conditioning engineered for GCC temperatures.",
    summary:
      "Supply and installation of GAMI air-conditioning equipment for homes, commercial buildings and industrial sites.",
    intro: [
      "Nasar Al Masa is the authorised supplier and installer of GAMI air conditioners, a GCC manufacturer whose equipment is built to run at ambient temperatures of 52 to 56 °C.",
      "The scope covers system planning, installation, testing and ongoing maintenance, for villas, high-rise towers, schools, hospitals and industrial facilities.",
    ],
    scope: [
      {
        title: "Supply",
        text: "Chillers, air handling units, fan coil units, rooftop packaged units and ducted split units from the GAMI range.",
      },
      {
        title: "System design",
        text: "Configurations sized to the building's load and space constraints.",
      },
      {
        title: "Installation",
        text: "Installation with testing, commissioning and adherence to safety protocols.",
      },
      {
        title: "Maintenance",
        text: "Service and support for air-conditioning systems from any major manufacturer.",
      },
    ],
    range: {
      heading: "Equipment range",
      items: [
        "Chillers",
        "Air handling units",
        "Fan coil units",
        "Rooftop packaged units",
        "Ducted split units",
      ],
    },
    facts: [
      { label: "Manufacturer", value: "GAMI" },
      { label: "Ambient rating", value: "Up to 52–56 °C" },
      { label: "Standards", value: "AHRI, Eurovent, ESMA, SASO, QCC, MEW" },
      { label: "Testing", value: "Coil testing, run testing, final inspection" },
    ],
    image: "/images/hvac-cover.jpg",
    imageAlt: "Air-cooled outdoor units on the roof of a glazed building",
    catalogue: [{ label: "Explore HVAC Equipment", href: "/catalogue?category=hvac" }],
    enquiry: "HVAC services",
  },
  {
    slug: "swimming-pools",
    number: "03",
    title: "Swimming Pool Construction",
    label: "Swimming Pools",
    category: "swimming-pool",
    headline: "Swimming pool construction.",
    summary: "Pool construction is part of what Nasar Al Masa offers. Project material will be added here.",
    image: "/images/swimming-pool.jpg",
    imageAlt: "Image of a modern swimming pool.",
    intro: [
      "Swimming pool construction is offered alongside the elevator, escalator and HVAC services.",
      "Scope details and completed projects will be published on this page as they are added.",
    ],
    scope: [],
    enquiry: "swimming pool construction",
    comingSoon: true,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getServiceByCategory = (category: ProjectCategory) =>
  services.find((s) => s.category === category);
