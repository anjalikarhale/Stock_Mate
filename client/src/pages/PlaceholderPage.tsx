interface PlaceholderPageProps {
  title: string;
  description: string;
}

function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
          StockMate
        </p>

        <h1 className="text-4xl font-bold">{title}</h1>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

        <div className="mx-auto mt-6 inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-400">
          🚧 Coming soon
        </div>
      </div>
    </div>
  );
}

export default PlaceholderPage;