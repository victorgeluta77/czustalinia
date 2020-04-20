document.addEventListener('click',function(event){
    for(let i=1;i<8;i++){
        if (i==event.target.id){
            let strId = 'info'+i;
            document.getElementById(strId).style.display = 'block';
        }
         else {
            let strId = 'info'+i;
             document.getElementById(strId).style.display = 'none';
         }
    }
})