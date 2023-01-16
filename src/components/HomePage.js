import React from 'react';
import PlantCatalogue from './PlantCatalogue';


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
       <div className="bck-img2"></div>
       
      </div>
    </div>
);
}
export default HomePage;