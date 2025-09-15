import { ref, set} from "firebase/database";
import { Auth, RTdatabase } from "./components/firebase.js";
import { employees } from "./employeeData.js";
const seedData =async () => {
    try {
        // Iterate over your employees array and set each employee data in Firebase
        for (const emp of employees) {
          // Use a unique key (for example, employee id) for each record
          await set(ref(RTdatabase, "employee/"), emp);
        }
        console.log("Employees seeded successfully.");
      } catch (error) {
        console.error("Error seeding employees:", error);
      }
    
}

seedData();
