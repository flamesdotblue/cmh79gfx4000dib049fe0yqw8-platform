export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-rose-50 p-10 sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_90%_-20%,rgba(244,63,94,0.12),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Ready to create your ripple?</h3>
            <p className="mt-2 max-w-xl text-gray-600">Launch your next interface with clean visuals, interactive depth, and production-grade polish.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Start free</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 transition-colors">Contact sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
