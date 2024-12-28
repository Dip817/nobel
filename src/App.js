import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AdmissionForm from './components/AdmissionForm';
import Trial from './components/Trial';
function App() {
  const router = createBrowserRouter([      
    {
      path:'/',
      element:<>
        <AdmissionForm/>       
      </>
    },  
    {
      path:'/trial',
      element: <>
        <Trial/>
      </>
    }  
  ])
  return (
    <>
        <RouterProvider router={router}/>
        </>
  );  
}
export default App;
