import { useEffect, useState } from "react";
import Button from "../components/Button";
import { emailDomains } from "../Data";

function checkEmail(getEmail) {
  const emailIs = getEmail.split("");

  const getIndexOf = emailIs.indexOf("@");
  const sliceIt = emailIs.slice(getIndexOf + 1);
  const convertToString = sliceIt.join("");

  for (let domain of emailDomains) {
    if (domain === convertToString) {
      let email = new RegExp(`^[a-z0-9!#$%&'*+/=?^_\`{|}~-]+@${domain}$`, "i");

      const result = email.test(getEmail);
      return result;
    }
  }

  return convertToString;
}

export default function Contact() {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);

  function handleEmail() {
    const emailResult = checkEmail(email);

    if (typeof emailResult === "string") {
      setValidateEmail(true);
    } else if (typeof emailResult === "boolean" && emailResult === true) {
      setValidateEmail(false);
    }
  }

  function handleEmailValue(e) {
    setEmail(e.target.value);
    setValidateEmail(false);
  }

  return (
    <div className="limit mt-28">
      <div className="pad flex w-full bg-soft-blue sm:justify-center">
        <div className="flex w-full max-w-2xl flex-col gap-8 py-24 ">
          <p className="self-center text-3xl text-white opacity-70">
            {" "}
            35,000+ already joined
          </p>
          <h3 className="self-center text-center text-4xl font-medium leading-snug text-white sm:text-5xl sm:leading-normal">
            Stay up-to-date with what we’re doing
          </h3>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center ">
            <div className="relative md:basis-9/12">
              <input
                type="text"
                placeholder="Enter your email address"
                className="focus relative w-full rounded-xl border-transparent py-6 indent-8 text-2xl focus:ring-soft-red"
                value={email}
                onChange={handleEmailValue}
              />
              {validateEmail && (
                <>
                  <p className="rounded-b-lg bg-soft-red px-4 py-4 text-[1.5rem] text-white">
                    Woops ! make sure it's valid email
                  </p>
                  <img
                    src="/public/images/icon-error.svg"
                    alt="error-icon"
                    className="absolute right-4 top-[18%] "
                  />
                </>
              )}
            </div>
            <Button type="fifth" onClick={handleEmail}>
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
