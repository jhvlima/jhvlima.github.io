export default function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg className="notebook-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={external ? 'M4 12 12 4M4 4h8v8' : 'M3 8h10M9 4l4 4-4 4'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
