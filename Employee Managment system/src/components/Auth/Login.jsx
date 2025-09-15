// import React, { useState, useEffect,useContext } from "react";
// import { useNavigate, Link as RouterLink } from "react-router-dom";
// import { ref, set, get } from "firebase/database";
// import { Auth, RTdatabase } from "../firebase";
// import { toast, ToastContainer } from 'react-toastify';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { AuthContext } from "../../context/AuthProvider";
// import { Spinner } from "@chakra-ui/react"

// // import { useAuth } from '../../context/AuthProvider';

// import { colors } from "../../Colors";
// // const { setUserData } = useAuth();  // to update context immediately

// import { Box, Button, Container, Flex, Input, Text, VStack, Icon} from "@chakra-ui/react";
// import { 
//   FaUserPlus, 
//   FaIdCard, 
//   FaEnvelope, 
//   FaLock, 
//   FaSignInAlt,
//   FaArrowLeft 
// } from "react-icons/fa";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [email, setemail] = useState();
//     const [password, setpassword] = useState();
//     const [uid, setuid] = useState("");
    
//       useEffect(() => { 
//         // Check if Firebase is properly initialized
//         try {
//           if (!Auth || !RTdatabase) {
//             setFirebaseError(true);
//             console.error("Firebase is not initialized");
//           }
//         } catch (error) {
//           setFirebaseError(true);
//           console.error("Firebase initialization error:", error);
//         }
//       }, []);
    
    
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // await login(email, password); // Use context login function
//     await loginWithCredentialsAndUID(email,password,uid);
//   } catch (error) {
//     toast.error("Login failed: " + error.message);
//   }
// };

// // Remove all manual navigation and localStorage code
//   return (
//   //   <div className='flex h-screen w-screen items-center justify-center'>
//   //   <div className='border-2 border-emerald-600 rounded-xl p-20'>
//   //     <form onSubmit={(e)=>{handlesubmit(e)}} className='flex flex-col items-center justify-center'>
//   //         <input value={email} onChange={(e)=>{setemail(e.target.value)}} required className='outline-none text-black bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-black' type='email' placeholder='Enter your Email'></input>
//   //         <input value={password} onChange={(e)=>{setpassword(e.target.value)}} required className='outline-none text-black bg-transparent mt-5 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-black' type='password' placeholder='Enter your password'></input>
//   //         <button  className='mt-7 text-black border-none bg-emerald-600 hover:bg-emerald-700  outline-none py-3 px-10 rounded-full border-emerald-600 placeholder:text-black'>login</button>
//   //     </form>
//   //     <button onClick={registNav} className='mt-7 text-black border-none bg-emerald-600 hover:bg-emerald-700  outline-none py-3 px-10 rounded-full border-emerald-600 placeholder:text-black'>Register</button>

//   //   </div>  
//   // </div>
//    <Flex
//         minH="100vh"
//         align="center"
//         justify="center"
//         bg={`linear-gradient(to bottom, ${colors.emerald50}, white)`}
//       >
//         <Container maxW="md" px={4}>
//           <Box position="relative">
//             {/* Shadow element behind the form */}
//             <Box
//               position="absolute"
//               inset="-4px"
//               bg={colors.emerald600}
//               borderRadius="xl"
//               filter="blur(10px)"
//               opacity={0.2}
//               transform="rotate(-1deg)"
//             />
            
//             {/* Main form container */}
//             <Box
//               position="relative"
//               borderWidth="2px"
//               borderColor={colors.emerald600}
//               borderRadius="xl"
//               p={8}
//               bg="white"
//               boxShadow="xl"
//             >
//               <Flex justify="center" mb={6}>
//                 <Flex
//                   w="60px"
//                   h="60px"
//                   bg={colors.emerald100}
//                   color={colors.emerald600}
//                   borderRadius="full"
//                   justify="center"
//                   align="center"
//                 >
//                   <Icon as={FaSignInAlt} boxSize={6} />
//                 </Flex>
//               </Flex>
              
//               <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2}>
//                 Employee Login
//               </Text>
//               <Text textAlign="center" color="gray.500" mb={6}>
//                 Login to View Info
//               </Text>
              
//               <form onSubmit={handleSubmit}>
//                 <VStack spacing={5}>
//                   <Box position="relative" w="100%">
//                     <Box position="absolute" left="4" top="3.5" zIndex="1">
//                       <Icon as={FaEnvelope} color={colors.emerald600} />
//                     </Box>
//                     <Input
//                       value={email}
//                       onChange={(e) => setemail(e.target.value)}
//                       required
//                       type="email"
//                       placeholder="Enter your Email"
//                       size="lg"
//                       pl="12"
//                       borderWidth="2px"
//                       borderColor={colors.emerald600}
//                       borderRadius="full"
//                       _focus={{
//                         boxShadow: `0 0 0 1px ${colors.emerald600}`,
//                         borderColor: colors.emerald600,
//                       }}
//                     />
//                   </Box>
                  
//                   <Box position="relative" w="100%">
//                     <Box position="absolute" left="4" top="3.5" zIndex="1">
//                       <Icon as={FaLock} color={colors.emerald600} />
//                     </Box>
//                     <Input
//                       value={password}
//                       onChange={(e) => setpassword(e.target.value)}
//                       required
//                       type="password"
//                       placeholder="Enter your password"
//                       size="lg"
//                       pl="12"
//                       borderWidth="2px"
//                       borderColor={colors.emerald600}
//                       borderRadius="full"
//                       _focus={{
//                         boxShadow: `0 0 0 1px ${colors.emerald600}`,
//                         borderColor: colors.emerald600,
//                       }}
//                     />
//                   </Box>
                  
