import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="section-label">404</p>
      <h1 className="mb-4 max-w-lg text-balance font-heading text-3xl font-bold text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-ink/60">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home <ArrowRight size={16} />
      </Link>
    </section>
  );
}
