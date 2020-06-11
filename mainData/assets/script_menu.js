// make menu for a section "Pruburannja"
cz_lin_poslygu.addEventListener('mouseenter',function(event){
    // console.log(event.target.id);
    if(event.target.id == 'cz_lin_poslygu' && (cz_lin_poslygu_menu.style.display == 'none' || cz_lin_poslygu_menu.style.display == ''))
    {
        cz_lin_poslygu_menu.style.display='block';
    };
});
cz_lin_poslygu.addEventListener('mouseleave',()=>{
    cz_lin_poslygu_menu.style.display="none";
})
// in the end for a section "Pruburannja"
// make menu for a section "Pro Nas"
cz_lin_about_us.addEventListener('mouseenter',function(event){
    if(event.target.id == 'cz_lin_about_us' && (cz_lin_about_us_menu.style.display == 'none' || cz_lin_about_us_menu.style.display == ''))
    {
        cz_lin_about_us_menu.style.display='block';
    } ;
});
cz_lin_about_us.addEventListener('mouseleave',(event)=>{
    cz_lin_about_us_menu.style.display="none"
});

// end for a section "Pro Nas"

// control code
// cz_lin_nav.addEventListener('mouseover',(e)=>{
//         console.log(e.target.id);
// })