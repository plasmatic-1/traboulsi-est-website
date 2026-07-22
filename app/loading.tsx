export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-white">
      <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-primary/15 border-t-primary" />
      <p className="font-heading text-xs font-medium uppercase tracking-[0.25em] text-ink/40">Loading</p>
    </div>
  );
}
