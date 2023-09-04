import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import GridItems from "./components/GridItems";
import Footer from "./Footer";



function App() {
  return (
   <>
   <NavigationBar></NavigationBar>
   <Banner></Banner>
   
   <div className="bg-dark p-5">
      <div className="container">
        <h1 className="text-warning">Top 5 Animes of the week</h1>
         <div className="row">
          <GridItems name="Image 1" imageFile={Image1} desc="lorem Ipusm pusit"></GridItems>
          <GridItems name="Image 2" imageFile={Image2} desc="lorem Ipusm pusit" ></GridItems>
          <GridItems name="Image 3" imageFile={Image3} desc="lorem Ipusm pusit"></GridItems>
          <GridItems name="Image 4" imageFile={Image4} desc="lorem Ipusm pusit"></GridItems>
          <GridItems name="Image 5" imageFile={Image5 } desc="lorem Ipusm pusit"></GridItems>
            {/* Name can be different depending on title */}
          
      </div>
      </div>
     
   </div>
   <Footer></Footer>
   </>
  );
}

export default App;
