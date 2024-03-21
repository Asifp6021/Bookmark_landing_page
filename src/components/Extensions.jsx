import { useState } from "react";
import { extensionsAre } from "../Data";
import Button from "../components/Button";

export default function Extensions() {
  const [extension, setExtensions] = useState(extensionsAre);
  return (
    <div className="flex justify-center">
      <div className="grid w-full grid-cols-1 justify-center gap-20 py-16 md:grid-cols-2 md:pt-20 lg:max-w-6xl xl:max-w-[900px] xl:grid-cols-3 xl:gap-16 xl:pt-32">
        {extension.map((item) => (
          <div key={item.title} className={item.styles}>
            <div className="border-circle grid justify-center gap-8 border-b-4 border-dotted border-grayish-blue border-opacity-20 pb-16">
              <img
                src={item.img}
                alt="item.title"
                className="justify-self-center"
              />

              <div className="grid gap-4">
                <h4 className="justify-self-center text-3xl font-medium text-very-dark-blue">
                  {item.title}
                </h4>
                <p className="justify-self-center text-3xl text-grayish-blue">
                  {item.version}
                </p>
              </div>
            </div>
            <Button type="forth">Add & install Extensions</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
