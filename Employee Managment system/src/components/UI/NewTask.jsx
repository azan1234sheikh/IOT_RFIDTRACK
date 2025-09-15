import React, {useEffect,useState,  useContext,useMemo,useRef} from 'react'
import { Button, Text,Dialog,Field,Stack, Portal,CloseButton,Input,Checkbox,Container, Heading,Card,Box, Flex, Spinner} from '@chakra-ui/react'
import EmployeesDataHook from '../../context/EmployeesDataHook';
import { IdCard ,FolderInput,UsersRound,LaptopMinimalCheck,Clock, Info,Menu} from 'lucide-react';
import SideBar from './Sidebar';
import AttendanceCard from './AttendanceCard';
import { IoMdPeople } from "react-icons/io";
import { FaFingerprint } from "react-icons/fa";
import { Chart, useChart } from "@chakra-ui/charts"
import SidebarContent from './SidebarContent';
import Loading from "./Loading";
import RFIDCard from './RFIDCardAnim';
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { ref, set, push, update } from "firebase/database";
import { Auth, RTdatabase } from "../firebase";
import { toast } from "react-toastify";
import { time } from 'framer-motion';
import EmployeeInfoTable from './EmployeeInfoTable';
import AuthProvider,{AuthContext} from '../../context/AuthProvider'

const NewTask = () => {

  const firebaseUser =useMemo(()=>Auth.currentUser, []) ;
  console.log(firebaseUser.uid)
  const {handleSubmit,register,reset,formState:{errors}}=useForm();
     
      const Ref = useRef(null);

    const {user,loading} = useContext(AuthContext);
    console.log(user)

        const OnSubmit = handleSubmit(async(data)=>{
           try {
              await update(ref(RTdatabase, `${firebaseUser.uid}/`), {
             "Id":data.Id,
             });
            if(user?.rfidIndex){
              await update(ref(RTdatabase,`${firebaseUser.uid}/rfidIndex/`),{
              "uid":data.Id
              })
            }
           } catch (error) {
            console.error("Error:", err);
            toast.error("Something went wrong!");
           }
              toast.success("Edited Succesfully");
                 reset();

     });
    const FName = useMemo(()=>{
      if(!user?.firstName) return
      const Cleanname=user.firstName.trim();
      return Cleanname[0].toUpperCase() + Cleanname[Cleanname.length - 1].toUpperCase()
    },[user?.firstName])
   

  return (
    <>
         <Box className="h-screen">
            <Card.Root  className="overflow-hidden  border-none shadow-lg">
              <Card.Title className='font-semibold text-2xl'>Profile</Card.Title>
                    <Card.Body className="items-center px-1 gap-4">
                        <div className="flex mb-4 items-center">
                            <div className="flex flex-col items-center">
                              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600 ring-4 ring-blue-100">
                                <span className="text-white font-bold text-xl">{FName}</span>
                              </div>
                                 <h2 className="mt-3 text-lg font-semibold text-black">{user?.firstName}</h2>
                                 <p className="text-gray-500 text-sm">{user?.department}</p>
                            </div>
                        
                        </div>
                     <div className="flex flex-col gap-5">
                              <div className="flex justify-between w-full">
                                <p className="text-sm text-gray-700">Name</p>
                                <p className="text-sm font-medium text-gray-800">{user.firstName}</p>
                              </div>
                              <div className="flex justify-between w-full">
                                <p className="text-sm text-gray-700">Role</p>
                                <p className="text-sm font-medium text-gray-800">{user.role}</p>
                              </div>
                              <div className="flex justify-between w-full">
                                <p className="text-sm text-gray-700">Employee ID</p>
                                <p className="text-sm font-medium text-gray-800">{user.Id}</p>
                              </div>
                              <div className="flex justify-between w-full">
                                <p className="text-sm text-gray-700">Department</p>
                                <p className="text-sm font-medium text-gray-800">{user.department}</p>
                              </div>
                              <div className="flex justify-between w-full">
                                <p className="text-sm text-gray-700">Email</p>
                                <p className="text-sm font-medium text-gray-800">{user.Email}</p>
                              </div>
                            </div>
                                                    
                       <div className="flex justify-between gap-2">
                        
                                          
                                         </div>
                                           <Dialog.Root size={{ mdDown: "full", md: "sm" }} initialFocusEl={()=>Ref.current}>
                                              <Dialog.Trigger asChild>
                                                <button className='flex gap-3 text-white bg-[#108d65] rounded-md p-2  '>
                                            <IdCard color='black'/>Edit RFID
                                             </button>
                                              </Dialog.Trigger>
                                              <Portal>
                                                <Dialog.Backdrop />
                                                <Dialog.Positioner> 
                                                  <Dialog.Content>
                                                    <Dialog.Header>
                                                      <Dialog.Title ><Heading fontWeight={{base:"md",md:'extrabold'}} size={{base:'sm',md:'xl'}}>EDIT IOT RFID UID</Heading></Dialog.Title>
                                                    </Dialog.Header>
                                                    <Dialog.Body pb="4">
                                                       <Stack gap={3} gapX={2}>

                                                      <form onSubmit={OnSubmit}>
                                                        <Field.Root  invalid={!!errors.Id}>
                                                          <Field.Label><Field.RequiredIndicator />RFID UID</Field.Label>
                                                          <Input variant={'subtle'} {...register("Id" , { required: "Id  is required" })} />
                                                           <Field.ErrorText>{errors.Id?.message}</Field.ErrorText>

                                                        </Field.Root>
                                                        <Flex gap={2}>
                                                              <Dialog.ActionTrigger asChild>
                                                        <Button  bgColor={"#108d65"} p={2} color={"#ffff"}>Cancel</Button>
                                                      </Dialog.ActionTrigger>
                                                       <Button type="submit" bgColor="#108d65" p={2} color="#fff">
                                                        {loading ? <Spinner size="sm" /> : "Save"}
                                                      </Button>
                                                        </Flex>
                                                    
                                                        
                                                      </form>
                                                         <Checkbox.Root variant={"subtle"}>
                                                          <Checkbox.HiddenInput />
                                                          <Checkbox.Control />
                                                          <Checkbox.Label>Editing THe RFID Will Delete Previous Attendance<br/> Logs Inform Admin First</Checkbox.Label>
                                                        </Checkbox.Root>
                                                      </Stack>

                                                    </Dialog.Body>
                                                    <Dialog.Footer>
                                                     
                                                    </Dialog.Footer>
                                                  </Dialog.Content>
                                                </Dialog.Positioner>
                                              </Portal>
                                          </Dialog.Root>
                                        
                                         
                         
                    </Card.Body>
                    </Card.Root>
         </Box>

 
    </>
  )
}

export default NewTask