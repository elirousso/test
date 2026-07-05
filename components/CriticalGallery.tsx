export function CriticalGallery({ images, onSelect }: { images: string[]; onSelect: (i: number) => void }) {
  return (
    <section className="p-6">
      <div className="grid grid-cols-3 gap-3">
        {images.map((src, i) => (
          <div key={i} onClick={() => onSelect(i)} className="cursor-pointer">
            <img src={src} />
          </div>
        ))}
      </div>
      <input type="email" placeholder="Email" className="mt-6 border px-3 py-2" />
    </section>
  );
}
