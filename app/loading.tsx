export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-ink/50">Loading</p>
    </div>
  );
}
