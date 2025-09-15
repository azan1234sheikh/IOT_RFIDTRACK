import React from "react";
import Login from "../Auth/Login";
import AdminDashboard from "../Dashboard/AdminDashboard";
import EmployeeDashboard from "../Dashboard/EmployeeDashboard";
import { useNavigate } from "react-router-dom";
import Stats from "../UI/Stats";
import Features from "../UI/Features";
import Hero from "../UI/Hero";
import Testimonials from "../UI/Testimonials";
import CTA from "../UI/CTA";
import Footer from "../UI/Footer";
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from "framer-motion"

import { Button, CloseButton, Box,Drawer, Portal,Image,Flex} from "@chakra-ui/react"

const LandingPage = ({handlelogin}) => {
  const [Open, setOpen] = useState(false);
    const Navigate = useNavigate();
  const btn=()=>{
    Navigate("/Login");
  }

  return (
//     <div className="min-h-screen bg-gradient-to-b from-emerald-800 to-emerald-500">
//     <nav className="fixed top-0 w-full z-50 bg-emerald-900/90 backdrop-blur-sm">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <div className="text-2xl font-bold text-white">EMS</div>
//           <div className="hidden md:flex items-center space-x-8">
//             <a  className="text-white hover:text-emerald-200 transition-colors">Home</a>
//             <a  className="text-white hover:text-emerald-200 transition-colors">Insights</a>
//             <a className="text-white hover:text-emerald-200 transition-colors">Features</a>
//             <a  className="text-white hover:text-emerald-200 transition-colors">Contact</a>
//             <a  onClick={btn} className="bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors">Login</a>
//           </div>
//           <button className="md:hidden text-white">
//             <svg onClick={()=>setOpen(!Open)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> */}
//             </svg>
//           </button>
//           {Open ? <X size={24}/>:(
//             <Drawer.Root Open={Open} onOpenChange={(e) => setOpen(e.Open)}>
//                     <Drawer.Trigger asChild>
//                       <Button className="md:hidden text-white" color={"white"} size="sm">
//                         <Menu size={55}/>
//                       </Button>
//                     </Drawer.Trigger>
//                     <Portal>
//                       <Drawer.Backdrop /> 
//                       <Drawer.Positioner>
//                         <Drawer.Content>
//                           <Drawer.Header>
//                             <Drawer.Title> IOT EMS</Drawer.Title>
//                           </Drawer.Header>
//                           <Drawer.Body>
//                          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 items-center">
//   <a href="#" className="text-black hover:text-emerald-200 transition-colors">
//     Home
//   </a>
//   <a href="#" className="text-black hover:text-emerald-200 transition-colors">
//     Insights
//   </a>
//   <a href="#" className="text-black hover:text-emerald-200 transition-colors">
//     Features
//   </a>
//   <a href="#" className="text-black hover:text-emerald-200 transition-colors">
//     Contact
//   </a>
//   <a
//     onClick={btn}
//     className="bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors"
//   >
//     Login
//   </a>
// </div>

//                           </Drawer.Body>
//                           <Drawer.Footer>
                            
//                           </Drawer.Footer>
//                           <Drawer.CloseTrigger asChild>
//                             <CloseButton size="sm" />
//                           </Drawer.CloseTrigger>
//                         </Drawer.Content>
//                       </Drawer.Positioner>
//                     </Portal>
//                   </Drawer.Root>
//           )

//           }
//         </div>
//       </div>
//     </nav>
//     <main>
//       <Hero />
//       <Features />
//       <Stats />
//       <Testimonials />
//       <CTA />
//     </main>
//     <Footer />
//   </div>

    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative z-50 bg-transparent ">
        <div className="container mx-auto px-0 sm:px-0 lg:px-0">
          <div className="flex h-19  items-center justify-between">
            <div className="flex items-center">
              <nav className="fixed top-0 w-full z-50 bg-emerald-600 backdrop-blur-sm">
       <div className="container mx-auto px-4 py-3">
         <div className="flex items-center justify-between">
           <div className="text-2xl font-bold text-white">RFID TRACK</div>
           <div className="hidden md:flex items-center space-x-8">
             <a  className="text-white hover:text-emerald-200 transition-colors">Home</a>
             <a  className="text-white hover:text-emerald-200 transition-colors">Insights</a>
             <a className="text-white hover:text-emerald-200 transition-colors">Features</a>
             <a  className="text-white hover:text-emerald-200 transition-colors">Contact</a>
             <a  onClick={btn} className="bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors">Login</a>
          </div>
           <button className="md:hidden text-white">
             <svg onClick={()=>setOpen(!Open)} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> */}
             </svg>
           </button>
           {Open ? <X size={24}/>:(
            <Drawer.Root Open={Open} onOpenChange={(e) => setOpen(e.Open)}>
                    <Drawer.Trigger asChild>
                      <Button className="md:hidden text-white" color={"white"} size="sm">
                        <Menu size={55}/>
                      </Button>
                    </Drawer.Trigger>
                    <Portal>
                      <Drawer.Backdrop /> 
                      <Drawer.Positioner>
                        <Drawer.Content>
                          <Drawer.Header>
                            <Drawer.Title> IOT EMS</Drawer.Title>
                          </Drawer.Header>
                          <Drawer.Body>
                         <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8 items-center">
  <a href="#" className="text-black hover:text-emerald-200 transition-colors">
    Home
  </a>
  <a href="#" className="text-black hover:text-emerald-200 transition-colors">
    Insights
  </a>
  <a href="#" className="text-black hover:text-emerald-200 transition-colors">
    Features
  </a>
  <a href="#" className="text-black hover:text-emerald-200 transition-colors">
    Contact
  </a>
  <a
    onClick={btn}
    className="bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors"
  >
    Login
  </a>
</div>

                          </Drawer.Body>
                          <Drawer.Footer>
                            
                          </Drawer.Footer>
                          <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                          </Drawer.CloseTrigger>
                        </Drawer.Content>
                      </Drawer.Positioner>
                    </Portal>
                  </Drawer.Root>
          )

          }
        </div>
      </div>
              </nav>
            </div>
              
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20">
                LEARN MORE
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6">GET STARTED</Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-emerald-600">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Network connection lines */}
            <g stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
              <line x1="0" y1="200" x2="300" y2="100">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="100" x2="600" y2="150">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="600" y1="150" x2="900" y2="80">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="900" y1="80" x2="1200" y2="120">
                <animate attributeName="opacity" values="0.15;0.6;0.15" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="100" y1="400" x2="400" y2="300">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="2.8s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="300" x2="700" y2="350">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="3.2s" repeatCount="indefinite" />
              </line>
              <line x1="700" y1="350" x2="1000" y2="280">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4.2s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="600" x2="500" y2="500">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.2s" repeatCount="indefinite" />
              </line>
              <line x1="500" y1="500" x2="800" y2="550">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3.8s" repeatCount="indefinite" />
              </line>
              <line x1="800" y1="550" x2="1100" y2="480">
                <animate attributeName="opacity" values="0.15;0.6;0.15" dur="2.7s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="100" x2="400" y2="300">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3.3s" repeatCount="indefinite" />
              </line>
              <line x1="600" y1="150" x2="700" y2="350">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.9s" repeatCount="indefinite" />
              </line>
              <line x1="900" y1="80" x2="1000" y2="280">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4.1s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="300" x2="500" y2="500">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.6s" repeatCount="indefinite" />
              </line>
              <line x1="700" y1="350" x2="800" y2="550">
                <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3.7s" repeatCount="indefinite" />
              </line>
            </g>
            {/* Connection nodes */}
            <g fill="rgba(255,255,255,0.25)">
              <circle cx="300" cy="100" r="4">
                <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="150" r="4">
                <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="900" cy="80" r="4">
                <animate attributeName="r" values="3;7;3" dur="1.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="300" r="4">
                <animate attributeName="r" values="3;7;3" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="700" cy="350" r="4">
                <animate attributeName="r" values="3;7;3" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="1000" cy="280" r="4">
                <animate attributeName="r" values="3;7;3" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="500" r="4">
                <animate attributeName="r" values="3;7;3" dur="2.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="800" cy="550" r="4">
                <animate attributeName="r" values="3;7;3" dur="2.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.7;0.25" dur="2.7s" repeatCount="indefinite" />
              </circle>
            </g>
            {/* Larger accent nodes */}
            <g fill="rgba(255,255,255,0.35)">
              <circle cx="150" cy="200" r="6">
                <animate attributeName="r" values="4;9;4" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.8;0.35" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="450" cy="400" r="6">
                <animate attributeName="r" values="4;9;4" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.8;0.35" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="750" cy="250" r="6">
                <animate attributeName="r" values="4;9;4" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.8;0.35" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="1050" cy="450" r="6">
                <animate attributeName="r" values="4;9;4" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0.8;0.35" dur="2.8s" repeatCount="indefinite" />
              </circle>
            </g>
            {/* Moving data packets */}
            <g fill="rgba(255,255,255,0.5)">
              <circle cx="0" cy="200" r="2">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <path d="M0,200 L300,100 L600,150 L900,80 L1200,120" />
                </animateMotion>
              </circle>
              <circle cx="100" cy="400" r="2">
                <animateMotion dur="8s" repeatCount="indefinite">
                  <path d="M100,400 L400,300 L700,350 L1000,280" />
                </animateMotion>
              </circle>
              <circle cx="200" cy="600" r="2">
                <animateMotion dur="7s" repeatCount="indefinite">
                  <path d="M200,600 L500,500 L800,550 L1100,480" />
                </animateMotion>
              </circle>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Box data-state="open" _open={{ animationName: "fade-in, scale-in",animationDuration: "900ms",}}_closed={{ animationName: "fade-out, scale-out", animationDuration: "120ms",}} className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">RFIDTRACK</Box>
              <h2 className="text-3xl lg:text-4xl font-light text-white/95 mb-8 leading-tight">
                A Secure Real-time Employee Management Solution
              </h2>
              <Box data-state="open"
  _open={{
    animation: "fade-in 900ms ease-out",
  }} className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg">
                RFIDTRACK is a real-time IOT Based employee management solution which enables you to monitor your employees Attendance In Real Time Using Dedicated Embedded IOT Based Device,It aslo Allows
                Assign Tasks , provide Realtime Data and set customized alerts, in an easy way.
              </Box>
              <div className="flex flex-col sm:flex-row  gap-4">
                <Button
                  size="lg"
                  variant="ghost"
                  className="bg-white/40 text-white border border-white/60 hover:bg-white/50 px-8 py-3 text-base font-semibold"
                >
                  LEARN MORE
                </Button>
                <Button
                onClick={btn}
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-white/90 px-8 py-3 text-base font-semibold border-2 border-transparent"
                >
                  GET STARTED
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                    <Box 
                    maxW="full" 
                    mx="auto" 
                    p={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src="./bg.png"
                      alt="Background"
                      w={{ base: "80%", md: "80%", lg: "100%" }} // responsive width
                      h="auto"
                      // mb={{base:"300px",md:"0px"}}
                      objectFit="cover"
                      borderRadius="lg"
                    />
                  </Box>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
              Complete IoT-Based Employee Tracking Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Enterprise-grade RFID hardware and software designed for reliability, security, and scalability.
            </p>
          </div>

          
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
              Explore Our Features Through Screenshots
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-10">
              See how RFIDTRACK integrates seamlessly into your daily operations.
            </p>
          </div>
 
        </div>
            <Flex justify="center" align="center" w="full" p={4}>

          <Image  
                      w={{ base: "60%", md: "80%", lg: "50%" }} // responsive width
                      h="auto"
                      objectFit="cover"
                      borderRadius="lg" src="./ss.png"/>
        </Flex>
                 
      </section>

      <section id="pricing" className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
              Complete Hardware & Software Packages
            </h2>
            <p className="text-lg text-muted-foreground text-pretty mb-10">
              Choose the solution that fits your facility size
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-emerald-600 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance mb-4">
              Ready to modernize your employee management?
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-emerald-600 hover:bg-white/90 px-8 font-semibold"
              >
                Request Demo @azoosheikh713@gmail.com
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">RFIDTRACK Pro</h3>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                 IoT-based RFID employee management system designed by Undergrad Electronic Engineer with Expertise In Internet Of Things.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    Hardware Specs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    Integration Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    Security Features
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm">© 2024 RFIDTrack Pro. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
