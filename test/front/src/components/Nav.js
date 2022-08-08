import profil from "./profil.png"
import image from "./logo.png"

import "./Nav.css"
import {Link } from "react-router-dom";
const Nav = () => {
    return ( <>
        <body>
		<div class="container">
			<nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"  id="ftco-navbar">
		    <div class="container">
		    	<a class="navbar-brand" href="/"><img src={image} style={{width:"80px" , height:"60px"}}/></a>
		     
		      
		      <div class="collapse navbar-collapse" id="ftco-nav">
		        <ul class="navbar-nav ml-auto mr-md-3">
		        	<li class="nav-item active"><Link to="/"  class="nav-link">Home</Link></li>
		        	<li class="nav-item"><Link to="/Signup" class="nav-link">Signup</Link></li>
		        	<li class="nav-item"><Link to="/Create"  class="nav-link">Create</Link></li>
		        	
		          <li class="dropdown nav-item d-md-flex align-items-center">
                <a href="/profil" class="dropdown-toggle nav-link d-flex align-items-center justify-content-center icon-cart p-0" id="dropdown04" data-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-shopping-cart"></i>
                  <b class="caret"></b>
                  <img src={profil} style={{width:"70px" , height:"50px"}}/>
                </a>
                
              </li>
		        </ul>
		      </div>
		    </div>
		  </nav>
    
  </div>
  
  </body>

   
   </> );
}
 
export default Nav;