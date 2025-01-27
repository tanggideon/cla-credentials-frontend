import React from 'react'

const CompletedTranscriptCard = () => {
  return (
    <a href="/dashboard">
    <div className='w-[98%] py-3 px-5 shadow-md hover:bg-gray-50'>
        <div className='flex flex-col gap-2 px-5'>
                <h1 className='text-gray-600 font-semibold text-2xl'>Alice Johnson</h1>
                <h1 className='text-gray-600 font-semibold'>University of California</h1>
            <div className='flex flex-row gap-3'>
                <h1 className='text-gray-400 font-semibold'>Date of Birth:</h1>
                <h1 className='text-gray-400 font-bold'>26th April, 1999</h1>
            </div>
        </div>
    </div>
    </a>
  )
}

export default CompletedTranscriptCard