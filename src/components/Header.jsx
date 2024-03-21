import NavLinks from "./NavLinks";

export default function Header({ showNav, onShowNav }) {
  return (
    <div className="limit">
      <div className="pad flex w-full items-center justify-between gap-16 py-16">
        <img
          src="images/logo-bookmark.svg"
          alt="bookmark__logo"
          className="cursor-pointer"
        />

        <NavLinks showNav={showNav} onShowNav={onShowNav} />

        <div
          className="flex cursor-pointer flex-col gap-1.5 md:hidden"
          onClick={onShowNav}
        >
          <div className="h-1 w-8 bg-black"></div>
          <div className="h-1 w-8 bg-black"></div>
          <div className="h-1 w-8 bg-black"></div>
        </div>
      </div>
    </div>
  );
}
