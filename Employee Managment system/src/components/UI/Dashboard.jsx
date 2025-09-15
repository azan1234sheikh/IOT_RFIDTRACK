import {Stack, Box, Card, Heading, Table, Flex, SimpleGrid, Text, Button} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { RTdatabase } from '../../components/firebase'
import {
  Users,
  FileText,
  MapPin,
  UsersRound,
} from "lucide-react";
import SideBar from "./Sidebar";
import Header from "./Header";
import MetricCard from "./MetricCard";
import EmployeesDataHook from "../../context/EmployeesDataHook";
import Loading from "./Loading";
import { colors } from "../../Colors";
import { toast } from "react-toastify";
import { ref,update } from "firebase/database";
import BatteryGauge from 'react-battery-gauge'
import { IoMdPeople } from "react-icons/io";
import { FaFingerprint,FaTasks  } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";

const Dashboard = () => {
  const [CurrentTime, setCurrentTime] = useState();
  const { loading, employeeData,deviceData } = EmployeesDataHook();
  console.log(deviceData)
  const filteredEmployee = (employeeData ?? []).filter((user) => user?.role === "Employee");
  const ActiveTask = filteredEmployee.map((val)=>val?.task).flatMap((user)=>user).filter((user)=>user.Active===true);
  
  console.log(ActiveTask)
    const Completed_Task = filteredEmployee.map((val)=>val.task).flatMap((user)=>user).filter((val)=>val.completed===true)
  
  console.log(Completed_Task)

  const today = useMemo(() => new Date(), []);   

  const CurrentDay = useMemo(() => new Date().toISOString().split("T")[0], []);
  //  console.log(CurrentDay)
  const yesterday = new Date(CurrentDay);
  yesterday.setDate(today.getDate() - 1)
  const pastDay = yesterday.toISOString().split("T")[0];

   const Employee_Att = filteredEmployee.map((emp)=>emp?.rfidIndex).flatMap((user)=>user).filter((user)=>user.date===CurrentDay);
     console.log(Employee_Att);
    
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const Realtime = new Intl.DateTimeFormat("en-PK", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(Realtime.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
   
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const Update =()=>{
       if(deviceData){
        toast.success("device Online")
        }else(
        toast.success("device Offline")
        )
    }
    Update();
  }, [deviceData])
  

  const btnfn = async (uid, taskKey) => {
  try {
    const taskRef = ref(RTdatabase, `/${uid}/task/${taskKey}`);

    // update fields
    await update(taskRef, {
      Active: false,       
      completed: true,   
    });

    toast.success("Task marked as completed!");
  } catch (error) {
    console.error("Error accepting task:", error);
    toast.error("Failed to update task");
  }
};

 const Reject_fn =async(uid,taskkey)=>{
  try{
   const RejectTask_ref = (ref(RTdatabase,`/${uid}/task/${taskkey}`));
   await update(RejectTask_ref,{
     Active:true,
     completed:false,
     failed:true,
   })
  }catch(error){

  }
 }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box bg="gray.100">
          <Stack>
            <Flex>
              <SideBar />
              <Box  px={{ base: 2, md: 3 }}  flex="1" minW={0}>
                    <Header deviceData={deviceData} CurrentTime={CurrentTime} />
                   <Box 
                        boxShadow="lg" 
                        bg="white"  
                        mt={5} 
                        rounded="md"   
                        p={2}  
                      >
                        <Flex 
                          direction={{ base: "column", md: "row" }} 
                          gap={3} 
                          wrap="wrap"
                        >
                          <Box 
                            boxShadow="lg" 
                            bg="white" 
                            border="1px solid" 
                            borderColor="gray.300"
                            rounded="xl" 
                            p={4}  
                            flex="1"
                          >
                            <Flex  align="center" justify="space-between">
                              <Text fontWeight="semibold" color="black">
                                Device Charge
                              </Text>
                              <BatteryGauge  animated={true} value={40} size={50} />
                            </Flex>
                          </Box>

                          <Box 
                            boxShadow="lg"  
                            bg="white" 
                            border="1px solid" 
                            borderColor="gray.300"
                            rounded="xl" 
                            p={4}  
                            flex="1"
                            minW={{ base: "100%", md: "200px" }}
                          >
                       <Flex justify="space-between">
                              <Text fontWeight="semibold" color="black">
                                Device Active
                              </Text>

                              <Flex align="center" gap={1}>
                                <Box
                                  w="20px"
                                  h="20px"
                                  bg={deviceData?"green.600":"red.500"}
                                  rounded="full"
                                  _hover={{ bg: "green.700" }}
                                />
                                <Text fontWeight="semibold" color="black">{deviceData?"Online":"Offline"}
                                </Text>
                              </Flex>
                            </Flex>


                          </Box>

                          {/* Device ID */}
                          <Box 
                            boxShadow="lg" 
                            bg="white" 
                            border="1px solid" 
                            borderColor="gray.300"
                            rounded="xl" 
                            p={4}  
                            flex="1"
                            minW={{ base: "100%", md: "200px" }}
                          >
                            <Flex  align="center" justify="space-between">

                            <Text fontWeight="semibold" color="black">
                              Firmware Version:
                            </Text>
                           <Text>
                            {"1.1.2"}
                           </Text>
                            </Flex>
                          </Box>

                          {/* Device */}
                          <Box 
                            boxShadow="lg" 
                            bg="white" 
                            border="1px solid" 
                            borderColor="gray.300"
                            rounded="xl" 
                            p={4}  
                            flex="1"
                            minW={{ base: "100%", md: "200px" }}
                          >
                          <Flex  align="center" justify="space-between">

                            <Text fontWeight="semibold" color="black">
                              Device
                            </Text>
                            <Text fontWeight="" color="black">
                              Wemos D1 Esp8266
                            </Text>
                            </Flex>
                          </Box>
  </Flex>
                    </Box>

                  {/* Metrics */}
                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4 }}
                    gap="20px"
                    mb={8}
                    mt={6}
                  >
                    <MetricCard
                      title="Total Employees"
                      value={filteredEmployee?.length}
                      change="+12%"
                       icon={<IoMdPeople color= "#199830b3"size={25}/>}
                      Today={"Maximum"}
                      max ="10"
                      bg="green.200"
                    />
                    <MetricCard
                      title="Attendance"
                      value={Employee_Att.length}
                      change="+5%"
                      icon={<FaFingerprint color= "#199830b3"size={25}/>}
                      bg="green.200"
                      Today={"Today"}
                      max ="22"

                    />
                    <MetricCard
                      title="Active Tasks"
                      value={ActiveTask.length}
                      change="+8%"
                      Today={"Maximum"}
                      bg="green.200"
                      icon={<FaTasks  color= "#199830b3"size={25}/>}

                      max ="12"
                    />
                    <MetricCard
                      title="Completed Tasks"
                      value={Completed_Task.length}
                      change="+1%"
                       Today={"Assigned"}
                       bg="green.200"
                      icon={<MdOutlineAddTask color= "#199830b3"size={25}/>}
                       max ={ActiveTask.length}

                    />
                  </SimpleGrid>

                  <Card.Root className="overflow-hidden border-none shadow-lg mt-0">
                    <Card.Body className="p-3">
                      
                          <div className="flex justify-between items-end ">
                            <div className="flex justify-end gap:4 md:gap-40">
                              <Heading
                                fontWeight="semibold" size={{ base: "md", md: "xl" }}

                              >
                                Recent Employee Activity
                              </Heading>
                              <Text display={{ base: "flex", md: "flex" }}>
                                 From Past Day To Today
                              </Text>
                              <UsersRound className={"h-5 w-5 "} />
                            </div>
                          </div>
                              <Table.ScrollArea borderWidth="1px"   maxW={{ base: "100%", md: "none" }}>
                          <Table.Root size="sm" variant="outline">
                            <Table.ColumnGroup>
                              <Table.Column  />
                              <Table.Column  />
                              <Table.Column />
                            </Table.ColumnGroup>
                            <Table.Header>
                              <Table.Row>
                                <Table.ColumnHeader>
                                  IOT Device ID
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  RFID UID
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Date
                                </Table.ColumnHeader>
                               
                                <Table.ColumnHeader>
                                  Checkin Time
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Checkout Time
                                </Table.ColumnHeader>
                              </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                 

                              {filteredEmployee.flatMap((item) => item.rfidIndex.filter((val)=>val.date=== CurrentDay || val.date=== pastDay)).map((user)=>(
                                   <Table.Row key={user.firebaseKey}>
                                    <Table.Cell>{user.DeviceId}</Table.Cell>
                                    <Table.Cell>{user.uid}</Table.Cell>
                                    <Table.Cell>{user.date}</Table.Cell>
                                    <Table.Cell>{user.checkinTime}</Table.Cell>
                                    <Table.Cell>{user.checkoutTime}</Table.Cell>
                                  </Table.Row>
                              ))}
                                
                              
                            </Table.Body>
                          </Table.Root>
                          </Table.ScrollArea>
                       
                    </Card.Body>
                  </Card.Root>
                  <Box mt={5}>
                    <Card.Root className="overflow-hidden border-none shadow-lg mt-0">
                      <Card.Body className="p-3">
                      
                            <div className="flex justify-between items-center ">
                              <div className="flex items-center gap-2">
                                <Heading
                                  fontWeight="semibold"
                                  size="3xl"
                                >
                                  Assigned Tasks Summary
                                </Heading>
                              </div>
                            </div>
                                 <Table.ScrollArea borderWidth="1px" maxW={{ base: "100%", md: "none" }} >

                            <Table.Root size="sm" variant="outline">
                            <Table.ColumnGroup>
                              <Table.Column htmlWidth="0%"   width="150px" />
                              <Table.Column htmlWidth="0%"  width="150px"  />
                              <Table.Column />
                            </Table.ColumnGroup>
                            <Table.Header>
                              <Table.Row>
                                <Table.ColumnHeader>
                                  Task Title
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Assigned To
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Category
                                </Table.ColumnHeader>
                               
                                <Table.ColumnHeader>
                                  Task Date
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Task Description
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Task Active
                                </Table.ColumnHeader>
                                   <Table.ColumnHeader>
                                  Task Completed
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                  Task Failed
                                </Table.ColumnHeader>
                                <Table.ColumnHeader>
                                   Actions
                                </Table.ColumnHeader>
                                 <Table.ColumnHeader>
                                  Actions 
                                </Table.ColumnHeader>
                                
                              </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                 

                             {/* {filteredEmployee.map((id)=>id?.task).flatMap((user)=>user).filter((user)=>user.Active===true).map((val,key)=>(
                                   <Table.Row key={key}>
                                    <Table.Cell>{val.TaskTitle}</Table.Cell>
                                    <Table.Cell>{val.AssignTo}</Table.Cell>
                                    <Table.Cell>{val.category}</Table.Cell>
                                    <Table.Cell>{val.Date}</Table.Cell>
                                    <Table.Cell>{val.taskDescription}</Table.Cell>
                                     <Table.Cell>{val.Active?"Active":"Expired"}</Table.Cell>
                                    <Table.Cell>{val.completed?"Yes":"Pending"}</Table.Cell>
                                    <Table.Cell> 
                                      <Button
                                      onClick={()=>btnfn(key)}
                                      isLoading={loading}
                                      // data={key}
                                        type="submit"
                                                        w="full"
                                                        bg={colors.emerald600}
                                                        color="white"
                                                        size="lg"
                                                        borderRadius="half"
                                                        _hover={{ bg: colors.emerald700, transform: "translateY(-2px)" }}
                                                        _active={{ bg: colors.emerald700 }}
                                                        boxShadow={`0 4px 12px ${colors.emerald200}`}
                                                        transition="all 0.2s"
                                                        mt={4}                
                                    >Accept</Button></Table.Cell>

                                  </Table.Row>
                              ))}  
                                */}
                             {filteredEmployee.map((emp) =>
                                      Object.entries(emp.task || {}).map(([taskKey, task]) => (
                                        <Table.Row key={taskKey}>
                                          <Table.Cell>{task.TaskTitle}</Table.Cell>
                                          <Table.Cell>{task.AssignTo}</Table.Cell>
                                          <Table.Cell>{task.category}</Table.Cell>
                                          <Table.Cell>{task.Date}</Table.Cell>
                                          <Table.Cell>{task.taskDescription}</Table.Cell>
                                          <Table.Cell>{task.Active ? "Active" : "Expired"}</Table.Cell>
                                          <Table.Cell>{task.completed ? "Yes" : "Pending"}</Table.Cell>
                                          <Table.Cell>{task.failed ? "Failed" : "Not Failed"}</Table.Cell>

                                          <Table.Cell>
                                            <Button
                                            disabled={task.failed || task.completed}
                                              onClick={() => btnfn(emp.uid, taskKey)}
                                              w="full"
                                              bg={colors.emerald600}
                                              color="white"
                                              size="lg"
                                              borderRadius="half"
                                              _hover={{ bg: colors.emerald700, transform: "translateY(-2px)" }}
                                              _active={{ bg: colors.emerald700 }}
                                              boxShadow={`0 4px 12px ${colors.emerald200}`}
                                            >
                                              Accept
                                            </Button>
                                          </Table.Cell>
                                          <Table.Cell>
                                            <Button
                                               disabled={task.completed}
                                              onClick={() => Reject_fn(emp.uid,taskKey)}
                                              w="full"
                                              bg={colors.Red}
                                              color="white"
                                              size="lg"
                                              borderRadius="half"
                                              _hover={{ bg: colors.hover_Red, transform: "translateY(-2px)" }}
                                              _active={{ bg: colors.hover_Red }}
                                              boxShadow={`0 4px 12px ${colors.emerald200}`}
                                            >
                                              Reject
                                            </Button>
                                          </Table.Cell>
                                         
                                        </Table.Row>
                                      ))
)}

                            </Table.Body>
                          </Table.Root>
                          </Table.ScrollArea>
                         
                      </Card.Body>
                    </Card.Root>
                  </Box>
              </Box>
            </Flex>
          </Stack>
        </Box>
      )}
    </>
  );
};
 
export default Dashboard;
