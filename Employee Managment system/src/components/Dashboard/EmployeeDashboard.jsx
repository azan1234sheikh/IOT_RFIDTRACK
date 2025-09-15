import React, { useContext,useMemo } from "react";
import Header from "../UI/Header";
import SideBar from "../UI/Sidebar";
import {
  Grid,
  GridItem,
  Box,
  Stack,
  Text,
  Flex,
  VStack,
  SimpleGrid,
  HStack,
  Button
} from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthProvider";
import NewTask from "../UI/NewTask";
import { Heading } from "lucide-react";

const EmployeeDashboard = () => {
    const CurrentDay = useMemo(() => new Date().toISOString().split("T")[0], []);
    
  const { user } = useContext(AuthContext);
  const Currenttask =user.task;
     console.log(Currenttask)
  const filterTask = user.task.map((user)=>user).filter((val)=>val.TaskTitle==='Welcome Task');
  console.log(filterTask[0]?.Date);
    const rfidArray = Object.entries(user.rfidIndex).map(([key, value]) => ({
          firebaseKey: key,
          ...value,
        }));
       const LateToday = rfidArray.filter((user)=>user.Date===CurrentDay);
   const activeTasks = user.task.filter(task => task.Active === true).length;

   const Employee_Att = rfidArray.filter((user)=>user.checkinTime==="9:00:00 AM");
    //  console.log(rfidArray.length -Employee_Att  );
  //  console.log(rfidArray.length);
   const Att_Percentage= (rfidArray.length/10)*100;
   console.log(Att_Percentage)
  return (
    <Stack bg="gray.100" direction="row" minH="screen">
      {/* Sidebar */}
      <Box display={{ base: "none", md: "block" }}>
        <SideBar />
      </Box>
      <Box flex="1" minW={0} mt={{ base: 4, md: 7  }} px={{ base: 2, md: 6 }}>
        <Header Propdata={user} />

        <Grid
          mt={6}
          templateColumns={{ base: "1fr", md: "300px 1fr" }}
          gap={6}
        >
          <GridItem>
            <NewTask />
          </GridItem>

          <GridItem>
            <VStack spacing={2} align="stretch">
              <Box bg="white" shadow="md" rounded="md" p={6}>
                <Text fontWeight="bold" fontSize="2xl" mb={4}>
                  RFID Information
                </Text>
                <Flex gap={4} wrap="wrap">
                  <Box
                  className="bg-emerald-600"
                    flex="1"
                    minW="180px"
                    h="150px"
                    shadow="md"
                    borderRadius="md"
                    px={10}
                  >
                    <Text alignItems='center' fontSize='md' pt={2} color='white'>RFID Card</Text>
                    <Text alignItems='center' fontSize='3xl' mt={2} color='white'>{user?.Id}</Text>
                    <Flex>
                    <Text alignItems='center' fontSize='md' mt={2} color='white'>{user?.firstName} | </Text>
                    <Text alignItems='center' fontSize='md' mt={2} color='white'> {user?.department}</Text>
                    </Flex>
                    <Flex gap={2}>

                    <Text alignItems='center' fontSize='md' mt={2} color='white'> Issue Date:</Text>

                    <Text alignItems='center' fontSize='xl' mt={1} color='white'> {filterTask[0]?.Date}</Text>
                    </Flex>

                 </Box>
                </Flex>
              </Box>

              <Box bg="white" shadow="md" rounded="md" mt={7} p={9}>
                <Text fontWeight="bold" fontSize="lg" mb={2}>
                  Attendance History
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px" mt={8}>
                    <Box w="full" h="100px" bg="gray.100" borderRadius="md" >
                      <Stack className="pt-3 items-center">
                         <Text alignItems='center' fontSize='xl' fontWeight='bold' mt={1} color='black'>{Att_Percentage}%</Text>
                         <Text alignItems='center' fontSize='md' mt={1} color='black'>Attendance Rate</Text>
                      </Stack>
                                        
                    </Box>
                     <Box w="full" h="100px" bg="gray.100" borderRadius="md" >
                      <Stack className="pt-3 items-center">
                         <Text alignItems='center' fontSize='xl' fontWeight='bold' mt={1} color='black'>{rfidArray.length}</Text>
                         <Text alignItems='center' fontSize='md' mt={1} color='black'>Total Scans</Text>
                      </Stack>
                                          

                    </Box>
                      <Box w="full" h="100px" bg="gray.100" borderRadius="md" >
                      <Stack className="pt-3 items-center">
                         <Text alignItems='center' fontSize='xl' fontWeight='bold' mt={1} color='black'>{rfidArray.length -Employee_Att}</Text>
                         <Text alignItems='center' fontSize='md' mt={1} color='black'>Late Arrivals</Text>
                      </Stack>
                    </Box>
                         <Box w="full" h="100px" bg="gray.100" borderRadius="md" >
                      <Stack className="pt-3 items-center">
                         <Text alignItems='center' fontSize='xl' fontWeight='bold' mt={1} color='black'>{LateToday.length}</Text>
                         <Text alignItems='center' fontSize='md' mt={1} color='black'>Absent Today</Text>
                      </Stack>
                                          

                    </Box>
                </SimpleGrid>
                
              </Box>  
              
            </VStack>
            
          </GridItem>
        </Grid>
         <Box bg="white" shadow="md" rounded="md"  p={6}>
  <Text fontWeight="bold" fontSize="xl" mb={6} color="gray.800">
    Tasks Information
  </Text>

  <SimpleGrid gap={4} columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
<Box
  bg="gray.50"
  shadow="sm"
  borderRadius="lg"
  p={6}
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  minH="160px"
>
  <Text fontSize="md" fontWeight="semibold" color="gray.700">
    Active Tasks
  </Text>
  <Text fontSize="3xl" fontWeight="bold" color="green.600" mt={2}>
    {activeTasks}
  </Text>
</Box>


    {/* Render Each Task */}
    {user.task.map((item, index) => (
      <Box
        key={index}
        bg="gray.50"
        shadow="sm"
        borderRadius="lg"
        p={5}
        
      >
        <Text
          fontSize="md"
          fontWeight="semibold"
          color="gray.700"
          mb={3}
          textAlign="center"
        >
          Task Info
        </Text>

        <Stack spacing={3}>
          <HStack justify="space-between">
            <Text fontSize="sm" fontWeight="medium" color="gray.600">
              Title:
            </Text>
            <Text fontSize="sm" color="gray.800">
              {item.TaskTitle}
            </Text>
          </HStack>

          <HStack justify="space-between">
            <Text fontSize="sm" fontWeight="medium" color="gray.600">
              Assign To:
            </Text>
            <Text fontSize="sm" color="gray.800">
              {item.AssignTo}
            </Text>
          </HStack>

          <HStack justify="space-between">
            <Text fontSize="sm" fontWeight="medium" color="gray.600">
              Date:
            </Text>
            <Text fontSize="sm" color="gray.800">
              {item.Date}
            </Text>
          </HStack>
            <HStack justify="space-between">
            <Text fontSize="sm" fontWeight="medium" color="gray.600">
              Description:
            </Text>
            <Text fontSize="sm" color="gray.800">
              {item.taskDescription}
            </Text>
          </HStack>
          <Flex mt="2" justifyContent="space-between">
             <Box rounded="md"p="1"  bg={item.completed?"#108d65":"#cc0404"}>
              {item.completed?"Completed":"Pending"}
            </Box>
            <Box rounded="md"p="1"  bg={item.failed?"#cc0404":"#108d65"}>
              {item.failed?"Failed":"Active"}
            </Box>
            <Button disabled={item.failed} bg={"#108d65"} rounded="md"p="3">
                Submit
            </Button>
          </Flex>
        </Stack>
      </Box>
    ))}
  </SimpleGrid>
</Box>

      </Box>
    </Stack>
  );
};

export default EmployeeDashboard;
