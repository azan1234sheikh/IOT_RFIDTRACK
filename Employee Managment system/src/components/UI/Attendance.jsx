import React, {useEffect,useState,  useContext,useMemo, useCallback} from 'react'
import { Button, Text,Box,Flex, Stack,Field,SimpleGrid ,Dialog,NativeSelect,useDisclosure,Drawer, Portal,CloseButton,Input,Container, Heading} from '@chakra-ui/react'
import EmployeesDataHook from '../../context/EmployeesDataHook';
import { IdCard ,FolderInput,UsersRound,LaptopMinimalCheck,Clock, Info,Menu} from 'lucide-react';
import SideBar from './Sidebar';
import AttendanceCard from './AttendanceCard';
import { IoMdPeople } from "react-icons/io";
import { FaFingerprint } from "react-icons/fa";
import { Chart, useChart } from "@chakra-ui/charts"
import SidebarContent from './SidebarContent';
import {
  CartesianGrid,
  Legend,
    Line,
    LineChart,
    AreaChart,
    Area, 
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
import Loading from "./Loading";

import RFIDCard from './RFIDCardAnim';
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { ref, set, push, update } from "firebase/database";
import { Auth, RTdatabase } from "../firebase";
import { toast } from "react-toastify";
import { time } from 'framer-motion';
import EmployeeInfoTable from './EmployeeInfoTable';

const Attendance = () => {


        const {employeeData,loading} =EmployeesDataHook();
        const mem_EmplyeeData = useMemo(()=>employeeData,[employeeData]);
        const [currentTime, setCurrentTime] = useState();
        let Fullname = "";
        const [value, setValue] = useState("");
        const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
          fullName:"",
          Email: "",
          Password: "",
          Dept:"",
          Role:"",
          UID:"",
        }
      });

        const { isOpen, onOpen, onClose } = useDisclosure();
      
  const onSubmit = async (data) => {
  const { fullName, Email, Dept, Role, UID,Password } = data;
  console.log(data);
  try {

    // await sendEmailVerification(Auth.currentUser);
     const userCredential = await createUserWithEmailAndPassword(Auth, Email, Password);
    await set(ref(RTdatabase, `${userCredential.user.uid}/`), {
      Id: UID,
      firstName: fullName,
      Email: Email,
      department: Dept?Dept:null,
      role: Role,
      rfidIndex: { [UID]: `${userCredential.user.uid}` },
      task: defaultTasks,
      taskNumbers,
      password:Password,
    });
    await update(ref(RTdatabase, "RFIDKEYS/"), {
    [UID]: userCredential.user.uid,
    });
    Fullname=fullName;
    toast.success("User Registered Successfully");
         reset(); 

  } catch (error) {
    toast.error("Registration failed: " + error.message);
    console.log("Registration failed: " + error.message);
   reset(); 


  } finally {
    setrendering(false);
  }
};

  const CurrentDay = useMemo(() => new Date().toISOString().split("T")[0], []);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const Realtime = new Intl.DateTimeFormat('en-PK', {
                hour: '2-digit',
                minute: '2-digit'
            });
            setCurrentTime(Realtime.format(now));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

 useEffect(() => {
  try {
        if (!Auth || !RTdatabase) {
          setFirebaseError(true);
          console.error("Firebase is not initialized");
        }
      } catch (error) {
        setFirebaseError(true);
        console.error("Firebase initialization error:", error);
      }
    }, []);


 
 const defaultTasks = [
    {
      Active: true,
      AssignTo:Fullname,
      newTask: true,
      completed: false,
      failed: false,
      TaskTitle: "Welcome Task",
      taskDescription: "Start exploring the employee dashboard.",
      Date: CurrentDay,
      category: "Onboarding"
    }
  ];

    const taskNumbers = {
    active: 1,
    newTask: 1,
    completed: 0,
    failed: 0
  }
 const EmployeeStats =useMemo(()=>{

  if (!employeeData || !Array.isArray(employeeData) || employeeData.length === 0) {
            return {
                attendanceCheck: [],
                presentToday: 0,
                absentToday: 0,
                lateToday: 0,
                totalEmployees: 0
            };
  }
    const filteredEmployee = (mem_EmplyeeData ?? []).filter((user) => user?.role === "Employee");
     const filteredEmployee_Length = filteredEmployee.length;
     const Emp_Data = filteredEmployee?.flatMap((item) => item?.rfidIndex ?? []);
    const AttendanceCheck = filteredEmployee.flatMap((item) => item.rfidIndex.map((val) =>val).filter((val)=>val.date===CurrentDay)).map((user)=>user).length;
    const LateToday = filteredEmployee?.flatMap((item) => item.rfidIndex?.filter((val) =>ConvertWithlocaleTime(val.checkinTime) > "9:00:00 AM" && val?.date === CurrentDay) ?? []) ?? [];
   const AbsentToday = filteredEmployee_Length - AttendanceCheck ;
   console.log(LateToday.map((user)=>user));
   console.log(Emp_Data)

       return {Emp_Data,LateToday, AttendanceCheck,filteredEmployee,filteredEmployee_Length,AbsentToday};
      
  }, [employeeData])
 function GetWeekDay(dateString) {
  const safeDate = dateString.includes("T") ? dateString : dateString + "T00:00:00";
  const date = new Date(safeDate);
  if (isNaN(date)) return null;
  return date.toLocaleDateString("en-US", { weekday: "long" });
}
    const {Emp_Data, AttendanceCheck ,LateToday,AbsentToday,filteredEmployee_Length} = EmployeeStats;

      const safeData = Array.isArray(Emp_Data) ? Emp_Data : [];
     const weekdayCounts = safeData.reduce((acc, record) => {
      const weekday = GetWeekDay(record.date);
      acc[weekday] = (acc[weekday] || 0) + 1;
      return acc;
    }, {})
   const chartData = Object.entries(weekdayCounts).map(([day, EmployeePresent]) => ({
  day,
  EmployeePresent
}));

