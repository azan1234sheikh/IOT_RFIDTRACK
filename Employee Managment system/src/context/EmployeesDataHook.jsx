import React, { useEffect,useState,useCallback } from 'react'
import { Auth,RTdatabase } from '../components/firebase'
import { ref, set, push,get, child, onValue } from "firebase/database";

const EmployeesDataHook = () => {
    const [employeeData,setemployeeData] = useState([]);
    const [loading, setloading] = useState(true);
    const [employeeroot,setemployeeroot]=useState();
    const [deviceData, setdeviceData] = useState(false);
    useEffect(() => {
  setloading(true);

  const dbRef = ref(RTdatabase, '/');
  const devicedata=ref(RTdatabase,'/Status');
  const unsubscribe = onValue(dbRef, (snapshot) => {
    const data = snapshot.val() || {};
    const employeesArray = Object.keys(data).map(uid => {
      const emp = data[uid];
      let rfidArray = [];

      if (emp.rfidIndex && typeof emp.rfidIndex === "object") {
        rfidArray = Object.entries(emp.rfidIndex).map(([key, value]) => ({
          firebaseKey: key,
          ...value,
        }));
      }

      return {
        uid,
        ...emp,
        rfidIndex: rfidArray,
      };
    });
    setemployeeData(employeesArray);
    setloading(false); 
  });
  const deviceStatus=onValue(devicedata,(snapshot)=>{
    const val = snapshot.val()||{};
    setdeviceData(val.Active);
    console.log(deviceData)
  })
  return () => unsubscribe(),()=>deviceStatus();
}, []);

    return {employeeData,loading,employeeroot,deviceData};
  
}

export default EmployeesDataHook
