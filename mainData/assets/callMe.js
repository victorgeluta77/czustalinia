
const callMe = document.querySelector('.cz_linia_call_me');

function callMeNow(){
    const callMeForm = `
            <form action="" method="" class="cz_lin_call_form_elem">
                <input type="text" name="" id="phone-number" placeholder="Введіть ваш номер телефону">
                <button type="submit">Замовити дзвінок</button>
            </form>
        `
    const div = document.createElement('div');
           div.className = "cz_lin_call_form";    
        div.insertAdjacentHTML('beforeend',callMeForm);
        callMe.append(div);

        document.addEventListener('click',(e)=>{
             const callTarget = e.target.closest('.cz_linia_call_me');
             if (!callTarget)div.remove();
        }) 
}

callMe.addEventListener('click',callMeNow);