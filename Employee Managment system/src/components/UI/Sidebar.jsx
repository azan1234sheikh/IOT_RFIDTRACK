import React,{useState} from 'react'
// import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Image, Text, Flex, Box, Container,Avatar,VStack,Icon,Button,useDisclosure,IconButton,HStack,Kbd,Portal,CloseButton,Drawer} from "@chakra-ui/react";
import { Menu, X } from "lucide-react"
import { useNavigate } from 'react-router-dom'; 
import NavItem from "./NavItem"
import CreateTask from './CreateTask';
// import Attendance from './Attendance';
import AllTask from './Employeeinfo';
import SidebarContent from "./SidebarContent"
import {
  Home,
  BarChart2,
  Users,
  FileText,
  MessageSquare,
  HelpCircle,
  Settings,
  LogOut,
  Search,
  Bell, 
  MapPin,
  CheckSquare,
} from "lucide-react"






const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    //  const { isOpen, onOpen, onClose } = useDisclosure();

  const [open, setOpen] = useState(false)

  const emerald500 = "#10b981"
  const emerald600 = "#059669"
  const emerald50 = "#ECFDF5"
  const blue500 = "#3b82f6"
  const amber500 = "#f59e0b"
  const purple500 = "#8b5cf6"
  const red500 = "#ef4444"

  const bgColor = "gray.50"
  const cardBg = "white"

   
  return (
    <>
    {/* <Box 
      
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 50 } }}
      pt={{ base: "20px", sm: "30px" }}
      display={{ base: "none", md: "block" }}
      gap="50px"
      flexDirection={{base:"row",lg:"column"}}
       bgColor=" #7b5f5f;"
      h="100vh"
      top="0px"
      overflow="auto"
      px="12px"
      sx={{ position: "sticky !important" }}
    >
      <Image src="/img_header_logo.png" alt="Sidebarlogo" h="42px" w="122px" fit="contain" />
      <Box
        menuItemStyles={{
          button: {
            padding: "14px 14px 14px 18px",
            gap: "20px",
            bgColor:"#2d1515f",
            fontWeight: 400,
            fontSize: "14px",
            borderRadius: "10px",
           
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "20px" } }}
        as={Menu}
        pl="6px"
        display="flex"
        alignSelf="stretch"
        flexDirection={{base:"",lg:"column"}}
        w="100%"
      >
        <MenuItem   icon={<Image src="/element-4.png" alt="Grid" h="18px" w="18px" />}>Tasks</MenuItem>
        <SubMenu
          icon={<Image src="/book.png" alt="User" h="18px" w="18px" />}
          label="Courses"
        >
          <MenuItem  >Explore Courses</MenuItem>
          <MenuItem  >My Courses</MenuItem>
          <MenuItem  >Create Courses</MenuItem>
        </SubMenu>
        <MenuItem  icon={<Image src="/user-octagon.png" alt="Lock" h="18px" w="18px" />}>
          Mentors
        </MenuItem>
        <MenuItem onClick={handleNavigate} icon={<Image src="/message.svg" alt="User" h="18px" w="18px" />}>
          Attendence
        </MenuItem>
        <MenuItem icon={<Image src="/setting-4.png" alt="Television" h="18px" w="18px" />}>Create Tasks</MenuItem>
      </Box>
    </Box> */}
        {/* <div   rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 0 } }}>
    <Sidebar style={{height:"100%"}} backgroundColor="#fdfdfd"> */}

      {/* <div className='mt-7' style={{ display:'flex',marginLeft:'30px'}}>
        <Cpu className="h-7 w-7 mr-2" />
        <span className="font-bold">IoT EMS</span>         
      </div>
      <Menu className='mt-4'>
        <Menu>
        <MenuItem onClick={dashboardbtn}  icon={<Image src="/element-4.png" alt="Grid" h="18px" w="18px" />}>Dashboard</MenuItem>
        <MenuItem onClick={Createtask}  icon={<Image src="/element-4.png" alt="Grid" h="18px" w="18px" />}>Create Task </MenuItem>
        <MenuItem  onClick={handleTasks}  icon={<Image src="/element-4.png" alt="Grid" h="18px" w="18px" />}>View Tasks</MenuItem> 
        <MenuItem  onClick={handleNavigate}  icon={<Image src="/element-4.png" alt="Grid" h="18px" w="18px" />}>Attendence</MenuItem>
        </Menu>
      </Menu>
    </Sidebar>
  </div> */} 


  <Flex display={{ base: "none", md: "block" }}  h="full" bg={bgColor}>
<Box  w="64" bg={cardBg} boxShadow="md" display="flex" minH="200vh" flexDirection="column" zIndex="10">
           
        <Box p="6" borderBottom="1px"  borderColor="gray.100">
          <Flex align="center" gap="3">
            {/* <Avatar bg={emerald600} color="white" size="md" name="User" /> */}
            <Box>
              {/* <Text fontWeight="semibold"></Text> */}
               <Text color={emerald600} className="font-bold">IoT EMS</Text>
            </Box>
          </Flex>
        </Box>

       <SidebarContent/>
      </Box>
  </Flex>    
    </>
  )
}

export default SideBar