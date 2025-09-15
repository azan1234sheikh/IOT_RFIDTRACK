 import { Image, Text, Flex, Box, Container,Avatar,VStack,Icon,Button,useDisclosure,IconButton,HStack,Kbd,Portal,CloseButton,Drawer} from "@chakra-ui/react";
import NavItem from "./NavItem"
import React,{useState,useContext, useMemo} from 'react'
import AuthProvider, { AuthContext } from "../../context/AuthProvider";
import { useLocation } from "react-router-dom";
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
const SidebarContent =()=>{
    const location = useLocation();

    const { user, loading } = useContext(AuthContext); 
    const MenuItems = useMemo(()=>{
      if(user?.role==="Admin"){
        return [
          {to:'/Admin/dashboard',icon:Home,label:'Dashboard'},
          {to:'/attendance',icon:BarChart2,label:'Attendance'},
          {to:'/EmployeeInfo',icon:Users,label:'Employee Info'},
          {to:'/CreateTask',icon:FileText,label:'Assign Task'},
          {to:'/Settings',icon:Settings,label:'Settings'},

        ];
        
      }
      return[
        { to: "/Employee/dashboard", icon: Home, label: "dashboard"},
         { to: "/Help", icon: Settings, label: "Help"},
      ]
    },[user?.role]) 
  return (
  <>
   <Box flex="1" p="4">
          <VStack spacing="1" mt="4" align="stretch">
           {MenuItems.map((item)=>(
            <NavItem key={item.label} to={item.to} icon={item.icon} label={item.label} active={location.pathname === item.to}/>
           ))}
          </VStack>
           
        </Box>
     </>
  )
}
 export default React.memo(SidebarContent)