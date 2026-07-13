import {
  Utensils,
  Hotel,
  Cross,
  ShoppingCart,
  Cake,
  Wheat,
  Coffee,
  CookingPot,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  utensils: Utensils,
  hotel: Hotel,
  hospital: Cross,
  "shopping-cart": ShoppingCart,
  cake: Cake,
  wheat: Wheat,
  coffee: Coffee,
  "cooking-pot": CookingPot,
};

export function industryIcon(key: string): LucideIcon {
  return map[key] ?? Utensils;
}
