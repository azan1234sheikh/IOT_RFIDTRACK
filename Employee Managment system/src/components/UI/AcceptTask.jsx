import React from 'react'

const Accepttask = ({Propdata}) => {
  
  return (
    <>
     {/* Card #1 */}
     <div className="lg:w-[300px] sm:w-[1/2] p-5 mx-4 bg-green-400 flex-shrink-0   rounded-xl ">
        <div className="flex justify-between">
          <h3 className="bg-red-600 text-white px-3 py-1 rounded">High</h3>
          <h2 className="text-sm">123</h2>
        </div>
        <h2 className="mt-5 text-2xl  font-semibold">TaskTitle</h2>
        <p className="text-sm text-left mt-2">Task Desp
        </p>
        <div className="mt-4 justify-between flex">
            <button className='bg-green-500 hover:bg-green-600  py-1 rounded px-2 text-sm'>Accept Task</button>
            <button className='bg-red-500 hover:bg-red-600  py-1 rounded px-2 text-sm'>Reject Task</button>

        </div>
      </div>
      </>
  )
}

export default Accepttask