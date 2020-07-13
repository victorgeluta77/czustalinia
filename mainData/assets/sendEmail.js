"use strict"
 const sendMess = document.querySelector('.cz_lin_contact_form');
 
 sendMess.addEventListener('submit',(event)=>{
    event.preventDefault();
     let template_params = {
        "name": event.target[0].value,
        "phone": event.target[1].value,
        "email": event.target[2].value,
        "message": event.target[3].value,
     }
     const service_id = "default_service";
     const template_id = "contact_and_respons";
     emailjs.send(service_id, template_id, template_params)
      .then(function(response) {
         if (response.status == 200) alert('Ваші дані надіслано. Дякуємо! ');
    //    console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
       alert('FAILED...', error);
      console.log('FAILED...', error);
       });
    for(let i = 0; i<event.target.length;i++ ){
        event.target[i].value = '';
    }  
   
 })

