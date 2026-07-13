import type { Metadata } from "next";
import { Phone, Mail, MapPin, Printer, Smartphone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Traboulsi Est. for Trading & Industry — call, email, or send us a message for a product quote or consultation.",
};

export default function ContactPage() {
  return (
    <section className="container-x py-16 sm:py-20">
      <p className="section-label">Get In Touch</p>
      <h1 className="mb-10 max-w-2xl text-balance font-heading text-4xl font-bold text-ink">
        Contact Us
      </h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="card p-7">
            <ContactForm />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card flex items-center gap-3 p-5">
              <Phone className="shrink-0 text-accent" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold text-ink">Tel</p>
                <a href={siteConfig.phoneHref} className="text-sm text-ink/60 hover:text-primary">{siteConfig.phone}</a>
              </div>
            </div>
            <div className="card flex items-center gap-3 p-5">
              <Smartphone className="shrink-0 text-accent" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold text-ink">Mobile</p>
                <a href={siteConfig.mobileHref} className="text-sm text-ink/60 hover:text-primary">{siteConfig.mobile}</a>
              </div>
            </div>
            <div className="card flex items-center gap-3 p-5">
              <Printer className="shrink-0 text-accent" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold text-ink">Fax</p>
                <p className="text-sm text-ink/60">{siteConfig.fax}</p>
              </div>
            </div>
            <div className="card flex items-center gap-3 p-5">
              <Mail className="shrink-0 text-accent" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold text-ink">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink/60 hover:text-primary">{siteConfig.email}</a>
              </div>
            </div>
          </div>

          <div className="card mt-4 flex items-start gap-3 p-5">
            <MapPin className="mt-0.5 shrink-0 text-accent" size={20} />
            <div>
              <p className="font-heading text-sm font-semibold text-ink">Address</p>
              <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/60 hover:text-primary">{siteConfig.address}</a>
            </div>
          </div>
        </div>

        <div className="h-80 overflow-hidden rounded-lg border border-line lg:h-full">
          <iframe
            src={siteConfig.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Traboulsi Est. location map"
          />
        </div>
      </div>
    </section>
  );
}
