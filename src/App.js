import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import Newproject from './Components/pages/Newproject';
import Projects from './Components/pages/Projects';
import Project from './Components/pages/Project';

import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/newproject' element={<Newproject/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/project/:id' element={<Project/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
