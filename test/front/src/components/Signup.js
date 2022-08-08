
import "./signup.css"
import image from "./signup-photo.jpeg"
import {Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Signup = () => {
	const navigate = useNavigate();
	const initialFormData = Object.freeze({
	fullname:'',
    adress:'',
    email: '',
	password: '',
	});


	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});};
    

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		fetch('user/signup/', {
        fullname:formData.fullname,
        adress:formData.adress,

        email:formData.email,
		password: formData.password,
			})
			.then((res) => {
				navigate('/profil');
				//console.log(res);
				//console.log(res.data);
			});
	};
    return ( <>
   <body class="form-v5">
	<div class="page-content">
		<div class="form-v5-content">
			<form class="form-detail" action="#" method="post">
				<h2>Formulaire d'enregistrement de compte</h2>
				<div class="form-row">
					<label for="full-name">Nom et Prénom</label>
					<input type="text" name="fullname" id="fullname" class="input-text" placeholder="votre nom et prénom"   required  onChange={handleChange}/>
					<i class="fas fa-user"></i>
				</div>
				<div class="form-row">
					<label for="your-email">Adresse email</label>
					<input type="text" name="email" id="email" class="input-text" placeholder="votre Adresse email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"  onChange={handleChange}/>
					<i class="fas fa-envelope"></i>
				</div>
                <div class="form-row">
					<label for="your-email">Adresse </label>
					<input type="text" name="adress" id="adress" class="input-text" placeholder="votre Adresse"  onChange={handleChange}/>
					<i class="fas fa-envelope"></i>
				</div>
				<div class="form-row">
					<label for="password">Password</label>
					<input type="password" name="password" id="password" class="input-text" placeholder="votre mot de passe" required  onChange={handleChange}/>
					<i class="fas fa-lock"></i>
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="S'inscrire" onClick={handleSubmit}/>
				</div>
			</form>
		</div>
	</div>
</body>
</> );
}
 
export default Signup;