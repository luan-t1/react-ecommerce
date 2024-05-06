import "./style.css";
import GenericCard from "../../fragments/genericCard";
import Foto1 from './assets/Foto1.png';
import Foto2 from './assets/Foto2.png';
import Foto3 from './assets/Foto3.png';


export default function Browse() {
    return(
        <div>
            <div id="browse-title">
                <h2>Browse The Range</h2>
                <div id="browse-container">
                    <div className="card-generico">
                        <GenericCard
                        title="Dining"
                        img={Foto1}
                        category="1"
                        />
                    </div>
                    <div className="card-generico">
                        <GenericCard 
                        title="Living"
                        img={Foto2}
                        category="2"
                        />
                    </div>
                    <div>
                        <GenericCard 
                        title="Bedroom"
                        img={Foto3}
                        category="3"
                        />
                    </div>   
                </div>  
            </div>
        </div>
    );
}