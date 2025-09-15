import {Stack, Box, Card, Heading, Table, Flex, SimpleGrid, Text, Button} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import SideBar from "./Sidebar";
const Settings = () => {
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
      Settings
    </Text>
  </Flex>
  </Box>
  </Box>
  </Flex>
  </Stack>
  </Box>
  

    </>
  )
}

export default Settings