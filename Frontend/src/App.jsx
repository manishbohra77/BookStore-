import Course from "./components/Course"
import Signup from "./components/Signup"
import Courses from "./courses/Courses"
import Home from "./Home/Home"
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
   <>
   {/* <Home/>
   <Course/> */}


<div className="dark:bg-slate-900 dark:text-white">
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

</div>
     
   </>
  )
}
export default App
