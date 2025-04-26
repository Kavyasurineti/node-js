
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router.dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstarp.bundle.min";
import Layout from './templates/Layout';
import Home from './templates/Home';
import Profile from './templates/Profile';
import ContactUs from './templates/ContactUs';
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
    <route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="content" element={<ContactUs/>}/>
    </route>
    </Routes>
    </BrowserRouter>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


