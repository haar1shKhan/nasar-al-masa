export type ProductCategory = "hvac" | "elevators" | "escalators";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description?: string;
  model?: string;
  brand?: string;
  image?: string;
  images?: string[];
  /** Focal point for cropping, e.g. "70% 50%" */
  /** "contain" for equipment shot on a white background; blends into the page instead of cropping */
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  /** Aspect ratio of the header image on the product page; defaults to portrait 4 / 5 */
  imageRatio?: string;
  specifications?: { label: string; value: string }[];
};

export const productCategories: {
  key: ProductCategory;
  label: string;
  singular: string;
  blurb: string;
}[] = [
  {
    key: "hvac",
    label: "HVAC",
    singular: "HVAC",
    blurb: "Equipment for climate control and building systems.",
  },
  {
    key: "elevators",
    label: "Elevators",
    singular: "Elevator",
    blurb: "Vertical transportation systems.",
  },
  {
    key: "escalators",
    label: "Escalators",
    singular: "Escalator",
    blurb: "Moving systems for commercial and public spaces.",
  },
];

// Source: GAMI (HVAC) and FUJI Universal (elevator) sections of the company brochures.
// Only figures printed in those brochures are listed. Images are extracted from the same brochures; add `image` / `images` as further photography arrives.
export const products: Product[] = [
  // HVAC — GAMI
  {
    slug: "air-cooled-screw-chillers",
    name: "Air-Cooled Screw Chillers",
    category: "hvac",
    brand: "GAMI",
    description: "Modular air-cooled screw chillers up to 300 TR.",
    image: "/images/catalogue/chiller-air-cooled.jpg",
    images: ["/images/catalogue/chiller-air-cooled.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Capacity", value: "Modular, up to 300 TR" },
      { label: "Manufacturing standard", value: "JIS and Hitachi" },
      { label: "Condenser", value: "12 FPI, inner-groove copper tube, louvre fin" },
      { label: "Key components", value: "Hitachi axial fan and motor, control box, semi-hermetic screw compressor, economizer" },
      { label: "Tested at", value: "55 °C, R22 and R407C, 50 Hz" },
    ],
  },
  {
    slug: "screw-r134a-chillers",
    name: "Screw R134A Chillers",
    category: "hvac",
    brand: "GAMI",
    description: "R134A screw chillers with microprocessor control.",
    image: "/images/catalogue/chiller-screw-r134a-1.jpg",
    images: ["/images/catalogue/chiller-screw-r134a-1.jpg", "/images/catalogue/chiller-screw-r134a-2.jpg", "/images/catalogue/chiller-compressor.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Capacity", value: "45 TR to 500 TR" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
      { label: "COP", value: "3.12 to 3.44" },
      { label: "Compressor", value: "COMER screw compressor" },
      { label: "Certification", value: "Nominal AHRI certification for the full range" },
      { label: "Control", value: "MCS microprocessor; optional touchscreen" },
      { label: "Monitoring", value: "Up to 60 chillers from one touchscreen via RS485 or Ethernet" },
    ],
  },
  {
    slug: "modular-air-handling-units",
    name: "Modular Air Handling Units",
    category: "hvac",
    brand: "GAMI",
    model: "GAH range",
    description: "Modular air handling units with a flexible specification and heat-recovery options.",
    image: "/images/catalogue/ahu-modular.jpg",
    images: ["/images/catalogue/ahu-modular.jpg", "/images/catalogue/ahu-modular-2.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Airflow", value: "1,600 to 45,000 CFM standard; customised up to 85,000 CFM" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
      { label: "Certification", value: "Eurovent certified for the GAH range; UL certified (option)" },
      { label: "Frame", value: "Aluminium pentapost profile" },
      { label: "Heat recovery", value: "Rotary up to 85%, cross-flow plate up to 60%, runaround coil up to 55%, heat pipe up to 65%" },
    ],
  },
  {
    slug: "hygienic-modular-air-handling-units",
    name: "Hygienic Modular Air Handling Units",
    category: "hvac",
    brand: "GAMI",
    description: "Hygienic version of the modular AHU for hospital, food and pharmaceutical use.",
    image: "/images/catalogue/ahu-hygienic.jpg",
    images: ["/images/catalogue/ahu-hygienic.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Applications", value: "Hospital, food industries, pharmaceutical industries" },
      { label: "Standards", value: "VDI 6022, ISO 846, DIN 1946-4, HTM 03-01, VDI 3803-1" },
    ],
  },
  {
    slug: "small-size-air-handling-units",
    name: "Small Size Air Handling Units",
    category: "hvac",
    brand: "GAMI",
    model: "Ecology unit",
    description: "Compact single-section air handling unit for DX or chilled-water cooling.",
    image: "/images/catalogue/ahu-small.jpg",
    images: ["/images/catalogue/ahu-small.jpg", "/images/catalogue/ahu-ecology.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Airflow", value: "1,350 to 5,300 CFM" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
      { label: "Cooling coil", value: "DX or chilled water; standard and district cooling" },
      { label: "Construction", value: "Double-skin panels, 25 mm PU foam insulation, aluminium pentapost profile" },
      { label: "Mounting", value: "Ceiling mounted; floor mounted optional" },
    ],
  },
  {
    slug: "fan-coil-units",
    name: "Fan Coil Units",
    category: "hvac",
    brand: "GAMI",
    model: "DT / BT",
    description: "High-static (DT) and low-static (BT) fan coil units.",
    image: "/images/catalogue/fcu.jpg",
    images: ["/images/catalogue/fcu.jpg", "/images/catalogue/fcu-ducted.jpg", "/images/catalogue/fcu-ec-motor.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Airflow", value: "300 to 2,000 CFM" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
      { label: "Casing", value: "Single skin or double skin (25 mm optional); galvanised, stainless steel or painted" },
      { label: "Cooling coil", value: "Standard chilled water or district cooling" },
      { label: "Coil face velocity", value: "2.1 m/s maximum" },
      { label: "Filter", value: "12.5 mm (1/2\") aluminium filter supplied on all units" },
    ],
  },
  {
    slug: "hygienic-fan-coil-units",
    name: "Hygienic Fan Coil Units",
    category: "hvac",
    brand: "GAMI",
    description: "Stainless steel fan coil units for food-industry and hospital applications.",
    image: "/images/catalogue/fcu-hygienic.jpg",
    images: ["/images/catalogue/fcu-hygienic.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Casing", value: "SS316 outer and inner" },
      { label: "Construction", value: "Double skin, PU foam sandwich panels, pentapost profile" },
      { label: "Design", value: "Draw-through for high static performance" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
    ],
  },
  {
    slug: "rooftop-packaged-units",
    name: "Rooftop Packaged Units",
    category: "hvac",
    brand: "GAMI",
    description: "Rooftop packaged units designed for ESMA, Estidama and SASO efficiency requirements.",
    image: "/images/catalogue/rooftop.jpg",
    images: ["/images/catalogue/rooftop.jpg", "/images/catalogue/rooftop-2.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Capacity, 50 Hz", value: "3.5 TR to 50 TR (R22, R407C, R410A)" },
      { label: "Capacity, 60 Hz", value: "3.5 TR to 50 TR (R410A)" },
      { label: "Ambient", value: "Operates up to 52 °C" },
      { label: "Approval", value: "MEW approval for 1.4 kW/TR at 48 °C DB / 30 °C WB" },
      { label: "Controls", value: "PCB controller and condenser guard" },
    ],
  },
  {
    slug: "gpuj-rooftop-units",
    name: "GPUJ Rooftop Units",
    category: "hvac",
    brand: "GAMI",
    model: "GPUJ",
    description: "Standard GPUJ rooftop series, also designed for the replacement market.",
    image: "/images/catalogue/gpuj.jpg",
    images: ["/images/catalogue/gpuj.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Models", value: "13 models, Model 4 to Model 30 (customised above Model 30)" },
      { label: "Refrigerants", value: "R407C, R410A, R134a" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
      { label: "Efficiency", value: "Meets MEW 1.4 kW/TR at 48 °C ambient" },
    ],
  },
  {
    slug: "gpuj-double-tier-rooftop-units",
    name: "GPUJ Double-Tier Rooftop Units",
    category: "hvac",
    brand: "GAMI",
    model: "GPUJ double tier",
    description: "Double-tier rooftop units with scroll compressors and BMS connectivity.",
    image: "/images/catalogue/gpuj-double-tier.jpg",
    images: ["/images/catalogue/gpuj-double-tier.jpg"],
    imageFit: "contain",
    specifications: [
      { label: "Models", value: "7 models, nominal capacity 35 TR to 70 TR" },
      { label: "EER", value: "10.5 to 11.9" },
      { label: "Frequency", value: "50 Hz and 60 Hz" },
      { label: "Compressor", value: "Copeland scroll" },
      { label: "Condenser", value: "V-shaped coil, EBM-papst fan, coil guard" },
      { label: "Controller", value: "Carel with Modbus for BMS; BACnet IP optional" },
    ],
  },
  {
    slug: "ducted-split-units",
    name: "Ducted Split Units",
    category: "hvac",
    brand: "GAMI",
    description: "Ducted split units from the GAMI range.",
  },

  // Elevators — FUJI Universal
  {
    slug: "passenger-elevator",
    name: "Passenger Elevator",
    category: "elevators",
    brand: "FUJI Universal",
    description: "Passenger elevators, with a range of car decorations.",
    image: "/images/catalogue/passenger-lift.jpg",
    images: ["/images/catalogue/passenger-k2201.jpg", "/images/catalogue/passenger-k2205.jpg", "/images/catalogue/passenger-k2209.jpg", "/images/catalogue/passenger-k2210.jpg", "/images/catalogue/passenger-k2212.jpg", "/images/catalogue/passenger-k2213.jpg"],
    specifications: [
      { label: "Car decoration series", value: "FUJICN-K2201, K2205, K2209, K2210, K2212, K2213" },
    ],
  },
  {
    slug: "hospital-elevator",
    name: "Hospital Elevator",
    category: "elevators",
    brand: "FUJI Universal",
    image: "/images/catalogue/hospital-lift.jpg",
    description: "Elevators for hospitals.",
  },
  {
    slug: "freight-elevator",
    name: "Freight Elevator",
    category: "elevators",
    image: "/images/catalogue/freight-lift.jpg",
    brand: "FUJI Universal",
    description: "Elevators for goods.",
  },
  {
    slug: "observation-elevator",
    name: "Observation Elevator",
    category: "elevators",
    brand: "FUJI Universal",
    description: "Observation elevators, with a range of car decorations.",
    image: "/images/catalogue/observation-lift.jpg",
    images: ["/images/catalogue/observation-g03.jpg", "/images/catalogue/observation-g09.jpg", "/images/catalogue/observation-g02.jpg", "/images/catalogue/observation-g10.jpg", "/images/catalogue/observation-g11.jpg", "/images/catalogue/observation-g12.jpg"],
    specifications: [
      { label: "Car decoration series", value: "FJTSU-G02, G03, G09, G10, G11, G12" },
    ],
  },
  {
    slug: "home-elevator",
    name: "Home Elevator",
    category: "elevators",
    brand: "FUJI Universal",
    image: "/images/catalogue/home-lift.jpg",
    description: "Elevators for the home, including for elderly residents.",
  },
  {
    slug: "car-elevator",
    name: "Car Elevator",
    category: "elevators",
    brand: "FUJI Universal",
    image: "/images/catalogue/car-elevator.jpg",
    description: "Elevators for vehicles.",
  },
  {
    slug: "dumbwaiter",
    name: "Dumbwaiter",
    category: "elevators",
    brand: "FUJI Universal",
    image: "/images/catalogue/dumbwaiters.jpg",
    description: "Small-load service elevators.",
  },
  {
    slug: "gearless-traction-machine",
    name: "Gearless Traction Machine",
    category: "elevators",
    brand: "FUJI Universal",
    image: "/images/catalogue/gearless-motor.jpg",
    model: "Permanent-magnet synchronous",
    description:
      "Permanent-magnet synchronous gearless traction machine that needs no lubricant renewal.",
    specifications: [
      { label: "Energy", value: "Saves more than 33% compared with traditional technology (FUJI)" },
      { label: "Maintenance", value: "No lubricant renewal; no grease pollution" },
      { label: "Operation", value: "Low noise" },
      { label: "Lift speed", value: "Up to 10 m/s" },
    ],
  },
  {
    slug: "cabin-finishes",
    name: "Cabin Finishes",
    category: "elevators",
    brand: "FUJI Universal",
    description: "Elevator cabin finishes in wood, silver and gold.",
    image: "/images/catalogue/cabin-wood-1.jpg",
    images: ["/images/catalogue/cabin-wood-1.jpg", "/images/catalogue/cabin-wood-2.jpg", "/images/catalogue/cabin-wood-3.jpg", "/images/catalogue/cabin-silver-1.jpg", "/images/catalogue/cabin-silver-2.jpg", "/images/catalogue/cabin-silver-3.jpg", "/images/catalogue/cabin-gold-1.jpg", "/images/catalogue/cabin-gold-2.jpg", "/images/catalogue/cabin-gold-3.jpg"],
  },

  // Escalators — FUJI Universal
  {
    slug: "escalator",
    name: "Escalator",
    category: "escalators",
    brand: "FUJI Universal",
    description: "Escalators for commercial and public buildings.",
    image: "/images/catalogue/escalator-atrium.jpg",
    imagePosition: "76% 50%",
    imageRatio: "5 / 4",
  },
  {
    slug: "moving-walk",
    name: "Moving Walk",
    category: "escalators",
    brand: "FUJI Universal",
    description: "Moving walks for commercial and public buildings.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);
export const categoryName = (category: ProductCategory) =>
  productCategories.find((c) => c.key === category)?.label ?? category;

export const isProductCategory = (value: string | undefined): value is ProductCategory =>
  productCategories.some((c) => c.key === value);
