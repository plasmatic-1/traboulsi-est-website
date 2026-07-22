import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mb-4 mt-4 max-w-lg text-balance font-heading text-4xl font-bold tracking-tightest2 text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mb-9 max-w-md leading-relaxed text-ink/55">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home <ArrowRight size={16} />
      </Link>
    </section>
  );
}
