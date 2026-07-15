"use client";

import { Phone, MapPin, Clock, Navigation, Mail, Building2 } from "lucide-react";
import type { Branch } from "@/lib/locations";

export function BranchCardCompact({ branch }: { branch: Branch }) {
  return (
    <div className="card group flex flex-col p-7">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-accent/10">
        <Building2 className="text-primary transition-colors duration-300 group-hover:text-accent" size={22} />
      </span>
      <h3 className="mb-3 font-heading text-lg font-semibold text-ink">{branch.name}</h3>

      <div className="mb-1.5 flex items-start gap-2.5 text-sm text-ink/60">
        <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
        {branch.address}
      </div>
      <div className="mb-1.5 flex items-center gap-2.5 text-sm text-ink/60">
        <Phone size={15} className="shrink-0 text-accent" />
        {branch.phone}
      </div>
      <div className="mb-5 flex items-start gap-2.5 text-sm text-ink/60">
        <Clock size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>
          {branch.hours.map((h) => (
            <span key={h.day} className="block">{h.day}: {h.time}</span>
          ))}
        </span>
      </div>

      <a
        href={branch.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline mt-auto w-full !py-2.5 text-sm"
      >
        Get Directions <Navigation size={14} />
      </a>
    </div>
  );
}

export function BranchCardFull({ branch }: { branch: Branch }) {
  return (
    <div className="card overflow-hidden">
      <div className="h-56 w-full overflow-hidden">
        <iframe
          src={branch.mapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title={`${branch.name} map`}
        />
      </div>

      <div className="p-7">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Building2 className="text-primary" size={20} />
          </span>
          <h3 className="font-heading text-lg font-semibold text-ink">{branch.name}</h3>
        </div>

        <div className="space-y-3 border-t border-line pt-5">
          <div className="flex items-start gap-2.5 text-sm text-ink/70">
            <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
            {branch.address}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-ink/70">
            <Phone size={16} className="shrink-0 text-accent" />
            <a href={branch.phoneHref} className="hover:text-primary">{branch.phone}</a>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-ink/70">
            <Mail size={16} className="shrink-0 text-accent" />
            <a href={`mailto:${branch.email}`} className="hover:text-primary">{branch.email}</a>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-ink/70">
            <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
            <span>
              {branch.hours.map((h) => (
                <span key={h.day} className="block">{h.day}: {h.time}</span>
              ))}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 !py-2.5 text-sm">
            Get Directions <Navigation size={14} />
          </a>
          <a href={branch.phoneHref} className="btn-accent flex-1 !py-2.5 text-sm">
            Call Now <Phone size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
