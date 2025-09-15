import { VStack ,Table, Stack,CloseButton,Portal,Box, useDisclosure, Flex,Text,Center,SimpleGrid, Button,Drawer} from '@chakra-ui/react';
import { Bell, Menu } from "lucide-react";
import SidebarContent from './SidebarContent';
import React, { useEffect, useMemo, useState } from "react";
import SideBar from "./Sidebar";
const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
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

             <Center h="100vh" bg="white" rounded="md" mt={{ base: 3, md: 4 }}>
  <Text 
    fontSize={{ base: "30px", md: "23px" }}
    textAlign="center"
    p={3}
  >
    This Page is Under Development
  </Text>
</Center>
  </Box>
  </Flex>
  
  </Stack>
  </Box>
  

    </>
  )
}

export default Settings