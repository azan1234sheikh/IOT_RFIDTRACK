import React,{useState} from 'react'
import { Stack ,Box, Card,Badge} from '@chakra-ui/react'
import Header from './Header'
import SideBar from './Sidebar'
import {
  Search,
  Bell,
  Settings,
  Home,
  BarChart2,
  Users,
  FileText,
  MessageSquare,
  HelpCircle,
  MapPin,
  LogOut,
} from "lucide-react"

import { Avatar, AvatarGroup,Input } from "@chakra-ui/react"
import { UsersRound,UserRoundCog, IdCard} from 'lucide-react';
import EmployeesDataHook from '../../context/EmployeesDataHook'

import Loading from './Loading'
const EmployeeCard = ({index,data}) => {
    const [Data, setData] = useState();
  const {loading,employeeData,employeeroot} = EmployeesDataHook();
  return (

    <>
    {loading?<Loading/>:(
        <Card.Root key={index} className="overflow-hidden border-none shadow-lg">
        <Card.Body className="items-center px-1 gap-4">
            <div className="flex mb-4 items-center">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600 ring-4 ring-blue-100">
                    <span className="text-white font-bold text-xl">JD</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-black">{data.firstName}</h2>
                  <p className="text-gray-500 text-sm">{data.department}</p>
                </div>
            
            </div>
         
               <div className="flex flex-col gap-5 w-5/6 divide-y divide-gray-200">
               
                <div className="flex justify-between w-full">
                </div>

                <div className="flex justify-between w-full pt-2">
                  <p className="text-sm text-gray-700">Role</p>
                  <p className="text-md font-medium text-gray-800">{data.role}</p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-sm text-gray-700">Employee ID</p>
                  <p className="text-md font-medium text-gray-800">{data.Id}</p>
                </div>
                 <div className="flex justify-between w-full">
                  <p className="text-sm text-gray-700">Department</p>
                  <p className="text-md font-medium text-gray-800">{data.department}</p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-sm text-gray-700">Email</p>
                  <p className="text-md font-medium text-gray-800">{data.Email}</p>
                </div>
                
                <div className="flex justify-between gap-2">
                  <div className="flex">
                    <button className='flex gap-3 text-white bg-[#108d65] rounded-md p-2 '>
                     <IdCard color='black'/>ReAssign RFID
                  </button>
                  </div>
                   
                  <div className="flex ">
                    <button className='flex gap-3 text-white bg-[#108d65] rounded-md p-2  '>
                     <IdCard color='black'/>Deactivate user
                  </button>
                  </div>
                  
                </div>
            </div>
        
            
          
    
        </Card.Body>
      </Card.Root>
)}
    </>

  
  )
}

export default EmployeeCard