// Source: company brochures and trade licence (Google Drive / Nasar al masa / Company Info).
export const company = {
  name: "Nasar Al Masa",
  legalName: "Nasar Al Masa Technical Service L.L.C",
  website: "www.nasaralmasa.com",
  // WhatsApp number in international format, digits only (wa.me).
  whatsapp: "971529513368",
  phone: "+971 52 951 3368",
  phoneSecondary: "+971 56 902 1105",
  email: "nasaralmasa@gmail.com",
  offices: [
    {
      label: "Elevators & Escalators",
      lines: [
        "Residence 1072, Entrance Offices Block B",
        "M Floor, Office 16C, Muteena",
        "Dubai, UAE",
      ],
    },
    {
      label: "HVAC",
      lines: ["Al Khabeesi Building", "Deira, Dubai, UAE"],
    },
  ],
  partners: {
    elevators: "FUJI Universal",
    hvac: "GAMI",
  },
} as const;
