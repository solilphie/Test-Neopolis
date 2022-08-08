import "./Profil.css"
import run from "./run.png"

import {Link } from "react-router-dom";
const Profil = () => {
    return (<>
    <center style={{"margin" : "20px"}}><div className id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                      </div>
                      <h6 className="f-w-500" >Profile</h6>
                      <h6 className="f-w-600" ></h6>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Non et prénom </p>
                          <h6 className="text-muted f-w-400"></h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400"></h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Adress</p>
                          <h6 className="text-muted f-w-400"></h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">événements publiés récemment </p>
                          <h6 className="text-muted f-w-400">2</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></center>
      <h1 className="text-center mb-5 wow fadeInUp"  style={{fontSize:'30px',margin:'20px'}} >vos événements publiés récemment</h1>
      <center><Link to={"/create"} ><h1 style={{fontSize:'20px',margin:'20px'}} >Ajouter un événement</h1> </Link></center>
      <div class="container py-5">
    <div class="row text-center text-white mb-5">

        
    </div>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            
            <ul class="list-group shadow">
             
                <li class="list-group-item">
                   
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">Zumba RunCenter</h5>
                            <p class="font-italic text-muted mb-0 small">Faites l'expérience du RUNCENTER ! Dirigé par des instructeurs Zumba® agréés, ce cours va transformer votre vie. Inscrivez-vous pour l'événement de votre vie !
Que vous soyez novice en matière d'exercice, que vous vous entraîniez pour un événement ou que vous repreniez un programme de remise en forme, la Zumba® est un excellent complément à votre programme d'entraînement. Adapté à tous les niveaux, ce cours utilise des rythmes latins et du monde entier pour mélanger des mouvements de faible et de forte intensité pour une fête de fitness par intervalles, qui brûle des calories. Aucune expérience préalable n'est nécessaire. Apportez simplement votre amour du fitness et de la musique !
Les participants doivent porter des baskets pour ce cours. Vous devez également avoir une bouteille d'eau et une serviette à portée de main.
Le cours commence à l'heure pile. Prévoyez d'arriver quelques minutes à l'avance pour avoir le temps de vous installer.</p>
                            
                        </div><img src={run} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                    </div> 
                </li> 
                
                
               </ul>
        </div>
    </div>
</div>
 </>);
}
 
export default Profil;