import Button from "../components/Button";

export default function BookMarkManager() {
  return (
    <div className="limit">
      <div className="pad flex w-full flex-col gap-24 py-20 md:flex-row-reverse md:pr-8">
        <figure className=" relative w-full after:absolute after:-right-24 after:top-24 after:-z-10 after:h-3/4 after:w-3/4 after:rounded-bl-[20%] after:bg-soft-blue after:content-[''] sm:after:top-40 md:basis-3/4">
          <img
            src="/public/images/illustration-hero.svg"
            alt="hero_illustration"
            className="
          w-full cursor-pointer object-cover transition hover:scale-110"
          />
        </figure>

        <div className="flex flex-col gap-10 md:basis-2/4 md:justify-center lg:-mt-8 xl:-mt-28">
          <h1 className="cursor-pointer text-3xl font-medium text-very-dark-blue xs:text-center xs:text-5xl xs:leading-snug md:text-start lg:text-5xl xl:text-7xl">
            A Simple Bookmark Manager
          </h1>

          <p className="para cursor-pointer">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex gap-4">
            <Button type="primary">Get it on Chrome</Button>
            <Button type="secondary">Get it on Firefox</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
