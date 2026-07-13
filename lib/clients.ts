export type ClientGroup = {
  industry: string;
  icon: "utensils" | "hospital" | "cake" | "shopping-cart";
  clients: string[];
};

export const clientGroups: ClientGroup[] = [
  {
    industry: "Restaurants & Supermarkets",
    icon: "utensils",
    clients: [
      "AL Shareq Sweets – Nabatieh",
      "AL Zahraa Restaurant – Nabatieh",
      "Fatima Group – Nabatieh",
      "AL Hamraa Restaurant – Saida",
      "AL Zawat – Saida",
      "Seven Eleven Restaurant – Nabatieh",
      "AL Mamlouk – Saida",
      "Geeks – Saida",
      "Shames AL Aseel Restaurant & Rest House – Kfarwa",
      "Hikayat Restaurant – Nabatieh",
      "Supermarket Sharhabil",
      "AL Tawfir Supermarket",
      "Al Farah Amusement Center & Restaurant – Nabatieh",
      "OneWay Restaurant – Marjeyoun",
      "Aqua Park Restaurant & Rest House – Arabsalim",
      "AL Abdallah Chicken – Nabatieh",
      "Kraydes Restaurant – Nabatieh",
      "Fillful Restaurant – Nabatieh",
      "AL Safa Sweets – Nabatieh",
      "City Park Restaurant – Tyre",
      "Tyros Restaurant – Tyre",
    ],
  },
  {
    industry: "Hospitals",
    icon: "hospital",
    clients: [
      "Mays Al Jabal Public Hospital",
      "Nabatieh Public Hospital",
      "Sheikh Ragheb Harb Hospital – Nabatieh",
      "Seer Aldoniye Hospital",
      "Halba Public Hospital",
      "Akkar Public Hospital",
      "Marjeyoun Public Hospital",
      "Ousayran Hospital – Saida",
      "Al Nakib Hospital – Saida",
    ],
  },
  {
    industry: "Pastry Shops & Bakeries",
    icon: "cake",
    clients: [
      "AL Shareq Sweets",
      "Fatima Group",
      "AL Safa Sweets",
      "AL Sultan Sweet – Tebnin",
      "Oriental – Tyre",
      "AL Arez Sweet – Nabatieh",
    ],
  },
  {
    industry: "Supermarkets",
    icon: "shopping-cart",
    clients: [
      "AL Tawfeer Supermarket",
      "Supermarket Sharhabil",
      "Charcutier Aoun",
      "Saint George – Jounieh",
    ],
  },
];

export type Industry = {
  name: string;
  icon: "utensils" | "hotel" | "hospital" | "shopping-cart" | "cake" | "wheat" | "coffee" | "cooking-pot";
  blurb: string;
};

export const industries: Industry[] = [
  { name: "Restaurants", icon: "utensils", blurb: "Full kitchen lines for dine-in and fast-casual restaurants." },
  { name: "Hotels", icon: "hotel", blurb: "Reliable back-of-house equipment for hospitality operations." },
  { name: "Hospitals", icon: "hospital", blurb: "Refrigeration and catering equipment for healthcare facilities." },
  { name: "Supermarkets", icon: "shopping-cart", blurb: "Display fridges, deli counters and cold storage solutions." },
  { name: "Pastry Shops", icon: "cake", blurb: "Ovens, mixers and display units built for pastry production." },
  { name: "Bakeries", icon: "wheat", blurb: "Dough equipment, deck ovens and proofing solutions." },
  { name: "Cafes", icon: "coffee", blurb: "Compact, efficient equipment for cafe service counters." },
  { name: "Commercial Kitchens", icon: "cooking-pot", blurb: "Complete stainless steel fit-outs for any kitchen scale." },
];