//                   <Box position="relative" w="100%">
//                     <Box position="absolute" left="4" top="3.5" zIndex="1">
//                       <Icon as={FaIdCard} color={colors.emerald600} />
//                     </Box>
//                     <Input
//                       value={uid}
//                       onChange={(e) => setuid(e.target.value)}
//                       required
//                       type="text"
//                       placeholder="Enter RFID Id Assigned"
//                       size="lg"
//                       pl="12"
//                       borderWidth="2px"
//                       borderColor={colors.emerald600}
//                       borderRadius="full"
//                       _focus={{
//                         boxShadow: `0 0 0 1px ${colors.emerald600}`,
//                         borderColor: colors.emerald600,
//                       }}
//                     />
//                   </Box>
                  
//                   <Button
//                     isLoading={<Spinner/>}
//                     // isDisabled={loading || firebaseError}
//                     type="submit"
//                     w="full"
//                     bg={colors.emerald600}
//                     color="white"
//                     size="lg"
//                     borderRadius="full"
//                     _hover={{ bg: colors.emerald700, transform: "translateY(-2px)" }}
//                     _active={{ bg: colors.emerald700 }}
//                     boxShadow={`0 4px 12px ${colors.emerald200}`}
//                     transition="all 0.2s"
//                     mt={4}
//                   >
//                     Login
//                   </Button>
                  
                 
//                 </VStack>
//               </form>
//             </Box>
//           </Box>
//         </Container>
//       </Flex>
//   )
// }
//  const loginWithCredentialsAndUID  = async(email,password,Uid)=>{
//     try{
//        const Credentials = await  signInWithEmailAndPassword(email,password);
//            console.log(Credentials)

//         //fetching
//     //     const userRef =await get(ref(RTdatabase,`${Credentials.user.uid}`));
//     //     //  const snapshot = await get(ref(RTdatabase, `${uid}`));
//     //   if (userRef.rfid !== Uid) {
//     //   throw new Error("RFID card not registered to this account");
//     // }
//     return Credentials;

//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
//  }
    

// export default Login 




import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { ref, set, get } from "firebase/database";
import { Auth, RTdatabase } from "../firebase";
import { toast, ToastContainer } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from "../../context/AuthProvider";
import { Spinner, useRecipe } from "@chakra-ui/react"

import { colors } from "../../Colors";

import { Box, Button, Container, Flex, Input, Text, VStack, Icon} from "@chakra-ui/react";
import { 
  FaUserPlus, 
  FaIdCard, 
  FaEnvelope, 
  FaLock, 
  FaSignInAlt,
  FaArrowLeft 
} from "react-icons/fa";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [matcheduser, setmatcheduser] = useState();
  const [uid, setuid] = useState("");
  const [loading, setLoading] = useState(true);
  const [firebaseError, setFirebaseError] = useState(false);

  const loginFn = async (Auth, email, password, uid) => {
  try {
    // Step 1: Find user with this email first
    const rootRef = ref(RTdatabase, '/');
    const allDataSnapshot = await get(rootRef);
     if (!allDataSnapshot.exists()) {
      throw new Error("No users found in database.");
    }
    const allData = allDataSnapshot.val();
    let matchedUser = null;
    console.log(allData);
    for (const [userUID, userData] of Object.entries(allData)) {
      if (
            typeof userData === "object" &&
            userData.Email &&
            userData.Email.toLowerCase() === email.toLowerCase()
          ) {
            matchedUser = { ...userData, dbUid: userUID };
                // console.log(matchedUser);

            break;
          }
    }
    if (!matchedUser) {
      throw new Error("Email not found in system");
    }
    if (matchedUser.Id !== uid) {
      throw new Error("RFID does not match this email account");
    }

        const credentials = await signInWithEmailAndPassword(Auth, email, password);

    return {credentials,matchedUser};
    
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
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
    setLoading(true);
    
    try {
      // Use the Auth instance directly with signInWithEmailAndPassword
      const {credentials,matchedUser}=await loginFn(Auth,email,password,uid);
      toast.success("Login successful!");
      console.log(matchedUser)
      // if(matchedUser?.role==="Admin"){
      //         navigate("/Admin/dashboard"); 

      // }else{
      //   navigate("/Employee/dashboard")
      // }
      matchedUser?.role==="Admin"?navigate("/Admin/dashboard"):navigate("/Employee/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed: " + error.message);
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
                <Icon as={FaSignInAlt} boxSize={6} />
              </Flex>
            </Flex>
            
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2}>
              Employee Login<br/>OR<br/> Admin Login
            </Text>
            <Text textAlign="center" color="gray.500" mb={6}>
              Login to View Info
            </Text>
            
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <Box position="relative" w="100%">
                  <Box position="absolute" left="4" top="3.5" zIndex="1">
                    <Icon as={FaEnvelope} color={colors.emerald600} />
                  </Box>
                  <Input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
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
                    onChange={(e) => setpassword(e.target.value)}
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
                    onChange={(e) => setuid(e.target.value)}
                    required
                    type="text"
                    placeholder="Enter RFID Assigned By Device"
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
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </Flex>
  )
};

export default Login;
