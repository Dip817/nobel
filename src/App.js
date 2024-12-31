import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutComponent from './components/AboutComponent'
import Principles from './components/Principles'
import ProgrammeComp from './components/ProgrammeComp'
import Gallery from './components/Gallery';
import Contactform from './components/Contactform'
import ContactUs from './components/contact/ContactUs';
import Footer from './components/Footer'
import AdmissinForm from './components/AdmissionForm';
import Trial from './components/Trial'
// import AboutPage from './components/about/AboutPage';
import About from './components/about/About';
function App() {
  const router = createBrowserRouter([      
    {
      path:'/',
      element:<>
        <Navbar/> 
        <Banner/>     
        <AboutComponent/>
        <Principles/>
        <ProgrammeComp/>
        <Gallery/>
        <Contactform/>
        <Footer/>
      </>
    }, 
    {
      path:'/about',
      element:<>
        <Navbar/> 
        <About/>
        <Footer/>
      </>
    }, 
    {
      path:'/contactus',
      element:<>
        <Navbar/> 
        <ContactUs/>
        <Footer/>
      </>
    }, 
    {
      path:'/admission',
      element:<>
        <Navbar/> 
        <AdmissinForm/>
        <Footer/>
      </>
    }, 
    {
      path:'/download-admission-form',
      element:<>
        <Navbar/> 
        <Trial/>
        <Footer/>
      </>
    }, 
  ])
  return (
    <>
        <RouterProvider router={router}/>
        </>
  );  
}
export default App;
