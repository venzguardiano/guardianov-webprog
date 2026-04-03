import Button from '../components/Button';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Our Blog
        </div>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Insights, tips, and stories from our design team.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          We share what we learn along the way from design principles and development
          workflows to industry trends and creative inspiration. Explore our latest articles below.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Latest Posts
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Featured articles</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="rounded-[1.25rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop"
                alt="The Principles of Good UI Design"
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Design — March 10, 2025
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">The Principles of Good UI Design</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Great UI design is more than just making things look pretty. Learn the core
              principles that separate good interfaces from great ones.
            </p>
            <div className="mt-4">
              <Button to="/articles">Read More</Button>
            </div>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="rounded-[1.25rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop"
                alt="Why Wireframing Saves Time"
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Process — February 22, 2025
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Why Wireframing Saves Time</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Skipping wireframes might seem like a shortcut, but it often leads to costly
              revisions. Here is why we always start with low-fidelity layouts.
            </p>
            <div className="mt-4">
              <Button to="/articles">Read More</Button>
            </div>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="rounded-[1.25rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&auto=format&fit=crop"
                alt="Building with React and Tailwind"
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Development — January 15, 2025
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Building with React and Tailwind</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              React and Tailwind CSS have become our go-to stack for building fast and
              maintainable front-end projects. Here is how we use them together effectively.
            </p>
            <div className="mt-4">
              <Button to="/articles">Read More</Button>
            </div>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="rounded-[1.25rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop"
                alt="Designing for Accessibility"
                style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Accessibility — December 5, 2024
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Designing for Accessibility</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Accessibility is not an afterthought it is a design requirement. Discover
              practical ways to make your interfaces usable for everyone.
            </p>
            <div className="mt-4">
              <Button to="/articles">Read More</Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;