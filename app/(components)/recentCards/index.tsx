import React from 'react';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';

interface RecentCardProps {
  transcriptId: string;
  studentName: string;
  university: string;
  email: string;
  requestedDate: string;
  link: string;
}

const RecentCard: React.FC<RecentCardProps> = ({
  transcriptId,
  studentName,
  university,
  email,
  requestedDate,
  link,
}) => {
  return (
    <Link href={link} aria-label={`View details for transcript ID: ${transcriptId}`}>
      <div className="w-full py-3 px-5 rounded-lg shadow-md hover:bg-gray-50 transition">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-gray-600 font-semibold">{`Transcript ID: ${transcriptId}`}</h1>
          <Ellipsis className="text-gray-400 w-5 h-5" />
        </div>
        <hr className="h-[2px] bg-gray-300 my-2" />
        <div className="flex flex-col gap-2 px-5">
          <div className="flex flex-row justify-between">
            <span className="text-gray-600 font-semibold">Student Name:</span>
            <span className="text-gray-600 font-bold">{studentName}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-gray-600 font-semibold">University:</span>
            <span className="text-gray-600 font-bold">{university}</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-gray-600 font-semibold">Email:</span>
            <span className="text-gray-600 font-bold">{email}</span>
          </div>
        </div>
        <hr className="h-[2px] bg-gray-300 my-2" />
        <div className="flex flex-row justify-between items-center">
          <span className="text-gray-600 font-semibold">Requested</span>
          <span className="text-gray-600 font-bold text-sm">{requestedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecentCard;
