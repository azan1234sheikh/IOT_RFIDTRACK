import React,{useContext} from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import {
  FaUserCheck,
  FaClock,
  FaChartBar,
  FaCog,
  FaIdCard,
  FaMicrochip,
  FaWifi,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaQuestionCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import SideBar from "./Sidebar";
import { Card } from "@chakra-ui/react";
import Header from "./Header";
import { AuthContext } from "../../context/AuthProvider";
const Help = () => {
    const { user } = useContext(AuthContext);
  
  return (
        <Stack bg="gray.100" direction="row" minH="100vh">
      {/* Sidebar */}
      <Box display={{ base: "none", md: "block" }}>
        <SideBar />
      </Box>
 <Box flex="1" minW={0} mt={{ base: 4, md: 7 }} px={{ base: 2, md: 6 }}>
        <Header Propdata={user} />

      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color="blue.600">
            IoT RFID Employee Management System
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Complete Guide to Using the RFID Tracking System
          </Text>
        </Box>

        {/* How It Works */}
        <Card.Root shadow="md" borderWidth="1px" rounded="md">
          <Card.Header>
            <Heading size="lg">How the System Works</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" spacing={6}>
              {[
                {
                  num: 1,
                  color: "blue",
                  title: "RFID Registration",
                  text: "Each employee receives a unique RFID card with a microchip containing a UID. This UID is linked to the employee's profile.",
                },
                {
                  num: 2,
                  color: "green",
                  title: "IoT Readers Installation",
                  text: "IoT-enabled RFID readers placed across the facility send data in real time to secure cloud servers.",
                },
                {
                  num: 3,
                  color: "purple",
                  title: "Attendance Tracking",
                  text: "When an employee taps their card, the system records the time, location, and employee details instantly.",
                },
                {
                  num: 4,
                  color: "orange",
                  title: "Data Analytics",
                  text: "Collected data is analyzed to generate insights about attendance, peak hours, and workforce metrics.",
                },
              ].map((step) => (
                <HStack key={step.num} align="start">
                  <Box
                    bg={`${step.color}.100`}
                    p={3}
                    borderRadius="md"
                    minW="40px"
                    textAlign="center"
                  >
                    <Text fontWeight="bold" fontSize="xl" color={`${step.color}.800`}>
                      {step.num}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" mb={2}>
                      {step.title}
                    </Heading>
                    <Text>{step.text}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* RFID Registration Process */}
        <Card.Root shadow="md" borderWidth="1px" rounded="md">
          <Card.Header>
            <Heading size="lg">RFID Registration Process</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" spacing={4}>
              <Text>
                Registering an RFID card links your physical card to your employee profile in the system.
              </Text>
              <Box mt={4} p={4} bg="blue.50" borderRadius="md">
                <HStack>
                  <Icon as={FaExclamationTriangle} color="blue.500" boxSize={6} />
                  <Text fontWeight="medium">
                    Important: Each RFID UID is unique. If you lose your card, report it immediately
                    to deactivate it and prevent unauthorized use.
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Features */}
        <Card.Root shadow="md" borderWidth="1px" rounded="md">
          <Card.Header>
            <Heading size="lg">System Features</Heading>
          </Card.Header>
          <Card.Body>
            <VStack align="stretch" spacing={6}>
              {[
                {
                  icon: FaUserCheck,
                  color: "green.500",
                  title: "Automated Attendance Tracking",
                  text: "The system records check-ins and check-outs automatically with precise timestamps.",
                },
                {
                  icon: FaClock,
                  color: "blue.500",
                  title: "Real-time Monitoring",
                  text: "Monitor employee presence live in the dashboard, with alerts for late arrivals or absentees.",
                },
                {
                  icon: FaChartBar,
                  color: "purple.500",
                  title: "Advanced Reporting",
                  text: "Generate detailed reports on attendance, overtime, and analytics with export options.",
                },
                {
                  icon: FaCog,
                  color: "orange.500",
                  title: "Access Control Integration",
                  text: "Integrate with door access systems to control entry based on roles and permissions.",
                },
              ].map((feature, i) => (
                <HStack key={i} align="start">
                  <Icon as={feature.icon} color={feature.color} boxSize={6} mt={1} />
                  <Box>
                    <Heading size="md" mb={2}>
                      {feature.title}
                    </Heading>
                    <Text>{feature.text}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* FAQ */}
        <Card.Root shadow="md" borderWidth="1px" rounded="md">
          <Card.Header>
            <Heading size="lg">Frequently Asked Questions</Heading>
          </Card.Header>
          <Card.Body>
            <Text>Coming soon...</Text>
          </Card.Body>
        </Card.Root>

        {/* Support */}
        <Card.Root shadow="md" borderWidth="1px" rounded="md">
          <Card.Header>
            <Heading size="lg">Need Additional Help?</Heading>
          </Card.Header>
          <Card.Body>
            <VStack spacing={4} align="stretch">
              <Text>
                If you need assistance, our support team is here to help.
              </Text>
              <HStack align="start">
                <Icon as={FaQuestionCircle} color="blue.500" boxSize={6} mt={1} />
                <Box>
                  <Heading size="md" mb={2}>
                    Contact Support
                  </Heading>
                  <Text>
                    Email: support@iotrfid.com <br />
                    Phone: +1 (555) 123-4567 <br />
                    Hours: Mon–Fri, 8:00 AM – 6:00 PM
                  </Text>
                </Box>
              </HStack>
              <HStack align="start">
                <Icon as={FaServer} color="green.500" boxSize={6} mt={1} />
                <Box>
                  <Heading size="md" mb={2}>
                    System Status
                  </Heading>
                  <Text>
                    Check live status and maintenance schedules on our{" "}
                    <Link color="blue.500" href="#">
                      status page
                    </Link>.
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Card.Body>
        </Card.Root>
      </VStack>
      </Box>
      </Stack>
  );
};

export default Help;
