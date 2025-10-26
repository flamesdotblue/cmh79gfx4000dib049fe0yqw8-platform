import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Minimal interactions for modern teams
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
            A seamless grid of responsive tiles that react to your touch. Build engaging, modern experiences with clean, performant UI patterns.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-gray-300 hover:bg-gray-50 transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
