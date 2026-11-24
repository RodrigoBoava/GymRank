export default function Calorias() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold">🍽️ Calorias por foto</h2>
      <input
        type="file"
        accept="image/*"
        className="block w-full rounded-xl border border-dashed border-zinc-700 p-8"
      />
      <p className="mt-4 text-sm text-zinc-500">
        Em breve: a IA vai estimar as calorias do seu prato.
      </p>
    </main>
  );
}