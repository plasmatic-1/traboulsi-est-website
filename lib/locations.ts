export type Branch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours: { range: string; time: string }[];
  mapsEmbed: string;
  mapsLink: string;
  lat: number;
  lng: number;
};

// Confirmed real schedule (applies to both branches unless noted otherwise below).
const standardHours: Branch["hours"] = [
  { range: "Monday – Friday", time: "8:30 AM – 4:30 PM" },
  { range: "Saturday", time: "8:30 AM – 2:30 PM" },
  { range: "Sunday", time: "Closed" },
];

export const branches: Branch[] = [
  {
    id: "nabatieh",
    name: "Nabatieh Branch (Main)",
    address: "Deir el Zahrani, Nabatieh, Lebanon",
    phone: "+961 7 530 986",
    phoneHref: "tel:+9617530986",
    email: "info@traboulsiest.com",
    hours: standardHours,
    mapsEmbed: "https://maps.google.com/maps?q=33.4338035,35.4443397&z=17&output=embed",
    mapsLink: "https://maps.app.goo.gl/ckmX7kDXxTYcbRuP8",
    lat: 33.4338035,
    lng: 35.4443397,
  },
  {
    id: "khalde",
    name: "Khalde Branch",
    address: "Khalde, Lebanon",
    phone: "+961 7 530 986",
    phoneHref: "tel:+9617530986",
    email: "info@traboulsiest.com",
    hours: standardHours,
    mapsEmbed: "https://maps.google.com/maps?q=33.7738747,35.4696475&z=17&output=embed",
    mapsLink: "https://maps.app.goo.gl/W4cPVBi37CS9vb8GA",
    lat: 33.7738747,
    lng: 35.4696475,
  },
];

// Embed showing both branches + the route between them on one map, no API key needed.
export const bothBranchesMapEmbed = `https://maps.google.com/maps?saddr=${branches[0].lat},${branches[0].lng}&daddr=${branches[1].lat},${branches[1].lng}&output=embed`;
