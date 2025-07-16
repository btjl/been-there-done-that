export function Overlay() {
  return (
    <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow z-10 max-w-xs">
      <h2 className="font-bold text-lg mb-2">Places Visited</h2>
      <ul className="space-y-1 text-sm">
        <li>London</li>
        <li>Paris</li>
        {/* Add interactive features like filters later */}
      </ul>
    </div>
  );
}
