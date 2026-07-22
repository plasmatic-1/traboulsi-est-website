import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { industryIcon } from "@/components/IndustryIcon";
import { clientGroups } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Trusted by restaurants, supermarkets, hospitals, pastry shops and bakeries across Lebanon — see who relies on Traboulsi Est.",
};

export default function ClientsPage() {
  return (
    <section className="container-x py-20 sm:py-28">
      <p className="section-label">Trusted Across Lebanon</p>
      <h1 className="mb-4 max-w-2xl text-balance font-heading text-5xl font-bold tracking-tightest2 text-ink">
        Our Clients
      </h1>
      <p className="mb-14 max-w-2xl leading-relaxed text-ink/55">
        For over four decades, Traboulsi Est. has equipped leading restaurants, hospitals,
        supermarkets and bakeries across Lebanon. Here are just some of the businesses that trust us.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {clientGroups.map((group, gi) => {
          const Icon = industryIcon(group.icon);
          return (
            <Reveal key={group.industry} delay={gi * 0.08} className="card p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-line pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={22} />
                </span>
                <h2 className="font-heading text-lg font-semibold text-ink">{group.industry}</h2>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {group.clients.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
