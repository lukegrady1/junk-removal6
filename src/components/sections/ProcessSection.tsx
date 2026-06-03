const steps = [
  {
    num: "01",
    title: "Tell us what\u2019s going",
    body: "Send a photo or schedule a walkthrough. We assess the volume and weight of your haul immediately.",
  },
  {
    num: "02",
    title: "Lock in a flat price",
    body: "No estimates. We give you a hard number that includes labor, transport, and disposal fees.",
  },
  {
    num: "03",
    title: "We carry it all out",
    body: "Our crew arrives on time and does all the physical lifting. You don\u2019t move a single box.",
  },
  {
    num: "04",
    title: "We sweep and go",
    body: "We leave the space broom-clean. Your junk is gone, and your floors are clear.",
  },
];

export function ProcessSection() {
  return (
    <section className="px-16 py-32">
      <h2 className="font-headline text-5xl mb-16 uppercase">
        The Work Protocol
      </h2>

      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`grid grid-cols-1 md:grid-cols-4 py-12 items-center ${
              i === steps.length - 1
                ? "border-y-2 border-on-surface"
                : "border-t-2 border-on-surface"
            }`}
          >
            <span className="font-headline text-6xl text-primary md:col-span-1">
              {step.num}
            </span>
            <div className="md:col-span-3">
              <h3 className="font-headline text-3xl uppercase">
                {step.title}
              </h3>
              <p className="text-xl text-on-surface-variant max-w-2xl">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