console.log(chartData)
 const chart  = useChart({
    data: chartData,
    series: [
      { name: "Employee1", color: "green" },
       { name: "linux", color: "green" },
    ],
  })


  return (
   <>
   {loading ? (
   <Loading/>
   ):(
    <Box bg="gray.100">
      <Stack > 
        <Flex >
            <SideBar/>
            <Box  px={{ base: 2, md: 5 }} w={{ base: "100%", md: "100%" }}>
                <Box boxShadow="lg" bg="white"  mt={5} rounded="md"  h={{base:"5%",md:"7%"}} p="8"  color="white">  
                  <Flex direction="row" align="center" justify="space-between" flexWrap="wrap" gap={4}>
                      <Flex align="center" gap={2}>
                        <IdCard size={22} color="#000000" strokeWidth={2} />
                        <Text
                          color="black"
                          display={{ base: "block", md: "inline" }}
                          fontSize={{ base: "10px", md: "18px" }}
                          fontWeight={{ base: "medium", md: "medium" }}
                        >
                          IOT BASED RFID<br/>EMPLOYEE MANAGEMENT
                        </Text>
                      </Flex>    
          <Drawer.Root  open={isOpen} onOpenChange={(val) => !val.open && onClose()}>
            <Drawer.Trigger asChild>
              <Box display={{ base: "block", md: "none" }}>
                <Menu color='black' />
              </Box>  
            </Drawer.Trigger>
                  <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                      <Drawer.Content>
                        <Drawer.Header>
                          <Drawer.Title>IOT EMS</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                          <SidebarContent/>
                        </Drawer.Body>
                        
                        <Drawer.CloseTrigger asChild close={onClose}>
                          <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                      </Drawer.Content>
                    </Drawer.Positioner>
                  </Portal>
          </Drawer.Root>
  {/*Buttons */}
  <Flex
    gap={{ base: 1, md: 4 }}
    direction="row"
    flexShrink={0}
    wrap="wrap"
  >
    <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button
          fontSize={{ base: "10px", md: "17px" }}
          size={{ base: "sm", md: "lg" }}
          bg="#2977ec"
          color="white"
          fontWeight={{ base: "normal", md: "semibold" }}
          _hover={{ bg: "#235cb0" }}
        >
          + Add Employee
        </Button>
      </Dialog.Trigger>
       <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                              <Dialog.Content  maxH={{base:"500px" ,md:"650px"}} w={{base:"full",md:"40%"}} overflowY="auto">
                                <Dialog.Header>
                                  <Dialog.Title fontWeight={{base:"medium",md:"semibold"}} fontSize={{base:10, md:17}}>Employee Registration</Dialog.Title>
                                  <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                  </Dialog.CloseTrigger>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <Field.Root invalid={!!errors.fullName} required>
                                        <Field.Label> Full Name</Field.Label>
                                        <Input {...register("fullName" , { required: "First name is required" })} placeholder="Enter Full name" variant="outline"  _/>
                                        <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
                                    </Field.Root> 

                                      <Field.Root invalid={!!errors.Email}>
                                        <Field.Label>  Email <Field.RequiredIndicator /></Field.Label>  
                                        <Input {...register("Email" , { required: "Email name is required" })} placeholder="Enter valid email" borderColor="black.400"
                                              _hover={{ borderColor: "gray.400" }} // Hover state
                                              _focus={{
                                                borderColor: "lime.500",
                                                boxShadow: "0 0 0 1px lime.500",
                                              }}
                                            />
                                      <Field.ErrorText>{errors.Email?.message}</Field.ErrorText>
                                      </Field.Root>
                                          <Field.Root invalid={!!errors.Email}>


                                        <Field.Label>Password<Field.RequiredIndicator /></Field.Label>  
                                        <Input {...register("Password" , { required: "Password is required" })} placeholder="Enter Strong Password" borderColor="black.400"
                                              _hover={{ borderColor: "gray.400" }} // Hover state
                                              _focus={{
                                                borderColor: "lime.500",
                                                boxShadow: "0 0 0 1px lime.500",
                                              }}
                                            />
                                      <Field.ErrorText>{errors.Password?.message}</Field.ErrorText>
                                      </Field.Root>


                                    <Field.Root invalid={!!errors.Dept}>
                                      <Field.Label>Dept </Field.Label>
                                      <Input {...register("Dept", { required: "Dept is required" })} placeholder="Enter Dept" variant="outline"  borderColor="black.400"
                                            _hover={{ borderColor: "gray.400" }} // Hover state
                                              _focus={{
                                                borderColor: "lime.500",
                                                boxShadow: "0 0 0 1px lime.500",
                                              }}
                                              />
                                    </Field.Root> 
                                    <Field.Root invalid={!!errors.Role} >
                                        <Field.Label>  Role <Field.RequiredIndicator /></Field.Label>
                                            <NativeSelect.Root size="sm" width={{base:"inherit",md:"inherit"}}>
                                                    <NativeSelect.Field {...register("Role")} placeholder="Select option" >
                                                      <option value="Employee">Employee</option>
                                                      <option value="Other">Other</option>
                                                    </NativeSelect.Field>
                                                    <NativeSelect.Indicator />
                                                  </NativeSelect.Root>
                                    </Field.Root>
                                    
                                    <Field.Root invalid={!!errors.Role} >
                                        <Field.Label> RFID UID <Field.RequiredIndicator /></Field.Label>
                                      <Input {...register("UID")} placeholder="Enter RFID Card UID" variant="outline" />
                                      <Flex mt={5} direction="row" alignItems="center" gap={2}>
                                          <Info size={20} />
                                          <Text fontSize="md" color="blackAlpha.700" textAlign="center">
                                            Scan RFID card on IOT device Then Enter
                                          </Text>
                                        </Flex>
                                        <RFIDCard/>
                                    </Field.Root>
                                    
                                      <Button type="submit"  fontSize={{base:10, md:17}} mt={2} size={{base:"md",md:"lg"}} width={{base:"full",md:"full"}} fontWeight={{base:"normal",md:"semibold"}} bg="#2760ff" color="white" _hover={{ bg: "#05329a" }}>
                                        Submit
                                        </Button> 
                                    </form>
                                      
                                
                                </Dialog.Body>
                              </Dialog.Content>
                            </Dialog.Positioner>
                          </Portal>
    </Dialog.Root>

    <Button
    // onClick={()=>window.location.reload()}
      fontSize={{ base: "9px", md: "17px" }}
      size={{ base: "sm", md: "lg" }}
      fontWeight={{ base: "normal", md: "semibold" }}
      bg="#108d65"
      color="white"
      _hover={{ bg: "#059669" }}
    >
      Refresh Data
    </Button>
  </Flex>
</Flex>

              </Box>
              <Stack spaceY="6" >
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={8}>
                  
                                  <AttendanceCard title="Total Employees" value={filteredEmployee_Length} change="+12%" color="bg-emerald-500" bg="green.200" text="Registered in the System" icon={<IoMdPeople color= "#199830b3"size={28} />} />
                                  <AttendanceCard  title="Today Rfid Scans" value={AttendanceCheck} change="+12%" bg="green.200" text="Checkedin Today" icon={<FaFingerprint   color= "#199830b3"size={28}/>} />
                                  <AttendanceCard title="Late Today" value={LateToday.length} change="+12%"  bg="green.200" text="Late Today" icon={<Clock  color= "#1fcd3fb3"size={28} />} />
                                  <AttendanceCard title="Absent Today" value={AbsentToday} change="+12%"  bg="green.200" text="Didn't Checked In" icon={<IoMdPeople   color= "#199830b3"size={28}/>} />

                    </SimpleGrid>  

                    {/* chart section   */}

             <Box  px={{ base: 2, md: 5 }} w={{ base: "100%", md: "100%" }}>
                <Box boxShadow="lg" bg="white"  mt={1} rounded="md"  h={{base:"10%",md:"10%"}} p="8"  color="white">
                <Flex direction={{ base: "column", md: "row" }}align={{ base: "start", md: "center" }}gap={4}>
                    <Flex align="center" gap={2}>
                      <Text textStyle={{base:"sm",md:"xl"}} color="black" fontWeight={{base:"medium",md:"semibold"}}>Employee Attendeance </Text>
                  </Flex>
                  </Flex>
                <Container>
                  
                    <Chart.Root maxH="sm" chart={chart}>
                      <LineChart data={chartData}>
                        <CartesianGrid stroke={chart.color("border")} vertical={false} />
                        <XAxis
                          axisLine={false}
                          dataKey="day"  
                          tickFormatter={(value) => value.slice(0, 3)}
                          stroke={chart.color("border")}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tickMargin={50}
                          stroke={chart.color("border")}
                        />
                        <Tooltip
                          animationDuration={100}
                          cursor={false}
                          content={<Chart.Tooltip />}
                        />
                        <Legend content={<Chart.Legend interaction="hover" />} />
                        
                        <Line
                          type="monotone"
                          dataKey="EmployeePresent"
                          stroke={chart.color("green")}
                          strokeWidth={2}
                          fill={chart.color("bg")}
                        />
                      </LineChart>
                    </Chart.Root>
                 </Container>

                  </Box>
                  </Box>                
                </Stack>
             <Box mt={{base:3,md:4 }}>
             <EmployeeInfoTable />

             </Box>

            </Box>  

        </Flex>
          
        
      </Stack>
    </Box>
)}
  </>
)}

const ConvertWithlocaleTime =(time24)=>{
     const [hours,minutes,secs]= time24.split(":").map(Number);
     const date = new Date();
     date.setHours(hours,minutes,secs);
     return date.toLocaleTimeString("en-us",{
      hour:"numeric",
      minute:"2-digit",
      second:"2-digit",
      hour12:true,
     })

}


export default Attendance
