import React from "react";
import Header from "../(components)/Header";
import Link from "next/link";
import {
  BookA,
  Download,
  Flag,
  Landmark,
  Languages,
  ThumbsUp,
} from "lucide-react";
import CoursesCard from "../(components)/coursesCard";
import { Button } from "../../components/ui/button";

const courses = [
  {
    id: "1",
    course: "Financial Accounting",
    grade: "A+",
  },
  {
    id: "2",
    course: "Introduction to Psychology",
    grade: "C+",
  },
  {
    id: "3",
    course: "Introduction to Economics",
    grade: "B",
  },
  {
    id: "4",
    course: "Statistical Methods",
    grade: "A+",
  },
  {
    id: "5",
    course: "Business Accounting",
    grade: "A+",
  },
];

const HighSchoolTranscript = () => {
  return (
    <div className="w-full h-[80vh]">
      <Header name="Transcript Details" />
      <div className="py-4 flex flex-col md:flex-row gap-5 h-full">
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row">
          <div className="w-full lg:w-1/5 bg-white h-full py-5">
            <Link href="">
              <div
                className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-blue-300 gap-3 transition-colors`}
              >
                <ThumbsUp className="w-6 h-6 !text-gray-700" />
                <span className={`block font-medium text-gray-700`}>
                  Original Transcript
                </span>
              </div>
            </Link>
            <Link href="/translation">
              <div
                className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-blue-300 gap-3 transition-colors`}
              >
                <Languages className="w-6 h-6 !text-gray-700" />
                <span className={`block font-medium text-gray-700`}>
                  Translation
                </span>
              </div>
            </Link>
            <Link href="/claEvaluation">
              <div
                className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-blue-300 gap-3 transition-colors`}
              >
                <Flag className="w-6 h-6 !text-gray-700" />
                <span className={`block font-medium text-gray-700`}>
                  CLA Evaluation
                </span>
              </div>
            </Link>
            <Link href="/nacesEvaluation">
              <div
                className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-blue-300 gap-3 transition-colors`}
              >
                <Flag className="w-6 h-6 !text-gray-700" />
                <span className={`block font-medium text-gray-700`}>
                  NACES Evaluation
                </span>
              </div>
            </Link>
          </div>
          <div className="w-full lg:w-4/5 bg-white h-full p-5 flex flex-col gap-3">
            <div>
              <h1 className="text-lg font-semibold text-gray-500">
                Credential Page for Student
              </h1>
              <h1 className="text-md font-semibold text-gray-500">
                Courses and Grades
              </h1>
            </div>
            <hr className="h-1 bg-gray-300 my-2" />
            <div className="flex-1">
              {courses.map((item) => (
                <CoursesCard courseName={item.course} grade={item.grade} key={item.id}/>
              ))}
            </div>
            <div className="flex flex-row gap-5">
              <Button className="shad-primary-btn w-full py-1">
                <div className="flex flex-row gap-2">
                  <Download />
                  <h1>Download Now</h1>
                </div>
              </Button>
              <Button className="shad-primary-btn w-full py-1">
                <div className="flex flex-row gap-2">
                  <Languages />
                  <h1>Translate to English</h1>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighSchoolTranscript;
