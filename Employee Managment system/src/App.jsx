// //my-Written-One
// import React, { useContext, useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useNavigate, Link as RouterLink } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import LandingPage from './components/Pages/LandingPage';
// import AuthProvider, { AuthContext } from "./context/AuthProvider";
// import Attendance from "./components/UI/Attendance";
// import "./index.css";
// import CreateTask from "./components/UI/CreateTask";
// import Dashboard from "./components/UI/Dashboard";
// import { toast, ToastContainer } from 'react-toastify';
// import { Auth, RTdatabase } from "../src/components/firebase";

// import Register from "./components/Auth/Register";
// import Employeeinfo from "./components/UI/Employeeinfo";
// // import { useAuth } from './context/AuthProvider';

// const App = () => {
//   // const [User, setUser] = useState(null);
//   // const [LoggedInUser, setLoggedInUser] = useState(null);
//   // const [arrData, setArrData] = useState(null);
// const {user, loading} = useContext(AuthContext);
  
//   if (loading) return <div>Loading...</div>;
//     // Critical fix: Add this check to prevent redirect loops
//   const isLoginPage = window.location.pathname === '/login';
//   const isLandingPage = window.location.pathname === '/';

//   // temp_fn()
//    console.log(user);

//   // const handleLogin = async (email, password, navigate) => {
//   //   try {  
//   //     if (email === "admin@example.com" && password==="123" ) {
//   //       console.log("Admin login detected.");
//   //       localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
//   //       navigate("/admin");
//   //       return;
//   //     } 
//   //       const userCredential = await signInWithEmailAndPassword(Auth, email, password);
//   //       const user = userCredential.user;
//   //       console.log("Logged in user:", user.email);
//   //       console.log("Logged in user:", user.uid);

//   //       const snapshot = await get(ref(RTdatabase, user.uid));
  
//   //       if (snapshot.exists()) {
//   //         const employeesObj = snapshot.val();
//   //          const arrObj=[employeesObj];
//   //          const employeeEntry = arrObj.find((emp)=>emp.email ===user.email);
//   //         console.log("Found employee entry:", employeeEntry);  
  
//   //         if (employeeEntry) {
//   //           setArrData([employeeEntry]);
//   //           // Save employee data to localStorage
//   //           localStorage.setItem(
//   //             "LoggedInUser",
//   //             JSON.stringify({ role: "employee", data: [employeeEntry] })
//   //           );
//   //           navigate("/employee");
           
//   //         } else {
//   //           console.error("Employee with the given email not found.");
//   //           toast.error("Employee email not registered.");
//   //         }
//   //       } else {
//   //         console.error("Employee data not found.");
//   //         toast.error("Employee data not found.");
//   //       }
      
//   //   } catch (error) {
//   //     toast.error("Login failed: " + error.message);
//   //   }
//   // };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//          <Route path="/" element={<LandingPage />} />
//          <Route path="/login" element={!user ? <Login /> : <Navigate to={user.role === 'Admin' ? '/admin' : '/employee'} replace />}/>
//          <Route path="/admin" element={ user?.role === "Admin" ? <AdminDashboard  />: <Navigate to="/login" /> } replace />
//          <Route path="/employee" element={ user?.role === "employee" ?  <EmployeeDashboard  />   : <Navigate to="/login" />}replace />
//          {/* <Route path="*" element={<Navigate to={user? (user.role === "Admin" ? "/admin" : "/employee") : "/login"} />}/> */}
//          {user && (
//           <>
//             <Route path="/attendance" element={<Attendance />} />
//             <Route path="/EmployeeInfo" element={<Employeeinfo />} />
//             <Route path="/CreateTask" element={<CreateTask />} />
//             <Route path="/Dashboard" element={<Dashboard />} />
//           </>
//         )}
//         {/* Safe fallback route */}
//         <Route 
//           path="*" 
//           element={
//             user 
//               ? <Navigate to={user.role === "Admin" ? "/admin" : "/employee"} replace /> 
//               : (isLoginPage || isLandingPage ? null : <Navigate to="/login" replace />)
//           } 
//         />
//       </Routes>
//       <ToastContainer />
//     </Router>
//   );
// };
// const temp_fn=async()=>{
//             await Auth.signOut();
      
//     }
// export default App;


