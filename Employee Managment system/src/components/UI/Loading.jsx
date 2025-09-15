// import React from 'react'
// import { Spinner } from "@chakra-ui/react"

// const Loading = () => {
//   return (
//       <>
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-xl">
//           Loading..
//         </div>
        
//       </div> 
//       </>
//   )
// }

// export default Loading



import { Wifi, Shield, BarChart3, Zap } from "lucide-react"
import { Spinner } from "@chakra-ui/react"

export default function LoadingPage() {
  return (
    <div
      className="min-h-screen flex items-center overflow-hidden" 
    >
          <div className="relative z-10 text-center max-w-md mx-auto px-6">
    
                     <div className="flex-shrink-0 relative 0" >
              <div
                className="left-10 w-14 h-14 border-2 rounded-full animate-spin"
                style={{ borderColor: "rgba(0, 0, 0, 0.3)", borderTopColor: "#ffffff" }}
              ></div>

              <h1 className="text-md font-semi-bold mb-7" style={{ color: "#000000" }}>Loading...</h1>

        </div>
        
 
   </div>
   </div>
  )
}
