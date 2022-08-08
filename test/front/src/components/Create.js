import "./Create.css"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Create = () => {
    const history = useNavigate();
	const initialFormData = Object.freeze({
    
		title: '',
		date: '',
        eventypes:'',
		uploads:'',
		description: '',
    //status:'published',
	});
    const [formData, updateFormData] = useState(initialFormData);
    const handleChange = (e) => {
		if ([e.target.name] == 'title') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
				
			});
		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		fetch('admin/create/', {
                
				title: formData.title,
				date: formData.date,
                eventtype:formData.eventtype,
				description: formData.description,
        //status: formData.status,
			})
			.then((res) => {
                console.log(res)
				history('/profil');
        window.location.reload()
			});
	};
    
    return ( <><body>
        <div class="page-wrapper  p-t-100 p-b-50" style={{backgroundColor:"#5eb2b3"}}>
            <div class="wrapper wrapper--w900">
                <div class="card card-6">
                    <div class="card-heading">
                        <h2 class="title">Ajouter un évènement</h2>
                    </div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="form-row">
                                <div class="name">Titre</div>
                                <div class="value">
                                    <input class="input--style-6" type="text" name="full_name" onChange={handleChange}/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Type évènement:</div>
                                <div class="value">
                                    <div class="input-group">
                                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                        <h6 class="mb-0 me-4"> </h6>
                                        <div class="form-check form-check-inline mb-0 me-4">
                                            <input class="form-check-input" type="radio" name="eventypes" id="sportif" 
                                            value="sportif" onChange={handleChange}/>
                                            <label class="form-check-label">Sportif </label>
                                        </div>
                                        <div class="form-check form-check-inline mb-0">
                                            <input class="form-check-input" type="radio" name="eventypes" id="culturel" 
                                            value="sportif" onChange={handleChange}/>
                                            <label class="form-check-label" >culturel</label>
                                        </div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Date</div>
                                <div class="value">
                                    <input style={{margin : "20px"}} type="datetime-local" name="datetime" onChange={handleChange}/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Description</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="Décrivez votre événement" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Télécharger des photos</div>
                                <div class="value">
                                    <div class="input-group js-input-file">
                                        <input class="input-file" type="file" name="file_cv" id="file"/>
                                        <label class="label--file" for="file">Choisir le fichier</label>
                                        <span class="input-file__info">Aucun fichier choisi</span>
                                    </div>
                                    <div class="label--desc">Télécharger des photos qui décrivent l'événement</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn--radius-2 btn--blue-2" type="submit" onClick={handleSubmit}>Ajouter évènement</button>
                    </div>
                </div>
            </div>
        </div>
        </body> 
        </> );
}
 
export default Create;

