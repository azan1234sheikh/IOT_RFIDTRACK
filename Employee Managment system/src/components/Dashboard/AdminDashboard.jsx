import React,{useContext} from 'react';
import Header from './../UI/Header';
// import CreateTask from '../UI/CreateTask';
import Dashboard from '../UI/Dashboard';
import { Box, Flex, HStack, Stack,VStack } from '@chakra-ui/react';
import { Group } from 'lucide-react';
import { useDisclosure } from "@chakra-ui/react";
import AuthProvider,{AuthContext} from '../../context/AuthProvider'
import SideBar from '../UI/Sidebar';
const AdminDashboard = () => {
  
  return (
    <>
   
    <Box>
      <Stack direction={"row"}>
        <Box mb="6%" w="full">
          <Dashboard />{/* < changeUser={changeUser}  Propdata={data} />  */}
        </Box>
      </Stack>
     <Box shadow="md"  ml="18%" w="80%">
     </Box>
    </Box >
    </>
  );
};

export default AdminDashboard;