import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contactform from './components/Contactform'
function App() {
  const router = createBrowserRouter([      
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
