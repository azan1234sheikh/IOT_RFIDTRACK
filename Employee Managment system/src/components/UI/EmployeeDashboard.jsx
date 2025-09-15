import React from 'react'

const TaskListNumbers = ({Propdata}) => {
//  console.log(Propdata.taskNumbers);
  return (
    <>
     <div className='flex flex-wrap mt-10  gap-4'>
       <div className='rounded-xl w-full sm:w-[45%] lg:w-[24%]  py-6  px-7 bg-red-400'>
    {/* <h2 className='text-3xl font-semibold'>{Propdata.taskNumbers.newTask}</h2> */}
         <h2 className='text-xl font-medium'>New Task</h2>
       </div>
       <div className='rounded-xl w-full sm:w-[45%] lg:w-[24%] py-6 px-7 bg-blue-400'>
         {/* <h2 className='text-3xl font-semibold'>{Propdata.taskNumbers.completed}</h2> */}
         <h2 className='text-xl font-medium'>Completed Task</h2>
       </div>
       <div className='rounded-xl w-full sm:w-[45%] lg:w-[24%] py-6 px-7 bg-yellow-300'>
         {/* <h2 className='text-3xl text-black font-semibold'>{Propdata.taskNumbers.failed}</h2> */}
         <h2 className='text-xl text-black font-medium'>Failed Task</h2>
       </div>
       <div className='rounded-xl w-full sm:w-[45%] lg:w-[23%] py-6 px-7 bg-green-400'>
         {/* <h2 className='text-3xl  font-semibold'>{Propdata.taskNumbers.active}</h2> */}
         <h2 className='text-xl  font-medium'>Accepted Task</h2>
       </div>
     
     </div>
    </>
   
  );
};

export default TaskListNumbers;
