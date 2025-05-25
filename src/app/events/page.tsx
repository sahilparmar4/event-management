"use client"

import EventComponent from '@/components/EventComponent'
import { eventData, eventDataType } from '@/lib/events'
import React, { useState } from 'react'

const index = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showEvents, setShowEvents] = useState<eventDataType[]>(eventData ?? [])
  const [loading, setLoading] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    setLoading(true)

    setTimeout(() => {
      const searchTerm = value.toLowerCase()
      const filteredEvents = eventData.filter((item: eventDataType) => {
        return (
          item?.title?.toLowerCase().includes(searchTerm) ||
          item?.description?.toLowerCase().includes(searchTerm) ||
          item?.date?.toLowerCase().includes(searchTerm) ||
          item?.location?.toLowerCase().includes(searchTerm) ||
          item?.availableSeats?.toString().includes(searchTerm)
        )
      })

      setShowEvents(filteredEvents) 
      setLoading(false)
    }, 100)
  }

  return (
    <>
      <div className='px-10 md:px-20 py-10 bg-black/[70%]'>
          <h1 className='text-4xl text-center font-bold text-white'>Events</h1>
          <div className='flex justify-center items-center my-4'>

          <input value={searchValue} onChange={(e)=>handleSearch(e)} className='text-white p-4 border border-white rounded-full w-full md:w-1/2' placeholder='Search here...' />
          </div>
          {
            loading ?
            <>
              <div className='text-xl font-bold text-white'>
                Loading...
              </div>
            </>:
            showEvents?.length > 0 ?
            <>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                {
                  showEvents?.map((item: eventDataType)=>{
                    return (
                        <div key={item?.id}>

                        <EventComponent item={item} />
                        </div>
                    )
                  })
                }

              </div>
            </>:
            <>
              <div className='text-3xl flex justify-center items-center font-bold text-white text-nowrap'>
                  No events available
              </div>
            </>
          }
      </div>
    </>
  )
}

export default index
