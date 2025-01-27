import React from 'react'
import Header from '../(components)/Header'
import { Button } from '../../components/ui/button';
import { Download, Languages, Save } from 'lucide-react';

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

const ClaEvaluation = () => {
  return (
    <div className="w-full h-[80vh]">
      <Header name="CLA Evaluations" />
      <div className="py-4 flex flex-col md:flex-row gap-5 h-full">
        <div className="w-full lg:w-2/3 flex flex-col bg-white h-full gap-5 py-10">
          <div className='w-[80%] mx-auto'>
            <Header name='Academic Transcript' />
            <hr className="h-1 bg-gray-300 my-2" />
            <div>
                <h1 className='text-lg font-semibold text-gray-700'>Student Information</h1>
                <div className='my-3'>
                    <div className='flex flex-row gap-3'>
                        <h1 className='font-semibold text-md text-gray-700'>Name: </h1>
                        <h1 className='font-bold text-md text-gray-700'>Alice Johnson</h1>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <h1 className='font-semibold text-md text-gray-700'>Student ID:</h1>
                        <h1 className='font-bold text-md text-gray-700'>0123456789</h1>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <h1 className='font-semibold text-md text-gray-700'>Program</h1>
                        <h1 className='font-bold text-md text-gray-700'>BSc. Computer Science</h1>
                    </div>
                </div>
            </div>
            <hr className="h-1 bg-gray-300 my-2" />
            <div>
                <h1 className='text-lg font-semibold text-gray-700'>Course Evaluation</h1>
                <div className='my-3'>
                {courses.map((item) => (
                    <div className='flex flex-row gap-1 justify-between items-center' key={item.id}>
                        <h1 className='font-semibold text-md text-gray-700 w-[10%]'>Course</h1>
                        <h1 className='font-bold text-md text-gray-700 flex-1'>{item.course}</h1>
                        <h1 className='font-semibold text-md text-gray-700 w-[10%]'>Grade</h1>
                        <h1 className='font-bold text-md text-gray-700 w-[20%]'>{item.grade}</h1>
                    </div>
                ))}
                </div>
            </div>
          </div>
          <div className='w-[80%] mx-auto'>
          <div className="flex flex-row gap-5">
              <Button className="shad-primary-btn w-full py-1">
                <div className="flex flex-row gap-2">
                  <Download />
                  <h1>Download or Export</h1>
                </div>
              </Button>
              <Button className="shad-primary-btn w-full py-1">
                <div className="flex flex-row gap-2">
                  <Save />
                  <h1>Save for Later</h1>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaEvaluation