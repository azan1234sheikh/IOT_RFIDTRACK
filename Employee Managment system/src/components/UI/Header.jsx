// 
import {
  Button,
  IconButton,
  Box,
  Flex,
  Text,
  useDisclosure,
  Popover,
  Portal,
  Drawer,
  CloseButton,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import { Bell, Menu } from "lucide-react";
import { ref, get } from "firebase/database";
import { Auth, RTdatabase } from "../firebase";
import { toast } from "react-toastify";
import React, { useState } from "react";
import SidebarContent from "./SidebarContent"

// import SidebarContent from "././/"
const Header = ({deviceData, Propdata, changeUser,CurrentTime}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await Auth.signOut();
      changeUser("");
      navigate("/login");
      return
    } catch (error) {
      toast.error("Error logging out");
    }
  };
  
  return (
    <Flex px={{ base: 2, md: 6 }} mb={{base:4,md:3}} py={{ base: 2, md: 5 }}
      align="center"
       rounded="md"
      justify="space-between"
      // wrap="wrap"
       bg="white"
      // boxShadow="sm"
    >
      <Box  >
        <Text fontSize={{ base: "md", md: "2xl" }}  fontWeight="bold">
          👋 Welcome{" "}
          <Text as="span" fontWeight="semibold" color="gray.700">
            {Propdata ? Propdata.firstName : "Admin"}
          </Text>
        </Text>
      </Box>

      <Flex align="center" gap={4} mt={{ base: 4, md: 0 }}>
       <Box display={{ base: "block", md: "none" }}>
      </Box>

      <Text fontWeight={"bold"}>Current Time:</Text>
            <Text>{CurrentTime}</Text>

   {/* For Mobile Screen Drawer */}
    
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
         

        {/* Notification Bell */}
        <Popover.Root positioning={{ offset: { mainAxis: 12 } }}>
          <Popover.Trigger asChild>
            <Button variant="ghost" p={2}>
              <Bell />
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Body>
                  <Text fontWeight="medium">{deviceData?"Esp8266 Online":"No new notifications"}</Text>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>

        {/* Logout Button */}
        <Button   px={{ base: 2, md: 5 }}
      py={{ base: 2, md: 5 }} className="bg-emerald-400 text-lg sm:font-small md:font-medium text-white hover:bg-emerald-500  rounded-xl" size="sm" onClick={Logout}>
          Log Out
        </Button>
        
      </Flex>
    </Flex>
  );
};

export default Header