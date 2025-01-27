"use client";

import React, { useState } from "react";
import Header from "../(components)/Header";
import { Button } from "../../components/ui/button";
import { Download, Flag, Languages, Save, ThumbsUp } from "lucide-react";
import SelectDropdown from "../(components)/select";
import Link from "next/link";

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

const Translation = () => {
  const [selected, setSelected] = useState<string | undefined>();
  const handleSelectionChange = (value: string) => {
    setSelected(value);
    console.log("Selected Value:", value);
  };
  const options = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "German", label: "German" },
    { value: "Chinese", label: "Chinese" },
  ];
  return (
    <div className="w-full h-[80vh]">
      <Header name="Translation" />
      <div className="py-4 flex flex-col md:flex-row gap-5 h-full">
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row bg-white h-full gap-5 py-10">
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
            <div className="w-[80%] mx-auto">
              <Header name="Transcript Preview" />
              <hr className="h-1 bg-gray-300 my-2" />
              <div>
                <div className="my-3">
                  <div className="flex flex-row gap-3">
                    <h1 className="font-semibold text-md text-gray-700">
                      Name:{" "}
                    </h1>
                    <h1 className="font-bold text-md text-gray-700">
                      Alice Johnson
                    </h1>
                  </div>
                  <div className="flex flex-row gap-3">
                    <h1 className="font-semibold text-md text-gray-700">
                      Student ID:
                    </h1>
                    <h1 className="font-bold text-md text-gray-700">
                      0123456789
                    </h1>
                  </div>
                  <div className="flex flex-row gap-3">
                    <h1 className="font-semibold text-md text-gray-700">
                      Program
                    </h1>
                    <h1 className="font-bold text-md text-gray-700">
                      BSc. Computer Science
                    </h1>
                  </div>
                </div>
              </div>
              <hr className="h-1 bg-gray-300 my-2" />
              <div>
                <div className="my-3">
                  {courses.map((item) => (
                    <div
                      className="flex flex-row gap-1 justify-between items-center"
                      key={item.id}
                    >
                      <h1 className="font-semibold text-md text-gray-700 w-[10%]">
                        Course
                      </h1>
                      <h1 className="font-bold text-md text-gray-700 flex-1">
                        {item.course}
                      </h1>
                      <h1 className="font-semibold text-md text-gray-700 w-[10%]">
                        Grade
                      </h1>
                      <h1 className="font-bold text-md text-gray-700 w-[20%]">
                        {item.grade}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto">
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="p-4">
                  <h1 className="mb-4 text-lg font-semibold text-gray-700">
                    Translate Transcript
                  </h1>
                  <h1 className="font-semibold text-md text-gray-700 mb-2">
                    Select Language
                  </h1>
                  <SelectDropdown
                    options={options}
                    placeholder="Choose a Language"
                    selectedValue={selected}
                    onChange={handleSelectionChange}
                  />
                </div>
                <Button className="shad-primary-btn py-1">
                  <div className="flex flex-row gap-2">
                    <Languages />
                    <h1>Translate</h1>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translation;
