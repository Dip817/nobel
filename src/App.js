import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contactform from './components/Contactform';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutComponent from './components/AboutComponent'
import Principles from './components/Principles'
import ProgrammeComp from './components/ProgrammeComp'
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
        <Contactform/>       
      </>
    },    
    {
      path:'/contact',
      element:<>
        <Contactform/>       
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
