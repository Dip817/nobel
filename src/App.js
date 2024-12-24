import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
function App() {
  const router = createBrowserRouter([      
    {
      path:'/contact',
      element:<>
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
