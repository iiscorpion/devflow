import ROUTES from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import TagCards from "../cards/TagCards";

const hotQuestions = [
  { _id: "1", title: "How to center a div in CSS?" },
  {
    _id: "2",
    title: "What is the difference between let and var in JavaScript?",
  },
  { _id: "3", title: "How to optimize React performance?" },
  { _id: "4", title: "What are closures in JavaScript?" },
  { _id: "5", title: "How to manage state in React?" },
];

const popularTags = [
  { _id: "1", name: "JavaScript", questions: 1200 },
  { _id: "2", name: "React", questions: 950 },
  { _id: "3", name: "CSS", questions: 800 },
  { _id: "4", name: "Node.js", questions: 650 },
  { _id: "5", name: "TypeScript", questions: 500 },
];

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrolbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-87.5 flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark_light900">Top Questions</h3>
        <div className="flex flex-col w-full mt-7 gap-7.5">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p>{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCards
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
