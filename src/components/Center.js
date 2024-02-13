import React from 'react'

const Center = () => {
  return (
    // using flex 
    <div className='w-full relative'>
      <div className='border text-white font-semibold border-green-500 rounded-md text-center w-2/12 py-[4rem] flex justify-center mx-auto items-center bg-green-500'>
        Flex
      </div>
      <div className='border text-white font-semibold border-green-500 rounded-md text-center w-2/12 py-[4rem] grid place-items-center bg-green-500'>
        Grid
      </div>
      <div className='border mt-4 text-white font-semibold border-green-500 rounded-md text-center w-2/12 py-[4rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[-50%]  bg-green-500'>
        Without any of these
      </div>
    </div>
  )
}

export default Center;
