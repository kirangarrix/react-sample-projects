import React,{useContext} from 'react'
import Tour from './Tour';
import { toursContext } from './App';
const Tours = () => {
     const Data=useContext(toursContext);
    return (
        <section>
            <div className="title">
                <h2>Ours Tour</h2>
                <div className="underline"></div>
            </div>
            <div>
                {Data.tours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} />
                })}
            </div>
        </section>
    )
}

export default Tours
