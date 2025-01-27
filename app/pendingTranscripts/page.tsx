"use client";
import React, { useState } from "react";
import Header from "../(components)/Header";
import RequestForm from "../../components/forms/requestForm";
import { PlusCircleIcon, Send } from "lucide-react";
import CompletedTranscriptCard from "../(components)/completedTranscriptCards";

const RequestTranscript = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full h-[80vh]">
      <Header name="Pending Transcripts" />
      <div className="py-4 flex flex-col md:flex-row gap-5 p-10 bg-white h-full mt-5">
        <div className="w-full lg:w-2/3 bg-white h-full overflow-y-scroll py-5">
          <CompletedTranscriptCard />
          <div className="my-3 mx-5"></div>
        </div>
        <div className="w-full lg:w-1/3">
          <h1 className="text-lg font-semibold text-gray-700 py-3">
            Recent Requests
          </h1>
          <hr className="h-1 bg-gray-300 my-2" />
        </div>
      </div>
    </div>
  );
};

export default RequestTranscript;
