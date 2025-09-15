import React,{useNavigate} from 'react'
import { Box, VStack ,Table, Stack,CloseButton,Portal, useDisclosure, Flex,Text, Center,SimpleGrid, Button,Drawer} from '@chakra-ui/react';
import SideBar from './Sidebar';
import EmployeesDataHook from '../../context/EmployeesDataHook';
import EmployeeCard from './EmployeeCard';
import { Bell, Menu } from "lucide-react";
import SidebarContent from './SidebarContent';
const Employeeinfo = () => {
const { isOpen, onOpen, onClose } = useDisclosure();
  const {loading,employeeData,employeeroot} = EmployeesDataHook();
       const filteredEmployee = (employeeData ?? []).filter((user) => user?.role === "Employee");
         console.log(filteredEmployee);
  return (
    <>
<Box bg="gray.100">
    <Stack>
    <Flex>
      <SideBar/>
       <Box  px={{ base: 2, md: 5 }} w={{ base: "100%", md: "100%" }}>
            <Box
  boxShadow="lg"
  bg="white"
  mt={5}
  rounded="md"
  p={5}
  color="black"
>
  <Flex
    direction={{ base: "row", md: "row" }}
    align={{ base: "flex-start", md: "center" }}
    justify="space-between"
    gap={4}
  >
    <Text
      
      display={{ base: "block", md: "inline" }}
      fontSize={{ base: "20px", md: "23px" }}
      fontWeight={{ base: "medium", md: "medium" }}
    >
      Employee Info
    </Text>
    <Drawer.Root  open={isOpen} onOpenChange={(val) => !val.open && onClose()}>
            <Drawer.Trigger asChild>
              <Box display={{ base: "block", md: "none" }}>
                <Menu />
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
  </Flex>

</Box>


             <Box pt="2">
              <SimpleGrid
                                  columns={{ base: 1, md: 2, lg: 3 }}
                                  gap="20px"
                                  mb={8}
                                  mt={6}
                                >
                                          {filteredEmployee.map((employee, index) => (
                              <EmployeeCard key={index} data={employee} />
                            ))}

             </SimpleGrid>
             </Box>
      </Box>
    </Flex>
  </Stack>
</Box>
    </>
  )
}
export default Employeeinfo