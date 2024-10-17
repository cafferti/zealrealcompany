
import Nav from './Nav'
import Footer from './footer'
import { Outlet} from 'react-router-dom'

function navigationlayout() {
  return (
    
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default navigationlayout