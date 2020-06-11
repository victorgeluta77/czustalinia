const responsMess = document.querySelector('.cz_lin_respons_form');
 responsMess.addEventListener('submit',(e)=>{
    e.preventDefault();
     let template_params = {
        "name": e.target[0].value,
        "email" : e.target[1].value,
        "message": e.target[2].value,
        "phone" : '-',
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
    for(let i = 0; i<e.target.length;i++ ){
        e.target[i].value = '';
    }  
   
 })