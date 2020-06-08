
const callMe = document.querySelector('.cz_linia_call_me');
const socialIcon = document.querySelector('.cz_linia_social_icon');

function callMeNow(){
      
    const callMeForm = `
            <form action="" method="" class="cz_lin_call_form_elem">
                <input type="text" name="phone" id="phone-number" placeholder="Введіть ваш номер телефону">
                <button type="submit">Замовити дзвінок</button>
            </form>
        `
    const callForm = document.querySelector('.cz_lin_call_form');
    
    if (!callForm){
        const div = document.createElement('div');
        div.className = "cz_lin_call_form";    
        div.insertAdjacentHTML('beforeend',callMeForm);
        socialIcon.prepend(div);
        callMe.style.transform = 'scale(1)';

        const callFormElem = document.querySelector('.cz_lin_call_form_elem');
        callFormElem.addEventListener('submit',(e)=>{
            e.preventDefault();
            const template_params = {
                "phone":e.target[0].value,
            }
            // console.log(template_params);
            const service_id = "default_service";
           const template_id = "template_xZwzKvuC";
           emailjs.send(service_id, template_id, template_params)
            .then(function(response) {
               if (response.status == 200) alert('Номер телефону успішно відісланий. Очікуйте на дзвінок ! ');
            // console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
             alert('FAILED...', error);
            console.log('FAILED...', error);
             });
            const callForm = document.querySelector('.cz_lin_call_form');
            callForm.remove();
        })
    } else {
        callForm.remove();
    }
    };


callMe.addEventListener('click',callMeNow);