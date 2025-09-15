import React,{useEffect, useState} from 'react'
import {
  Stack,
  Card,
  Heading,
  Table,
  Flex,
  Input,
  Button,
  Group,
  Box,
  CloseButton,
  Dialog,
  Portal
} from "@chakra-ui/react";
import { Eye ,Download,X} from 'lucide-react';
import { BlobProvider } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { pdf } from "@react-pdf/renderer";
import { useForm } from 'react-hook-form';
import { LuSearch } from "react-icons/lu";
import EmployeesDataHook from '../../context/EmployeesDataHook';
import { colors } from '../../Colors';
import PdfComponent from './PdfComponent';
import { toast } from 'react-toastify';


const EmployeeInfoTable = () => {

  const [search, setsearch] = useState('')
   const [filteredData, setFilteredData] = useState([]);

  const { register, handleSubmit } = useForm();
  
  const {employeeData,loading} =EmployeesDataHook();
  const Filtered_Employee= employeeData.filter((user)=>user.role==="Employee");
  console.log(Filtered_Employee);
      let FilteredData = Filtered_Employee;

  const onSubmit = handleSubmit((data) => {
    if(!data.search){
      setFilteredData(Filtered_Employee);
      return
    };
    const result = Filtered_Employee.filter((item) =>
    item.firstName.toLowerCase().includes(data.search.toLowerCase())
  );
        setFilteredData(result);

  });

  useEffect(()=>{
      setFilteredData(Filtered_Employee)
  },[employeeData])

  return (
    <Card.Root className="overflow-hidden border-none shadow-lg mt-0 ">
      <Card.Body className="p-6">
        <Stack spacing={6}>
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <Heading fontWeight="semibold" size="xl">
              All Employees Data
            </Heading>
            <form onSubmit={onSubmit} style={{ width: "100%", maxWidth: "300px" }}>
              <Group attached w="full"gapX="12px">
                <Input
                  {...register("search",{ required: true })}
                  placeholder="Search Employees"
                  required={true}
                  color="black"
                  flex="1"
                />
                <Button type="submit" bg="#000000" variant="outline">
                  <LuSearch color='white' />
                </Button>
              </Group>
            </form>
          </Flex>
          <Box overflowX="auto">

          <Table.Root size="sm" variant="outline">
            <Table.ColumnGroup>
              <Table.Column />
              <Table.Column />
              <Table.Column />
              <Table.Column />
              <Table.Column />
            </Table.ColumnGroup>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Employee Name</Table.ColumnHeader>
                <Table.ColumnHeader>Device ID</Table.ColumnHeader>
                <Table.ColumnHeader>UID</Table.ColumnHeader>
                  <Table.ColumnHeader>Checkin-Time</Table.ColumnHeader>
                <Table.ColumnHeader>Checkout-Time</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
                <Table.ColumnHeader>Active</Table.ColumnHeader>
                <Table.ColumnHeader>View Info</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
             
                {filteredData.flatMap((item)=>
                (item.rfidIndex || []).map((user)=>(
                   <Table.Row key={user.firebaseKey}>
                          <Table.Cell>{item?.firstName}</Table.Cell>
                        <Table.Cell>{user?.DeviceId}</Table.Cell>
                      <Table.Cell>{user?.uid}</Table.Cell>
                      <Table.Cell>{user?.checkinTime}</Table.Cell>
                      <Table.Cell>{user?.checkoutTime}</Table.Cell>
                      <Table.Cell>{user?.date}</Table.Cell>
                     <Table.Cell>{item.taskNumbers.active?"Yes":"No"}</Table.Cell>
                      <Table.Cell>
                       
                         
                          <Dialog.Root placement={'center'} motionPreset="slide-in-bottom">
             <Dialog.Trigger asChild>
               <Button
                              w="half"
                              bg={colors.White}
                              color="white"
                              size="lg"
                              borderRadius="half"
                              boxShadow={`0 4px 12px ${colors.emerald200}`}
                            >
                            <Eye color='black'/>

                              </Button>
                              </Dialog.Trigger>
                              <Portal>
                                <Dialog.Backdrop />
                                <Dialog.Positioner>
                                  <Dialog.Content>
                                    <Dialog.Header>
                                      <Dialog.Title className='font-semibold'>Save Employee Attendance</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <div className="inline-flex gap-x-8 items-center">
                                            <p className='bold'> Export {item.firstName} Attendance Details</p>
                                            <Button
                                                onClick={async () => {
                                                  try {
                                                    if (!item) {toast.error("No employee data"); 
                                                      return; 
                                                    }
                                                    const blob = await pdf(<PdfComponent employeeData={item} />).toBlob();
                                                    const url = URL.createObjectURL(blob);
                                                    const a = document.createElement("a");
                                                    a.href = url;
                                                    a.download = `${item.firstName || "employee"}_attendance.pdf`;
                                                    a.click();
                                                    URL.revokeObjectURL(url);
                                                  } catch (err) {
                                                    console.error("PDF generation failed:", err);
                                                  }
                                                }}
                                                leftIcon={<Download size={16} />}
                                                bg="blue.500" 
                                                color="white"
                                              >
                                                Download
                                                </Button>
                                          </div>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                     
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                      <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                  </Dialog.Content>
                                </Dialog.Positioner>
                              </Portal>
            </Dialog.Root>
                          
                          </Table.Cell>
                    </Table.Row>
                   
                ))
              )}

            </Table.Body>
          </Table.Root>

        
          </Box>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

export default EmployeeInfoTable
