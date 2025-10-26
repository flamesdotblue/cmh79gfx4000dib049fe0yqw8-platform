import { Rocket, Star, Shield } from 'lucide-react';

const features = [
  {
    title: 'Interactive by design',
    description: 'Fluid, tactile experiences powered by WebGL. The grid responds with soft red ripples on interaction.',
    icon: Rocket,
  },
  {
    title: 'Clean and minimalist',
    description: 'Thoughtful, modern aesthetics that stay out of the way and let your content shine.',
    icon: Star,
  },
  {
    title: 'Enterprise-ready',
    description: 'Accessible, performant, and secure foundations for production-grade apps.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Built for focus</h2>
          <p className="mt-3 text-gray-600">Everything you need to craft engaging, modern interfaces—nothing you don’t.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_0_#e5e7eb] transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
              <div className="mt-4 text-sm font-medium text-gray-900">
                <a className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700" href="#">
                  Learn more
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
