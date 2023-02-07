import React from 'react';
import PlantCatalogue from './PlantCatalogue';
import Features from './Features';
import FeatureProducts from './FeatureProducts';
import Newsletter from './Newsletter';
import Footer from './Footer';


const HomePage = () => {
    return (
   <div>
      <div className="bck-img">
        <div className="qoutes-ctn">
            <div><h1 className="qoutes-blck"> Start Your Plant Journey <br/> This New Year </h1></div> 
            <div> <h4> Beginner-friendly plants to help you check off that <br />
                New Year's Resolution. Shipped directly from our <br/> 
                    greenhouse and guaranteed for 30days.</h4></div>
        </div>
       <div> <PlantCatalogue /> </div>
      </div>
     <div className="bck-img2"></div>
     
     <div> <Features /> </div>

     <div> <FeatureProducts /> </div>

     <div id="banner2" className='ban-ctn'> 
            <h4>Repair Services</h4>
            <h2> Up to <span> 70% Off</span> - All T-shirts and Accessories</h2>
            <button className='normal'>Explore More</button>
     </div>
     <div className='banner3-ctn'>
         <div id="banner3" className='banner3'> 
            <h4>Repair Services</h4>
            <h2> Up to <span> 70% Off</span> - All T-shirts and Accessories</h2>
            <button className='normal'>Learn More</button>
         </div>
         <div id="banner3" className='banner3'> 
            <h4>Repair Services</h4>
            <h2> Up to <span> 70% Off</span> - All T-shirts and Accessories</h2>
            <button className='normal'>Learn More</button>
         </div>
     </div>
     
     <div> <Newsletter /> </div>
     <div> <Footer /> </div>
    </div>
);
}
export default HomePage;