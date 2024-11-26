
import './App.css';
//import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Explore from './components/explore/Explore';
import Review from './components/review/Review';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="works">
        <Work />
      </section>
      <section id="explore">
        <Explore />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact" class="my-5">
        <Contact />
      </section>



<Footer/>





{/* 
   
     <Router>
      <Navbar/>
      <Routes>
  
          {routes.map((route,index)=>(
            <Route key={index} path={route.path} element={route.element} ></Route>
          ))}
   
      </Routes>
     </Router> */}

    </div>
  );
}

export default App;
