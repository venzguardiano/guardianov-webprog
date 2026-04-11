import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Welcome to WireFrame
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Design Smarter. Build Faster. Launch with Confidence.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              WireFrame is a modern design studio focused on creating clean, functional, and
              beautiful digital experiences. From concept to deployment, we help teams bring
              their ideas to life with precision and purpose.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/about">About Us</Button>
              <Button to="/articles">Read Articles</Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
              alt="Design workspace"
              style={{ width: '100%', minHeight: '320px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Our Numbers
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">What we have achieved so far</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">12+</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Projects Done</p>
              <p className="mt-2 text-sm text-zinc-600">Delivered across various industries and platforms.</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">08</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Design Systems</p>
              <p className="mt-2 text-sm text-zinc-600">Built from scratch for scalable and consistent UI.</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">24</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Screen Designs</p>
              <p className="mt-2 text-sm text-zinc-600">Covering web, mobile, and dashboard interfaces.</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">04</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Core Services</p>
              <p className="mt-2 text-sm text-zinc-600">UI/UX, Branding, Development, and Consulting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              What We Offer
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Our core services</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="rounded-[1.25rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop"
                  alt="UI UX Design"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">UI/UX Design</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We craft intuitive and visually compelling interfaces that put the user experience
                first. Every pixel is intentional, every interaction is purposeful.
              </p>
              <div className="mt-4">
                <Button to="/about">Learn More</Button>
              </div>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="rounded-[1.25rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&auto=format&fit=crop"
                  alt="Branding"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Brand Identity</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                From logo design to full brand guidelines, we help you establish a strong and
                memorable identity that stands out in a crowded market.
              </p>
              <div className="mt-4">
                <Button to="/about">Learn More</Button>
              </div>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="rounded-[1.25rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop"
                  alt="Web Development"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Web Development</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We build fast, responsive, and accessible websites and web applications using
                modern technologies like React, Tailwind CSS, and more.
              </p>
              <div className="mt-4">
                <Button to="/about">Learn More</Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;