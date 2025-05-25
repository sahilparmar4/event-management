"use client"
import { useBookSlotStore } from '@/store'
import { useRouter } from 'next/navigation'
import React from 'react'

const index = () => {
  const router = useRouter()
  const {bookedSlot} = useBookSlotStore()
  return (
    <>
      <div className='bg-black/[70%] p-20 flex flex-col justify-center items-center min-h-screen'>
        <h1 className='text-white font-bold text-2xl md:text-3xl text-center'>
            Thank you for booking. Show more events and book your seats by <u className='text-green-500 cursor-pointer' onClick={()=>router.push("/events")}>clicking here</u>.
        </h1>
        {
          bookedSlot &&
          <div className='flex flex-col mt-6'>
            
            <div className='flex flex-1 gap-2'>
                <span className='text-white font-bold'>Event Name: </span> <span className='text-white'>{bookedSlot?.event}</span>
            </div>
            <div>
                <div className='flex flex-1 gap-2'>
                <span className='text-white font-bold'>Your Name: </span> <span className='text-white'>{bookedSlot?.name}</span>
            </div>
            <div className='flex flex-1 gap-2'>
                <span className='text-white font-bold'>Email: </span> <span className='text-white'>{bookedSlot?.email}</span>
            </div>
            </div>
            <div>
                <div className='flex flex-1 gap-2'>
                <span className='text-white font-bold'>No. of seats: </span> <span className='text-white'>{bookedSlot?.slots}</span>
            </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default index
