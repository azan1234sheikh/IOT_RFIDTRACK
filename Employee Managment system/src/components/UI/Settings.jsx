import { VStack ,Table, Stack,CloseButton,HStack,Switch,Image ,Portal,Box,Badge, useDisclosure, Flex,Text,Center,SimpleGrid, Button,Drawer} from '@chakra-ui/react';
import { Bell, Menu } from "lucide-react";
import SidebarContent from './SidebarContent';
import React, { useEffect, useMemo, useState } from "react";
import SideBar from "./Sidebar";
import { toast } from 'react-toastify';
import EmployeesDataHook from '../../context/EmployeesDataHook';
const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checked, setChecked] = useState(false);
 
    const { loading, employeeData,deviceData } = EmployeesDataHook();
    console.log(deviceData)
  return (
    <>
    <Box bg="gray.100" >
    <Stack>
    <Flex>
      <SideBar/>
       <Box px={{ base: 2, md: 5 }} w={{ base: "100%", md: "100%" }}>
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
      Settings
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
<Box p={7} h="100vh" bg="white" rounded="md" mt={{ base: 3, md: 4 }}>
  <Box
      bg="white"
      w={{ base: "95%", md: "80%", lg: "50%" }}
      rounded="2xl"
      shadow="xl"
      p={6}
      mx="auto"
      border="1px solid"
      borderColor="gray.200"
    >
      {/* Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "xl", md: "lg" }}
          color="gray.800"
        >
          IoT Device Info
        </Text>
        <HStack spacing={3}>
          <Text fontSize="sm" color="gray.600">
            {checked ? "Powered On" : "Powered Off"}
          </Text>
          <Switch.Root  checked={checked}
            onCheckedChange={(e) => setChecked(e.checked)

            } size={'md'}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        </HStack>
      </Flex>


      <VStack align="start" spacing={4}>
        {/* Online / Offline Indicator */}
        <Flex align="center" gap={2}>
          <Box
            w="16px"
            h="16px"
            bg={deviceData ? "green.500" : "red.500"}
            rounded="full"
          />
          <Text fontWeight="semibold" color="gray.700">
            {deviceData ? "Online" : "Offline"}
          </Text>
        </Flex>
          <Center>
                <Image  
                  w={{ base: "40%", md: "30%", lg: "50%" }} 
                  objectFit="contain"
                  borderRadius="lg"
                  src="./hardware (1).png"
                />
              </Center>
        <Flex justify="space-between" w="full" align="center">
          <Text fontWeight="semibold" color="gray.600">
            Device Model
          </Text>
          <Badge colorScheme="purple" px={3} py={1} rounded="md">
            Wemos D1 ESP8266
          </Badge>
        </Flex>
         <Flex justify="space-between" w="full" align="center">
          <Text fontWeight="semibold" color="gray.600">
             Location 
          </Text>
          <Badge colorScheme="purple" px={3} py={1} rounded="md">
            Main Entrance Office
          </Badge>
        </Flex>
        <Flex justify="space-between" w="full" align="center">
          <Text fontWeight="semibold" color="gray.600">
            Device ID
          </Text>
          <Badge colorScheme="purple" px={3} py={1} rounded="md">
            75D993
          </Badge>
        </Flex>
      </VStack>
    </Box>
</Box>
  
  </Box>
  </Flex>
  
  </Stack>
  </Box>
  

    </>
  )
}

export default Settings