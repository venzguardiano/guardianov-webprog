import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-zinc-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="Our team at work"
              style={{ width: '100%', minHeight: '360px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Who We Are
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A passionate team of designers and developers.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              WireFrame was founded with a simple mission to make great design accessible to
              everyone. We are a small but dedicated team of creatives who believe that good
              design is not just about aesthetics, it is about solving real problems for real people.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Over the years, we have worked with startups, small businesses, and growing
              companies to build digital products that are both functional and beautiful.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/">Back Home</Button>
              <Button to="/articles">Read Our Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Our Track Record
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Numbers that speak for us</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">05</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Years of Experience</p>
              <p className="mt-2 text-sm text-zinc-600">Half a decade of crafting digital experiences.</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">16</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Projects Completed</p>
              <p className="mt-2 text-sm text-zinc-600">From small sites to full-scale applications.</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">09</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Happy Clients</p>
              <p className="mt-2 text-sm text-zinc-600">Clients who keep coming back for more.</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">03</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Focus Areas</p>
              <p className="mt-2 text-sm text-zinc-600">Design, Development, and Brand Strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Our Story
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">How we got here</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">How It Started</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  WireFrame began as a side project between two friends who were frustrated with
                  how overpriced and overcomplicated design agencies had become. We wanted to
                  offer something different, honest, high-quality work at a fair price.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">What We Believe</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  We believe design should serve people, not just impress them. Every project
                  we take on starts with understanding the problem deeply before we ever open
                  a design tool. Good design is invisible, it just works.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Where We Are Going</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  We are growing our team and expanding our services to help more businesses
                  build better digital products. Our goal is to become the go to design partner
                  for startups across Southeast Asia.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop"
              alt="Team collaboration"
              style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;