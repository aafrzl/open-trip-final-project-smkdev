import FormHoster from '@/components/Register/FormHoster'
import React from 'react'

export default function PageRegisterHoster() {
  return (
    <div className='bg-[#F5F5F5] flex items-center justify-center'>
      <div className='flex flex-col items-start justify-center border-t-5 border-main p-5 lg:p-24 lg:w-1/2 mt-28 rounded-xl shadow-md mb-36 gap-8'>
        <h3 className='text-2xl font-normal tracking-[0.00125rem]'>Register as Hoster</h3>
        <FormHoster />
      </div>
    </div>
  )
}
