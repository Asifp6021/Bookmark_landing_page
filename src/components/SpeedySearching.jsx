import Button from "./Button";

export default function SpeedySearching() {
  return (
    <div className="flex flex-col gap-8 py-20 xs:gap-36 sm:gap-60 sm:py-24 md:flex-row md:gap-24 lg:gap-36">
      <figure className=" relative w-full after:absolute after:-left-12 after:top-60 after:-z-10 after:h-4/6 after:w-full after:rounded-br-[20%] after:bg-soft-blue after:content-[''] sm:after:-left-28 sm:after:top-72 md:basis-8/12 md:after:-left-20 xl:after:-left-36 xl:after:top-80">
        <img
          src="/public/images/illustration-features-tab-2.svg"
          alt="hero_illustration"
          className="
          w-full cursor-pointer object-cover transition hover:scale-110"
        />
      </figure>

      <div className=" flex flex-col gap-6 self-center md:max-w-4xl md:basis-2/4 lg:-mt-24">
        <h1 className="sub_heading md:text-start">Intelligent search</h1>
        <p className="para cursor-pointer">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <Button type="ternary">More Info</Button>
      </div>
    </div>
  );
}
