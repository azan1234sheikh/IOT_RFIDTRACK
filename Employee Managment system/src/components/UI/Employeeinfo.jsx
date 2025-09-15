import React from 'react'
import { Box, VStack ,Table, Stack, Flex,Text, Center,SimpleGrid} from '@chakra-ui/react';
import SideBar from './Sidebar';
import EmployeesDataHook from '../../context/EmployeesDataHook';
import EmployeeCard from './EmployeeCard';

const Employeeinfo = () => {

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
    direction={{ base: "column", md: "row" }}
    align={{ base: "flex-start", md: "center" }}
    justify="space-between"
    gap={4}
  >
    <Text
      
      display={{ base: "block", md: "inline" }}
      fontSize={{ base: "10px", md: "23px" }}
      fontWeight={{ base: "medium", md: "medium" }}
    >
      Employee Info
    </Text>
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