"use client"
import React, { useState } from 'react'
import Header from "../(components)/Header";
import RequestForm from '../../components/forms/requestForm';
import { PlusCircleIcon, Send } from 'lucide-react';

const RequestTranscript = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 pt-3">
          <Header name="Request Transcript"/>
        </div>
      <div className="py-4 flex flex-col md:flex-row gap-5 p-10 bg-white h-full mt-5">
        <div className="w-full lg:w-2/3 bg-white">
        <h1 className="text-lg font-semibold text-gray-700">Request Form</h1>
        <div className='my-3 mx-5'>
          <RequestForm />
        </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h1>Right</h1>
        </div>
      </div>
    </div>
  )
}

export default RequestTranscript
