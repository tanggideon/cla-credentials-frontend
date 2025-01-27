import React from 'react'
import Header from '../(components)/Header'
import { Button } from '../../components/ui/button';
import { Download, Languages, Save } from 'lucide-react';
import ECEOrderForm from '../../components/forms/eceOrderForm';

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

const NACESEvaluation = () => {
  return (
    <div className="w-full h-[80vh]">
      <Header name="NACES Evaluations" />
      <div className="py-4 flex flex-col md:flex-row gap-5 h-full">
        <div className="w-full lg:w-2/3 flex flex-col bg-white h-full gap-5 py-10">
          <div className='w-[80%] mx-auto'>
            <Header name='ECE Order Details' />
            <ECEOrderForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NACESEvaluation