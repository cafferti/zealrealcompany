
import './index.css'
import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Landing from './landing'
import Navigationlayout from './navigationlayout'
import Buy from './buy'
import Rent from './rent'
import Newbuilds from './newbuilds'
import Valuation from './Valuation'
import News from './news'
import Aboutteam from './aboutteam'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigationlayout/>}>
      <Route  index element={<Landing/>}></Route>
      <Route path='/buy?' element={<Buy/>}></Route>
      <Route path='/rent?' element={<Rent/>}></Route>
      <Route path='/newbuilds?' element={<Newbuilds/>}></Route>
      <Route path='/valuation?' element={<Valuation/>}></Route>
      <Route path='/news?' element={<News/>}></Route>
      <Route path='/contacts?' element={<Aboutteam/>}></Route>
      <Route path='/About?' element={<Aboutteam/>}></Route>

   </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
