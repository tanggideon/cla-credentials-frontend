"use client";
import React, { useState } from "react";
import Header from "../(components)/Header";
import SendLinkForm from "../../components/forms/sendLink";
import RecentCards from "../(components)/recentCards";

const RequestTranscript = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full h-[80vh]">
      <div className="flex justify-between items-center mb-6 pt-3">
        <Header name="Send Link to Student for DIY" />
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-5 p-10 bg-white h-full mt-5">
        <div className="w-full lg:w-2/3 bg-white">
          <h1 className="text-lg font-semibold text-gray-700">
            Send Link Form
          </h1>
          <div className="my-3 mx-5">
            <SendLinkForm />
          </div>
        </div>
        <div className="w-full lg:w-1/3 overflow-y-scroll">
          <h1 className="text-lg font-semibold text-gray-700 py-3">
            Recent Requests
          </h1>
          <hr className="h-1 bg-gray-300 my-2" />
          <RecentCards 
            transcriptId="12345"
            studentName="Felix Frimpong"
            university="California University"
            email="felix@email.com"
            requestedDate="2 days ago"
            link="/dashboard"
          />
          <RecentCards 
            transcriptId="12345"
            studentName="Felix Frimpong"
            university="California University"
            email="felix@email.com"
            requestedDate="2 days ago"
            link="/dashboard"
          />
          <RecentCards 
            transcriptId="12345"
            studentName="Felix Frimpong"
            university="California University"
            email="felix@email.com"
            requestedDate="2 days ago"
            link="/dashboard"
          />
          <RecentCards 
            transcriptId="12345"
            studentName="Felix Frimpong"
            university="California University"
            email="felix@email.com"
            requestedDate="2 days ago"
            link="/dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestTranscript;
