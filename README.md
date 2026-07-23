# Traboulsi Est. — Website Redesign

A clean, professional, B2B-focused redesign of traboulsiest.com, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and subtle Framer Motion animation. Built for restaurant, hotel, hospital, bakery and supermarket owners — fast, trustworthy, easy to navigate, not flashy.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config. `npm run build` works on any Node host too.

## What's inside

- **Same company name, same original logo** — pulled directly from traboulsiest.com (`lib/siteConfig.ts` → `logo`).
- **All 145 products carried over** — nothing was removed. They were parsed directly from the current site's product gallery (name + image), auto-sorted into three categories (Refrigeration, Heating, Stainless/Processing/Others) based on keyword matching. See `lib/products.ts`.
- **Original product photos, now self-hosted** — all 145 product photos plus the hero and About Us photos were downloaded from the original `traboulsiest.com` server and now live locally in `public/images/` (`products/`, `hero/`, `about/`), so the site no longer depends on the old server staying online. Twelve product entries had truncated image filenames in the original data (e.g. `images_(1` with no extension) — these were verified against the live server and corrected before downloading.
- **Real client list** — the exact client names and groupings from the current site's "Our Clients" section, now shown as clean cards with an icon per industry (`lib/clients.ts`, `/clients` page).
- **Real contact details** — phone, mobile, fax, email and address pulled from the current site.

## Important — please review before launch

1. **Model numbers**: the current website does not publish real model numbers for its products (only image filenames/reference numbers). Each product was assigned a placeholder model code (`TE-108`, `TE-106`, etc., taken from the site's own internal reference numbers) so the "hover to see model number" requirement works today. **Replace these with your real supplier/manufacturer model numbers** in `lib/products.ts` whenever you have them — the field is called `model` on each product.
2. **Khalde branch street address**: opening hours and the map/directions/call button are now all confirmed and accurate (Mon–Fri 8:30 AM–4:30 PM, Sat 8:30 AM–2:30 PM, Sun closed — applied to both branches). The one thing still missing is the **exact street address** for the Khalde branch — the page currently shows "Khalde, Lebanon — exact street address pending" as a placeholder. Update it in `lib/locations.ts` (the `address` field on the `khalde` entry) once you have it.
2. **Product names**: names were also taken from the current site's image captions (e.g. "showcase fridge", "gas griddle"). If you'd like more specific/marketing-friendly names, edit `name` in `lib/products.ts`.
3. **Google Maps embed**: currently a generic "Deir el Zahrani" search embed. Replace `mapsEmbed` in `lib/siteConfig.ts` with your exact "Embed a map" iframe `src` from Google Maps (Share → Embed a map) for a pinpoint location.
4. **Contact form**: now wired to Formspree (form ID `mgojglkl`) via `@formspree/react` — submissions will arrive at whatever email is linked to that Formspree account. No further setup needed.
5. **Domain**: the old `traboulsiest.com` domain's DNS/hosting access could not be located, so `metadataBase` (`app/layout.tsx`), the sitemap base URL (`app/sitemap.ts`), and the robots.txt sitemap reference (`app/robots.ts`) now point at `traboulsiest.net`, pending registration and connecting it to this Vercel project. If the old domain is ever recovered instead, revert these three files to `traboulsiest.com`. Note: `info@traboulsiest.com` is still shown as the contact email everywhere on the site — confirm someone can actually check that inbox, since access to it is uncertain along with the old domain's hosting.
6. **Logo & capabilities banner**: now local files (`public/logo.png` and `public/capabilities-banner.png`) instead of pulled from the old traboulsiest.com URLs. If either changes again, replace the file in `public/` with the same filename, or update the path in `lib/siteConfig.ts`.

## Structure

```
app/
  page.tsx                Home
  products/page.tsx       All products (filterable)
  products/[slug]/page.tsx  Category pages (Refrigeration, Heating, Stainless/Processing/Others)
  industries/page.tsx     Industries We Serve
  clients/page.tsx        Our Clients (grouped, with icons)
  about/page.tsx          About Us
  contact/page.tsx        Contact form + map + info
components/              Navbar, Footer, ProductCard, ContactForm, Reveal (scroll animation), IndustryIcon
lib/
  siteConfig.ts           Company info, logo, hero images, contact details
  products.ts             All 145 products (name, model, category, image)
  clients.ts              Client list by industry + industries list
```

## Design

- **Palette**: primary navy `#1E3A5F`, accent red `#D32F2F`, white, light gray sections — exactly as specified.
- **Type**: Poppins for headings, Inter for body.
- **Motion**: subtle fade-up on scroll (`components/Reveal.tsx`) and smooth hover states — nothing excessive, per the brief.
- Product cards show a dark hover overlay with product name, model number, and a "View Details" affordance, as requested. (Individual product detail pages aren't built out yet — the button is there and ready to link to real per-product pages later if needed.)
