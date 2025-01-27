import React from 'react';

interface CoursesCardProps {
  courseName: string;
  grade: string;
}

const CoursesCard: React.FC<CoursesCardProps> = ({ courseName, grade }) => {
  return (
    <div className="flex flex-col gap-2 py-3 px-5 my-2 border rounded-lg">
      <div className="flex flex-row gap-2">
        <h1 className="font-bold text-md text-gray-700">Course:</h1>
        <h1 className="font-bold text-md text-gray-700">{courseName}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-bold text-md text-gray-500">Grade:</h1>
        <h1 className="font-bold text-md text-gray-500">{grade}</h1>
      </div>
      <hr className="h-[1px] bg-gray-300" />
    </div>
  );
};

export default CoursesCard;
