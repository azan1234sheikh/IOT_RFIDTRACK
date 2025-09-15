import React from 'react'
import { Button, Text,Box,Flex, Center, VStack, HStack, Stack,Field,SimpleGrid ,Dialog,NativeSelect, Portal,CloseButton,Input,  createListCollection,} from '@chakra-ui/react'

const AddEmployee = () => {
  return (
     <Dialog.Content  maxH={{base:"500px" ,md:"650px"}} w={{base:"full",md:"40%"}} overflowY="auto">
                                <Dialog.Header>
                                  <Dialog.Title fontWeight={{base:"medium",md:"semibold"}} fontSize={{base:10, md:17}}>Employee Registration</Dialog.Title>
                                  <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                  </Dialog.CloseTrigger>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <form onSubmit={onSubmit}>
                                     <Field.Root invalid={!!errors.fullName} required>
                                        <Field.Label>  Full Name</Field.Label>
                                        <Input {...register("fullName" , { required: "First name is required" })} placeholder="Enter Full name" variant="outline"  _/>
                                        <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
                                     </Field.Root> 
    
                                      <Field.Root invalid={!!errors.Email}>
                                        <Field.Label>  Email <Field.RequiredIndicator /></Field.Label>  
                                         <Input {...register("Email" , { required: "Email name is required" })} placeholder="Enter valid email" borderColor="black.400"
                                              _hover={{ borderColor: "gray.400" }} // Hover state
                                              _focus={{
                                                borderColor: "lime.500",
                                                boxShadow: "0 0 0 1px lime.500",
                                              }}
                                            />
                                      <Field.ErrorText>{errors.Email?.message}</Field.ErrorText>
                                      </Field.Root>
    
                                    <Field.Root invalid={!!errors.Depr}>
                                      <Field.Label>Dept </Field.Label>
                                      <Input {...register("Dept" , { required: "Dept is required" })} placeholder="Enter Dept" variant="outline"  _/>
                                    </Field.Root>
                                    <Field.Root invalid={!!errors.Role} >
                                        <Field.Label>  Role <Field.RequiredIndicator /></Field.Label>
                                            <NativeSelect.Root size="sm" width={{base:"inherit",md:"inherit"}}>
                                                    <NativeSelect.Field {...register("Option")} placeholder="Select option" value={value} onChange={(e) => setValue(e.currentTarget.value)} >
                                                      <option value="Employee">Employee</option>
                                                      <option value="Admin">Admin</option>
                                                      <option value="Other">Other</option>
                                                    </NativeSelect.Field>
                                                    <NativeSelect.Indicator />
                                                  </NativeSelect.Root>
                                    </Field.Root>
                                    
                                    <Field.Root invalid={!!errors.Role} >
                                        <Field.Label> RFID UID <Field.RequiredIndicator /></Field.Label>
                                      <Input {...register("UID")} placeholder="Enter RFID Card UID" variant="outline" />
                                      <Flex mt={5} direction="row" alignItems="center" gap={2}>
                                          <Info size={20} />
                                          <Text fontSize="md" color="blackAlpha.700" textAlign="center">
                                            Scan RFID card on IOT device Then Enter
                                          </Text>
                                        </Flex>
                                        <RFIDCard/>
                                    </Field.Root>
                                     
                                      <Button type="submit" fontSize={{base:10, md:17}} size={{base:"md",md:"lg"}} width={{base:"inherit",md:"full"}} fontWeight={{base:"normal",md:"semibold"}} bg="#2760ff" color="white" _hover={{ bg: "#05329a" }}>
                                        Submit
                                        </Button> 
                                    </form>
                                      
                                
                                </Dialog.Body>
                              </Dialog.Content>
  )
}

export default AddEmployee