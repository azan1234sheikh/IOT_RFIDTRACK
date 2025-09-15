 import { Image, Text, Flex, Box, Container,Avatar,VStack,Icon,Button} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
 
 
 const NavItem = ({ icon, label, active, to}) => {
  const emerald600 = "#059669"
  const emerald50 = "#ECFDF5"

  return (
  <NavLink to={to}>
     <Flex 
      align="center"
      px="4"
      py="3"
      borderRadius="lg"
      cursor="pointer"
      color={active ? emerald600 : "gray.600"}
      bg={active ? emerald50 : "transparent"}
      _hover={{ bg: active ? emerald50 : "gray.50" }}
      fontWeight={active ? "medium" : "normal"}
    >
      <Icon  as={icon} boxSize="5" mr="3" />
      <Text>{label}</Text>
      
    </Flex>
  </NavLink>
  
  )
  
}

export default NavItem;