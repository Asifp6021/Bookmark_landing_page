import Button from "./Button";

export default function EasySharing() {
  return (
    <div className="flex flex-col gap-8 py-20 xs:gap-36 sm:gap-60 sm:py-24 md:flex-row md:gap-24 lg:gap-36">
      <figure className=" relative w-full after:absolute after:-left-12 after:top-40 after:-z-10 after:h-4/5 after:w-4/5 after:rounded-br-[20%] after:bg-soft-blue after:content-['']  sm:after:top-60 md:basis-3/4 md:after:-left-20 md:after:top-56 lg:after:-left-36 lg:after:top-64 ">
        <img
          src="/public/images/illustration-features-tab-3.svg"
          alt="hero_illustration"
          className="
          w-full cursor-pointer object-cover transition hover:scale-110"
        />
      </figure>

      <div className=" flex flex-col gap-6 self-center md:max-w-4xl md:basis-2/4 lg:-mt-24">
        <h1 className="sub_heading md:text-start">Share your bookmarks</h1>
        <p className="para cursor-pointer">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <Button type="ternary">More Info</Button>
      </div>
    </div>
  );
}
