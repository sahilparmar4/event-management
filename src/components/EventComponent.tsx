"use client"
import { eventDataType } from '@/lib/events'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const EventComponent = ({item}: {item: eventDataType}) => {
    const router = useRouter()
  return (
    <>
      <div className='border border-gray-200 rounded-lg h-full cursor-pointer' onClick={()=>router.push(`/events/${item?.id}`)}>
        <Image src={item?.image} width={100} height={100} className='w-full h-[300px] rounded-lg' alt='event-image' />
        <div className='p-4'>
            <h3 className='text-2xl md:text-3xl text-white font-bold'>{item?.title}</h3>
            <p className='text-white mt-1'>{item?.description}</p>
            <div className='flex flex-1 gap-2 mt-1'>
                <span className='font-semibold text-gray-200 text-nowrap'>Date:</span> <span className='text-white'>{item?.date}</span>
            </div>
            <div className='flex flex-1 gap-2 mt-1'>
                <span className='font-semibold text-gray-200 text-nowrap'>Location:</span> <span className='text-white'>{item?.location}</span>
            </div>
            <div className='flex flex-1 gap-2 mt-1'>
                <span className='font-semibold text-gray-200 text-nowrap'>Available Seats :</span> <span className='text-white'>{item?.availableSeats}</span>
            </div>
            <div className='flex justify-center items-end mt-1'>
                <button className='bg-green-500/[50%] px-4 py-4 text-center place-self-end mt-4 rounded-full border border-white text-white font-semibold'>
                    Book Your Slot
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default EventComponent
