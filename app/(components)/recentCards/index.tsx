import { Ellipsis } from 'lucide-react'
import React from 'react'

const RecentCards = () => {
  return (
    <a href="/dashboard">
    <div className='w-full py-3 px-5 rounded-lg shadow-md hover:bg-gray-50'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-gray-600 font-semibold'>Transcript ID</h1>
        </div>
        <hr className='h-[2px] bg-gray-300 my-2'/>
        <div className='flex flex-col gap-2 px-5'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-gray-600 font-semibold'>Student Name:</h1>
                <h1 className='text-gray-600 font-bold'>Felix Frimpong</h1>
            </div>
            <div className='flex flex-row justify-between'>
                <h1 className='text-gray-600 font-semibold'>University:</h1>
                <h1 className='text-gray-600 font-bold'>California University</h1>
            </div>
            <div className='flex flex-row justify-between'>
                <h1 className='text-gray-600 font-semibold'>Email:</h1>
                <h1 className='text-gray-600 font-bold'>felix@email.com</h1>
            </div>
        </div>
        <hr className='h-[2px] bg-gray-300 my-2'/>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-gray-600 font-semibold'>Requested</h1>
            <h1 className='text-gray-600 font-bold text-sm'>2 days ago</h1>
        </div>
    </div>
    </a>
  )
}

export default RecentCards