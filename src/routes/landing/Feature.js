import features from "../../data/features";

export default function Feature() {
  return (
    <article className="relative bg-gray-900 py-16 sm:py-24 lg:py-32">
      <section className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-[color:var(--primary-font-color)]">
          100% handcraft growth
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          #1 Gold Trading Growth Agency
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Everything you need for your trading strategy in one complete growth
          plan without spending too much time and effort!
        </p>
        <section className="mt-12">
          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <section key={feature.name} className="pt-6">
                <section className="flow-root rounded-lg px-6 pb-8">
                  <section className="-mt-6">
                    <section className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <img
                        src={feature.icon}
                        alt="/"
                        className="h-6 w-6 text-white cursor-pointer"
                        aria-hidden="true"
                      />
                    </section>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </article>
  )
}
