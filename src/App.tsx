
import './index.css'
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Landing from './landing'
import Navigationlayout from './navigationlayout'
import Buy from './buy'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigationlayout/>}>
      <Route  index element={<Landing/>}></Route>
      <Route path='/buy?' element={<Buy/>}></Route>
   </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
