import { Stack ,Box, Card,Badge,Center} from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import SideBar from './Sidebar'
import {
  Search,
  Bell,
  Settings,
  Home,
  BarChart2,
  Users,
  FileText,
  MessageSquare,
  HelpCircle,
  MapPin,
  LogOut,
} from "lucide-react"

import { Avatar, AvatarGroup,Input } from "@chakra-ui/react"
import { UsersRound } from 'lucide-react';



const MetricCard=({title,value,change,icon,Today,max,bg})=> {

    return (
      <>
      <Card.Root className="overflow-hidden border-none shadow-lg">
        <Card.Body className="p-0">
        <div className="flex h-full">
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            
                            <h3 className="text-sm font-medium text-black">{title}</h3>
                          </div>
                           <Center rounded="md" w="40px" h="40px" bg={bg}>{icon}</Center>
                        </div>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold">{value}</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>{Today}</span>
                <Badge variant="outline" className="h-5 bg-gray-50">
                  {max}
                </Badge>
              </div>
            </div>
          </div>
        </div>
        </Card.Body>
      </Card.Root>
      </>
      
    )
  }

  export default MetricCard