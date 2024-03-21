import Button from "./Button";

export default function SimpleBookmarking() {
  return (
    <div className="flex flex-col gap-8 py-20 xs:gap-36 sm:gap-60 sm:py-24 md:flex-row md:gap-24 lg:gap-36">
      <figure className=" relative w-full after:absolute after:-left-12 after:top-20 after:-z-10 after:h-full after:w-full after:rounded-br-[20%] after:bg-soft-blue after:content-[''] sm:after:top-40 md:basis-3/4 md:after:-left-20 md:after:top-16 lg:after:-left-28 lg:after:top-20">
        <img
          src="images/illustration-features-tab-1.svg"
          alt="hero_illustration"
          className="
          w-full cursor-pointer object-cover transition hover:scale-110"
        />
      </figure>

      <div className=" flex flex-col gap-6 self-center md:max-w-4xl md:basis-2/4 lg:-mt-24">
        <h1 className="sub_heading md:text-start">Bookmark in one click</h1>
        <p className="para cursor-pointer">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your favorite
          sites.
        </p>
        <Button type="ternary">More Info</Button>
      </div>
    </div>
  );
}
