import { siteConfig } from "@/lib/siteConfig";
import { WhatsAppIcon } from "./WhatsApp";

/**
 * Small fixed WhatsApp affordance. Sits above the iOS home indicator via
 * safe-area insets so it never collides with browser chrome on mobile.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${siteConfig.whatsapp}`}
      className="group fixed right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cardHover transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-95 sm:right-7"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon size={24} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-primary-deep px-3 py-1.5 font-heading text-xs font-semibold text-white opacity-0 shadow-card transition-opacity duration-300 ease-premium group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
