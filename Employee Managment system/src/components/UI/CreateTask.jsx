
import React ,{useContext, useState,useCallback,useEffect}from 'react';
import { Auth,RTdatabase } from "../firebase"
import { ref, set, push,get,update } from "firebase/database";
import Header from './Header';
import { AuthContext } from '../../context/AuthProvider';
import { Stack,Box,Button } from '@chakra-ui/react';
import {colors} from "../../Colors"
import SideBar from './Sidebar';
import EmployeesDataHook from '../../context/EmployeesDataHook';
import { toast, ToastContainer } from 'react-toastify';
const  CreateTask = ({ Propdata ,changeUser}) => {
    // const [userData,setuserData] = useContext(AuthContext);
       const {employeeData,employeeroot,loading}= EmployeesDataHook();
      const [category, setcategory] = useState('');
      const [date, setdate] = useState('');
      const [AssignTo, setAssignTo] = useState('');
      const [taskDescription, settaskDescription] = useState('');
      const [TaskTitle, setTaskTitle] = useState('');
      const [Uid,setUid] = useState('');
      const [CurrentTime, setCurrentTime] = useState();
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const Realtime = new Intl.DateTimeFormat("en-PK", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(Realtime.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
   
    return () => clearInterval(interval);
  }, []);

      //   const filteredData = employeeData.find((user) => user?.firstName==="Ammad");
      // console.log(filteredData.uid)
  const OnSubmithandler=async(e)=>{
    e.preventDefault();
    const NewTask ={AssignTo,Uid,category,date,taskDescription,TaskTitle,Active:true,completed:false, failed :false,newTask:true};
      const filteredData = employeeData.find((user) => user?.firstName===AssignTo);
      const filteredUid = employeeData.find((user) => user?.Id===Uid);
      console.log(filteredUid)
      const CurrentUser = Auth?.currentUser;
      console.log(CurrentUser?.uid);
        if(filteredData?.uid===CurrentUser?.uid){
          toast.error("Cannot Assign Task to Admin");
          return 
        }
        if (filteredData?.uid && filteredUid?.uid) {
          console.log(filteredData?.uid);
          const userTaskRef =(ref(RTdatabase,`${filteredData?.uid}/task`));
          const snapshot = await get(userTaskRef);
          const currentTasks = snapshot.val() || []; // Default to empty array
          console.log(currentTasks);
          const UpdatedTasks= [...currentTasks,NewTask];
          await set(userTaskRef, UpdatedTasks);
          console.log('Updated tasks array:', UpdatedTasks.length);
          const taskNumbersRef = ref(RTdatabase,`${filteredData.uid}/taskNumbers`);
          const TaskNumSnap = await get(taskNumbersRef);
          const CurrentTask = TaskNumSnap.exists()?TaskNumSnap.val():{};
          console.log(CurrentTask);
         await update(taskNumbersRef,{active:(CurrentTask.active ?? 0)+1,  newTask: (CurrentTask.newTask ?? 0) + 1, completed:0, failed:0})
          toast.success("Assigned Task Success");
          setTaskTitle('');
          setdate('');
          setAssignTo('');
          setUid('');
          setcategory('');
      }else{
        toast.error("Enter Correct Employee Info");
        setTaskTitle('');
        setdate('');
        setAssignTo('');
        setUid('');
        setcategory('');
        settaskDescription('')
      }
  }
  return (
    <>

    <Stack bg="gray.100" direction={"row"}>
    <SideBar />
     <Box w="full" className='mt-5'>

     <Header changeUser={changeUser} CurrentTime={CurrentTime}  Propdata={Propdata} />

     <div className="w-full mt-1 p-4 sm:p-7  text-white">
                </div>
                <div  className="p-4 sm:p-5 mb-6 bg-white rounded shadow-lg">
                  <form onSubmit={(e)=>{OnSubmithandler(e)}} className="flex flex-wrap gap-6">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2">
                      <div>
                        <h3 className="text-lg font-semibold pb-1 text-emerald-400">
                          Task Title
                        </h3>
                        <input
                          type="text"
                          required 
                          value={TaskTitle}
                          onChange={(e)=>setTaskTitle(e.target.value)} 
                          placeholder="Make A UI Design"
                          className="rounded outline-none border border-gray-600 w-full lg:w-96 text-black text-sm py-2 px-3  focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="pt-5">
                        <h3 className="text-lg font-semibold pb-1 text-emerald-400">
                          Date
                        </h3>
                        <input
                          value={date} onChange={(e)=>setdate(e.target.value)}
                          type="date" required 
                          className="text-black rounded outline-none border border-gray-600 w-full lg:w-96 text-sm py-2 px-3  focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="pt-5">
                        <h3 className="text-lg font-semibold pb-1 text-emerald-400">
                          Assign To
                        </h3>
                        <input
                          type="text"
                          required 
                          value={AssignTo}
                          onChange={(e)=>setAssignTo(e.target.value)} 
                          placeholder="Designer, Developer"
                          className="rounded outline-none border border-gray-600 w-full lg:w-96 text-black text-sm py-2 px-3 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                        <div className="pt-5">
                        <h3 className="text-lg font-semibold pb-1 text-emerald-400">
                          Employee Uid
                        </h3>
                        <input
                          type="text"
                          required 
                          value={Uid}
                          onChange={(e)=>setUid(e.target.value)} 
                          placeholder="Enter Designated Employee Uid"
                          className="rounded outline-none border border-gray-600 w-full lg:w-96 text-black text-sm py-2 px-3 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="pt-5">
                        <h3 className="text-lg font-semibold pb-1 text-emerald-400">
                          Category
                        </h3>
                        <input
                          value={category}
                          required 
                        onChange={(e)=>setcategory(e.target.value)} 
                          type="text"
                          placeholder="Designing, Development"
                          className="rounded outline-none border border-gray-600 w-full lg:w-96 text-black text-sm py-2 px-3 focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-2/5 flex flex-col">
                      <h3 className="text-lg font-semibold mb-3 text-emerald-400">
                        Description
                      </h3>
                      <textarea
                      value={taskDescription}
                      onChange={(e)=>settaskDescription(e.target.value)} 
                      required 
                        className="w-full min-h-[300px] sm:h-40 text-sm py-3 px-4 rounded outline-none bg-[#fafafa] border border-gray-600 text-black focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter task description..."
                      ></textarea>
                      <Button
                       isLoading={loading}
                       type="submit"
                                         bg={colors.emerald600}
                                         color="white"
                                         size="lg"
                                         _hover={{ bg: colors.emerald700, transform: "translateY(-2px)" }}
                                         _active={{ bg: colors.emerald700 }}
                                         boxShadow={`0 4px 12px ${colors.emerald200}`}
                                         transition="all 0.2s"
                                         mt={4}
                      >
                        Create Task
                      </Button>
                    </div>
                  </form>
                </div>
     </Box>
             <ToastContainer />
       
    </Stack>
   
    </>
  );
};

export default CreateTask;
