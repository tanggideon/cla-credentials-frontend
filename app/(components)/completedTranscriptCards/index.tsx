import Link from 'next/link';
import React from 'react';

interface TranscriptCardProps {
  name: string;
  university: string;
  dob: string;
}

const TranscriptCard: React.FC<TranscriptCardProps> = ({ name, university, dob }) => {
  return (
    <Link href="/transcriptDetails" aria-label={`View transcript of ${name}`}>
      <article className="py-5 px-5 shadow-md bg-white hover:bg-gray-50 hover:shadow-lg rounded-lg transition">
        <div className="flex flex-col gap-2 px-5">
          <h1 className="text-gray-600 font-semibold text-2xl">{name}</h1>
          <h2 className="text-gray-600 font-semibold">{university}</h2>
          <div className="flex flex-row gap-3">
            <span className="text-gray-400 font-semibold">Date of Birth:</span>
            <span className="text-gray-400 font-bold">{dob}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TranscriptCard;
