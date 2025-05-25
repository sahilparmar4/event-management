"use client"
import { eventData, eventDataType } from '@/lib/events'
import { useBookSlotStore } from '@/store'
import { useFormik } from 'formik'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { object, string } from 'yup'

const index = () => {
  const router = useRouter()
  const params = useParams()
  const currentEvent: any = eventData?.find((item: eventDataType)=>item?.id === params?.id)
  const [loading, setLoading] = useState(false)
  const {setBookedSlot} = useBookSlotStore()

  const bookSlotSchema = object().shape({
    name: string().required("Please enter the name").min(2, "Name should be at least 2 characters").max(30, "Name should not be more than 30 characters"),
    email: string().required("Please enter email").email("Please enter valid email").max(50, "Email should not be more than 50 characters"),
    slots: string().required("Please enter no. of seats").min(1, "Please enter minimum 1 slot").max(currentEvent?.availableSeats, `You can't select slots more than ${currentEvent?.availableSeats}`)
  })

  const {values, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues:{
      name:"",
      email: "",
      slots: ""
    },
    validationSchema: bookSlotSchema,
    onSubmit: (values)=>{
      setLoading(true)
      toast.success("Your slot has been confirmed");
      setBookedSlot({...values, event: currentEvent?.title})
      setTimeout(() => {
        router.push("/booking-confirmation");
      }, 1000);
    }
  })

  return (
    <>
    {
      currentEvent &&
      <div className='px-10 md:px-20 py-10 bg-black/[70%]'>
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
          <h1 className='text-base md:text-4xl text-nowrap text-left md:text-center font-bold text-white'>{currentEvent?.title}</h1>
          <div className='md:p-20 flex justify-center items-center mt-3 md:mt-0 p-0'>
            <Image src={currentEvent?.image} width={100} height={100} className='w-full h-[100%] md:h-auto' alt={currentEvent?.image} />
          </div>
          <div className='mt-6'>
            <p className='text-left text-white text-base md:text-xl'>{currentEvent?.description}</p>
            <div className='mt-4 flex flex-col md:flex-1 justify-between'>
                <div>
                  <span className='font-bold text-white md:text-lg'>Date: </span> <span className='text-white md:text-lg'>{currentEvent?.date}</span>
                </div>
               <div>
                  <span className='font-bold text-white md:text-lg'>Location: </span> <span className='text-white md:text-lg'>{currentEvent?.location}</span>
                </div>
                <div>
                  <span className='font-bold text-white md:text-lg'>Available Seats: </span> <span className='text-white md:text-lg'>{currentEvent?.availableSeats}</span>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-2xl font-bold text-center text-white underline'>Book Your Slot</h1>
                <form method='POST' className='mt-6' onSubmit={handleSubmit} noValidate>
                      <div className='flex flex-col md:flex-1 justify-between gap-3'>
                        <div className='w-full'>
                          <input name='name' placeholder='Name' type='text' value={values?.name} onChange={handleChange} onBlur={handleBlur} className='border border-gray-50 rounded-full w-full py-4 px-4 placeholder:text-white text-white' />
                          {
                            errors && errors?.name &&
                          <div className='text-white'>
                              {errors?.name}
                          </div>
                          }
                        </div>
                        <div className='w-full'>
                          <input name='email' placeholder='Email' type='email' value={values?.email} onChange={handleChange} onBlur={handleBlur} className='border border-gray-50 rounded-full w-full py-4 px-4 placeholder:text-white text-white' />
                            {
                            errors && errors?.email &&
                          <div className='text-white'>
                              {errors?.email}
                          </div>
                          }
                        </div>
                        <div className='w-full'>
                          <input name='slots' placeholder='No of seats' type='text' pattern='[0-9]*' inputMode='numeric' value={values?.slots} 
                          onChange={ (e)=>{
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                              handleChange(e); // Call your existing handler only if valid
                            }

                          }
                          } 
                          onBlur={handleBlur} 
                          className='border border-gray-50 rounded-full w-full py-4 px-4 placeholder:text-white text-white' 
                          />
                          {
                            errors && errors?.slots &&
                          <div className='text-white'>
                              {errors?.slots}
                          </div>
                          }
                        </div>
                      </div>
                      <div className='flex justify-center items-center'>
                          <button className={`border border-gray-50 py-4 px-4 ${loading ? "cursor-not-allowed" : "cursor-pointer"} text-center mt-6 rounded-full text-white w-[50%] hover:bg-gray-50 hover:text-black`} type='submit' disabled={loading}>
                              {loading ? "Loading..." : "Submit"}
                          </button>

                      </div>
                </form>
            </div>  
          </div>
      </div>
    }
    </>
  )
}

export default index