// // import React, { useContext } from "react";
// // import { BrowserRouter as Router, Routes, Route  , Navigate  // Add this import
// // } from "react-router-dom";
// // import { AuthContext } from "./context/AuthProvider";
// // import Login from "./components/Auth/Login";
// // import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// // import AdminDashboard from "./components/Dashboard/AdminDashboard";
// // import LandingPage from './components/Pages/LandingPage';
// // import Attendance from "./components/UI/Attendance";
// // import CreateTask from "./components/UI/CreateTask";
// // import Dashboard from "./components/UI/Dashboard";
// // import { toast, ToastContainer } from 'react-toastify';
// // import Register from "./components/Auth/Register";
// // import Employeeinfo from "./components/UI/Employeeinfo";
// // import { useNavigate, Link as RouterLink } from "react-router-dom";

// // const App = () => {
// //   const { userData, loading } = useContext(AuthContext);
// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public routes */}
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/login" element={!userData ? <Login /> : <NavigateToDashboard role={userData.role} />} />
// //         <Route path="/register" element={<Register />} />
        
// //         {/* Protected admin routes */}
// //         {userData?.role === "Admin" && (
// //           <>
// //             <Route path="/admin" element={<AdminDashboard />} />
// //             <Route path="/attendance" element={<Attendance />} />
// //             <Route path="/EmployeeInfo" element={<Employeeinfo />} />
// //             <Route path="/CreateTask" element={<CreateTask />} />
// //           </>
// //         )}
        
// //         {/* Protected employee routes */}
// //         {userData?.role === "employee" && (
// //           <>
// //             <Route path="/employee" element={<EmployeeDashboard />} />
// //             <Route path="/Dashboard" element={<Dashboard />} />
// //           </>
// //         )}
        
// //         {/* Fallback routes */}
// //         <Route path="*" element={
// //           userData ? 
// //             <Navigate to={userData.role === "Admin" ? "/admin" : "/employee"} /> : 
// //             <Navigate to="/login" />
// //         } />
// //       </Routes>
// //       <ToastContainer />
// //     </Router>
// //   );
// // };

// // // Helper component to prevent redirect loops
// // const NavigateToDashboard = ({ role }) => {
// //   return role === "Admin" ? 
// //     <Navigate to="/admin" replace /> : 
// //     <Navigate to="/employee" replace />;
// // };

// // export default App;



// // import React, { useContext } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import { AuthContext } from "./context/AuthProvider";
// // import Login from "./components/Auth/Login";
// // import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// // import AdminDashboard from "./components/Dashboard/AdminDashboard";
// // import LandingPage from './components/Pages/LandingPage';
// // import Attendance from "./components/UI/Attendance";
// // import CreateTask from "./components/UI/CreateTask";
// // import Dashboard from "./components/UI/Dashboard";
// // import { ToastContainer } from 'react-toastify';
// // import Register from "./components/Auth/Register";
// // import Employeeinfo from "./components/UI/Employeeinfo";
// // import "react-toastify/dist/ReactToastify.css";

// // const App = () => {
// //   const { userData, loading } = useContext(AuthContext);

// //   // Show loading state until auth check completes
// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center h-screen">
// //         <div className="text-xl">Loading application...</div>
// //       </div>
// //     );
// //   }

// //   // Helper function to determine dashboard path
// //   const getDashboardPath = () => {
// //     if (!userData) return "/login";
// //     return userData.role === "Admin" ? "/admin" : "/employee";
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public routes */}
// //         <Route path="/" element={<LandingPage />} />
// //         <Route 
// //           path="/login" 
// //           element={!userData ? <Login /> : <Navigate to={getDashboardPath()} replace />} 
// //         />
// //         <Route path="/register" element={<Register />} />
        
// //         {/* Protected routes */}
// //         <Route 
// //           path="/admin/*" 
// //           element={
// //             userData?.role === "Admin" 
// //               ? <AdminDashboard /> 
// //               : <Navigate to="/login" state={{ from: location }} replace />
// //           } 
// //         />
        
// //         <Route 
// //           path="/employee/*" 
// //           element={
// //             userData?.role === "employee" 
// //               ? <EmployeeDashboard /> 
// //               : <Navigate to="/login" replace />
// //           } 
// //         />
        
// //         {/* Common protected routes */}
// //         <Route 
// //           path="/attendance" 
// //           element={userData ? <Attendance /> : <Navigate to="/login" replace />} 
// //         />
        
// //         {/* Fallback route */}
// //         <Route 
// //           path="*" 
// //           element={<Navigate to={getDashboardPath()} replace />} 
// //         />
// //       </Routes>
// //       <ToastContainer position="bottom-right" autoClose={3000} />
// //     </Router>
// //   );
// // };

// // export default App;

