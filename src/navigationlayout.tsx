import Nav from './Nav';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './scrolltop';  // Import ScrollToTop

function Navigationlayout() {
  return (
    <div>
      <ScrollToTop />  
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigationlayout;
