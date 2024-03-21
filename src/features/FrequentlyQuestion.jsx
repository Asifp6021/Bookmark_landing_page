import { useState } from "react";
import { questionAre } from "../Data";
import Button from "../components/Button";

export default function FrequentlyQuestion() {
  const [questions, setQuestions] = useState(questionAre);
  const [showAnswer, setShowAnswer] = useState(
    new Array(questions.length).fill(false),
  );

  function handleShowAnswer(index) {
    const newAnswer = showAnswer.map((value, i) =>
      i === index ? !value : false,
    );

    setShowAnswer(newAnswer);
  }

  return (
    <div className="limit">
      <div className="pad ">
        <div className="mt-16 flex flex-col gap-20 sm:gap-24 md:max-w-5xl lg:pt-20 xl:pt-40">
          <div className="flex flex-col gap-8">
            <h1 className="sub_heading">Frequently Asked Questions</h1>
            <p className="para cursor-pointer md:text-center">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {questions.map((ques, index) => (
              <div className="flex flex-col gap-8" key={ques.questionIs}>
                <div
                  className={`flex cursor-pointer items-center justify-between gap-8 border-b-2 border-grayish-blue border-opacity-50 pb-8 pt-8 ${showAnswer[index] && index === 0 ? "border-t-2 border-grayish-blue border-opacity-50" : ""}`}
                  onClick={() => handleShowAnswer(index)}
                >
                  <h4 className="text-4xl text-very-dark-blue transition-all hover:text-soft-red">
                    {ques.questionIs}
                  </h4>
                  <img
                    src="images/icon-arrow.svg"
                    alt="arrow"
                    className={`${showAnswer[index] ? "rotate-180 transition-transform" : ""}`}
                  />
                </div>
                {showAnswer[index] && (
                  <p className=" h-min overflow-hidden text-[1.7rem] leading-relaxed text-grayish-blue transition md:leading-tight lg:text-3xl lg:leading-snug">
                    {ques.answerIs}
                  </p>
                )}
              </div>
            ))}
          </div>

          <Button type="sixth">More Info</Button>
        </div>
      </div>
    </div>
  );
}