import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import LandingPage from './components/Pages/LandingPage';
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import Attendance from "./components/UI/Attendance";
import CreateTask from "./components/UI/CreateTask";
import Dashboard from "./components/UI/Dashboard";
import Register from "./components/Auth/Register";
import Employeeinfo from "./components/UI/Employeeinfo";
import { ToastContainer } from 'react-toastify';
import { Auth, RTdatabase } from "../src/components/firebase";
import Loading from "./components/UI/Loading";
import Help from "./components/UI/Help";
import "./index.css";
import Settings from "./components/UI/Settings";

const AppContent = () => {
  const { user, loading } = useContext(AuthContext);
  //  const logout=async()=>{    await Auth.signOut()}        
  //  logout()
  console.log("🖥️ AppContent render - User:", user, "Loading:", loading);
  if (loading) {
    return (
      <Loading/>
    );
  }

  const getRedirectPath = () => {
    if (!user) return "/login";
    return user.role === "Admin" ? "/Admin/dashboard" : "/Employee/dashboard";
  };

  console.log("Rendering routes, redirect path:", getRedirectPath());

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Auth Routes */}
        <Route 
          path="/login" 
          element={user ? <Navigate to={getRedirectPath()} replace /> : <Login />} 
        />
        
        <Route 
          path="/register" 
          element={user ? <Navigate to={getRedirectPath()} replace /> : <Register />} 
        />

        {/* Protected Routes */}
        <Route 
          path="/Admin/dashboard" 
          element={
            user?.role === "Admin" ? 
              <AdminDashboard /> : 
              <Navigate to="/login" replace />
          } 
        />
        
        <Route 
          path="/Employee/dashboard" 
          element={
            user?.role === "Employee" ? 
              <EmployeeDashboard /> : 
              <Navigate to="/login" replace />
          } 
        />

        {/* Additional Protected Routes - Only render if user exists */}
        {user?user.role==="Admin" && (
          <>
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/EmployeeInfo" element={<Employeeinfo />} />
            <Route path="/CreateTask" element={<CreateTask />} />
            <Route path="/Admin/dashboard" element={<Dashboard />} />
            <Route path="/Settings"element={<Settings/>}/>
          </>
        ):<>          
            <Route path="/Employee/dashboard" element={<EmployeeDashboard />} />
        </>}
                    <Route path='/Help' element={<Help/>}/>

        {/* Catch-all Route */}
        <Route 
          path="*" 
          element={<Navigate to={getRedirectPath()} replace />} 
        />
      </Routes>
      
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );

 
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;

// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import LandingPage from './components/Pages/LandingPage';
// import AuthProvider, { AuthContext } from "./context/AuthProvider";
// import Attendance from "./components/UI/Attendance";
// import "./index.css";
// import CreateTask from "./components/UI/CreateTask";
// import Dashboard from "./components/UI/Dashboard";
// import { ToastContainer } from 'react-toastify';
// import Register from "./components/Auth/Register";
// import Employeeinfo from "./components/UI/Employeeinfo";

// const AppContent = () => {
//   const { user, loading, isInitialized } = useContext(AuthContext);
  
//   // Don't render anything until Firebase auth is initialized
//   if (!isInitialized || loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<LandingPage />} />
        
//         {/* Auth routes - redirect if already logged in */}
//         <Route 
//           path="/login" 
//           element={
//             user ? (
//               <Navigate to={user.role === 'Admin' ? '/admin' : '/employee'} replace />
//             ) : (
//               <Login />
//             )
//           } 
//         />
        
//         <Route 
//           path="/register" 
//           element={
//             user ? (
//               <Navigate to={user.role === 'Admin' ? '/admin' : '/employee'} replace />
//             ) : (
//               <Register />
//             )
//           } 
//         />

//         {/* Protected Admin routes */}
//         <Route 
//           path="/admin" 
//           element={
//             user?.role === "Admin" ? (
//               <AdminDashboard />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           } 
//         />
        
//         {/* Protected Employee routes */}
//         <Route 
//           path="/employee" 
//           element={
//             user?.role === "employee" ? (
//               <EmployeeDashboard />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           } 
//         />

//         {/* Protected shared routes - available to authenticated users */}
//         {user && (
//           <>
//             <Route path="/attendance" element={<Attendance />} />
//             <Route path="/EmployeeInfo" element={<Employeeinfo />} />
//             <Route path="/CreateTask" element={<CreateTask />} />
//             <Route path="/Dashboard" element={<Dashboard />} />
//           </>
//         )}

//         {/* Catch-all route */}
//         <Route 
//           path="*" 
//           element={
//             user ? (
//               <Navigate to={user.role === "Admin" ? "/admin" : "/employee"} replace />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           } 
//         />
//       </Routes>
//       <ToastContainer 
//         position="bottom-right" 
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </Router>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// };

// export default App;