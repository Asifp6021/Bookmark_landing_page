import EasySharing from "../components/EasySharing";
import SimpleBookmarking from "../components/SimpleBookmarking";
import SpeedySearching from "../components/SpeedySearching";

export default function Features({
  onSimpleBookMark,
  onEasyShare,
  onSpeedySearch,
  simpleBookMark,
  easyShare,
  speedySearch,
}) {
  return (
    <div className="limit">
      <div className="pad flex h-min flex-col transition md:w-full md:py-20 xl:py-8">
        <div className="mt-20 flex flex-col gap-16 md:max-w-[1000px] md:items-center md:self-center">
          <div className="flex flex-col gap-6 sm:gap-10 md:max-w-4xl ">
            <h3 className="sub_heading">Features</h3>
            <p className="para cursor-pointer md:text-center">
              Our aim is to make it quick and easy for you to access your
              favorite websites. Your bookmarks sync between your devices so you
              can access them on the go.
            </p>
          </div>

          <ul className="flex max-w-[950px] flex-col gap-8 border-b-2 border-grayish-blue border-opacity-50 md:flex-row md:gap-28 md:px-12">
            <li
              className={`features_link ${simpleBookMark ? "active" : ""}`}
              onClick={onSimpleBookMark}
            >
              Simple Bookmarking
            </li>
            <li
              className={`features_link ${speedySearch ? "active" : ""}`}
              onClick={onSpeedySearch}
            >
              Speedy Searching
            </li>
            <li
              className={`features_link after:bottom-0 ${easyShare ? "active" : ""}`}
              onClick={onEasyShare}
            >
              Easy Sharing
            </li>
          </ul>
        </div>
        {simpleBookMark && <SimpleBookmarking />}

        {speedySearch && <SpeedySearching />}

        {easyShare && <EasySharing />}
      </div>
    </div>
  );
}
