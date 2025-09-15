
//------------------------------------------------------------------//
import React, { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, push } from "firebase/database";
import { Auth, RTdatabase } from "../firebase";
import { toast } from "react-toastify";
import { colors } from "../../Colors";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { 
  FaUserPlus, 
  FaIdCard, 
  FaEnvelope, 
  FaLock, 
  FaArrowLeft 
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
 
  //----------//
  const defaultTasks = [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Welcome Task",
      taskDescription: "Start exploring the employee dashboard.",
      taskDate: new Date().toISOString().split('T')[0],
      category: "Onboarding"
    }
  ];

  const taskNumbers = {
    active: 1,
    newTask: 1,
    completed: 0,
    failed: 0
  };
   //---------------//

  useEffect(() => {
    // Check if Firebase is properly initialized
    try {
      if (!Auth || !RTdatabase) {
        setFirebaseError(true);
        console.error("Firebase is not initialized");
      }
    } catch (error) {
      setFirebaseError(true);
      console.error("Firebase initialization error:", error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (firebaseError) {
      toast.error("Firebase is not properly configured");
      return;
    }
    
    setLoading(true);
    
    try {
      await createUserWithEmailAndPassword(Auth, email, password);
      const user = Auth.currentUser;
      console.log(user);
      // const newdoc = push(ref(RTdatabase, "employee"));
      
      // await set(newdoc, {
      //   employeeid: uid,
      // });
      await set(ref(RTdatabase, `${user.uid}/`), {
        id:uid,
        firstName: FirstName,
        email: user.email,
        role:"employee",
        task: defaultTasks,
        taskNumbers,
        
      });
      toast.success("User Registered Successfully");
      setEmail("");
      setPassword("");
      setUid("");
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      toast.error("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={`linear-gradient(to bottom, ${colors.emerald50}, white)`}
    >
      <Container maxW="md" px={4}>
        <Box position="relative">
          {/* Shadow element behind the form */}
          <Box
            position="absolute"
            inset="-4px"
            bg={colors.emerald600}
            borderRadius="xl"
            filter="blur(10px)"
            opacity={0.2}
            transform="rotate(-1deg)"
          />
          
          {/* Main form container */}
          <Box
            position="relative"
            borderWidth="2px"
            borderColor={colors.emerald600}
            borderRadius="xl"
            p={8}
            bg="white"
            boxShadow="xl"
          >
            <Flex justify="center" mb={6}>
              <Flex
                w="60px"
                h="60px"
                bg={colors.emerald100}
                color={colors.emerald600}
                borderRadius="full"
                justify="center"
                align="center"
              >
                <Icon as={FaUserPlus} boxSize={6} />
              </Flex>
            </Flex>
            
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2}>
              Employee Registration
            </Text>
            <Text textAlign="center" color="gray.500" mb={6}>
              Create your account to get started
            </Text>
            
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
              <Box position="relative" w="100%">
                  <Box position="absolute" left="4" top="3.5" zIndex="1">
                    <Icon as={FaLock} color={colors.emerald600} />
                  </Box>
                  <Input
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    type="name"
                    placeholder="Enter Your Name"
                    size="lg"
                    pl="12"
                    borderWidth="2px"
                    borderColor={colors.emerald600}
                    borderRadius="full"
                    _focus={{
                      boxShadow: `0 0 0 1px ${colors.emerald600}`,
                      borderColor: colors.emerald600,
                    }}
                  />
                </Box>
                <Box position="relative" w="100%">
                  <Box position="absolute" left="4" top="3.5" zIndex="1">
                    <Icon as={FaEnvelope} color={colors.emerald600} />
                  </Box>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    placeholder="Enter your Email"
                    size="lg"
                    pl="12"
                    borderWidth="2px"
                    borderColor={colors.emerald600}
                    borderRadius="full"
                    _focus={{
                      boxShadow: `0 0 0 1px ${colors.emerald600}`,
                      borderColor: colors.emerald600,
                    }}
                  />
                </Box>
                <Box position="relative" w="100%">
                  <Box position="absolute" left="4" top="3.5" zIndex="1">
                    <Icon as={FaLock} color={colors.emerald600} />
                  </Box>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    placeholder="Enter your password"
                    size="lg"
                    pl="12"
                    borderWidth="2px"
                    borderColor={colors.emerald600}
                    borderRadius="full"
                    _focus={{
                      boxShadow: `0 0 0 1px ${colors.emerald600}`,
                      borderColor: colors.emerald600,
                    }}
                  />
                </Box>               
                <Box position="relative" w="100%">
                  <Box position="absolute" left="4" top="3.5" zIndex="1">
                    <Icon as={FaIdCard} color={colors.emerald600} />
                  </Box>
                  <Input
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                    required
                    type="number"
                    placeholder="Enter employee Id"
                    size="lg"
                    pl="12"
                    borderWidth="2px"
                    borderColor={colors.emerald600}
                    borderRadius="full"
                    _focus={{
                      boxShadow: `0 0 0 1px ${colors.emerald600}`,
                      borderColor: colors.emerald600,
                    }}
                  />
                </Box>
                
                <Button
                  isLoading={loading}
                  isDisabled={loading || firebaseError}
                  type="submit"
                  w="full"
                  bg={colors.emerald600}
                  color="white"
                  size="lg"
                  borderRadius="full"
                  _hover={{ bg: colors.emerald700, transform: "translateY(-2px)" }}
                  _active={{ bg: colors.emerald700 }}
                  boxShadow={`0 4px 12px ${colors.emerald200}`}
                  transition="all 0.2s"
                  mt={4}
                >
                  Register
                </Button>
                
                <Button
                  as={RouterLink}
                  to="/login"
                  isDisabled={firebaseError}
                  w="full"
                  variant="outline"
                  borderWidth="2px"
                  borderColor={colors.emerald600}
                  color={colors.emerald600}
                  size="lg"
                  borderRadius="full"
                  leftIcon={<Icon as={FaArrowLeft} />}
                  _hover={{ bg: colors.emerald50 }}
                >
                  Back to Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};

export default Register;