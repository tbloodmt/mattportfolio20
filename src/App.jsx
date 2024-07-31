import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Root from "./components/Root"
import About from "./components/About"
import Contact from "./components/Contact"
import Work from "./components/Work"
import Resume from "./components/Resume"
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
<Route index element={<About/>}/>
<Route path="/work" element={<Work/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/resume" element={<Resume/>}/>

      </Route>
    )
  )

  return (
   <>
   <RouterProvider router={router}>

   </RouterProvider>
   </>
  )
}

export default App
