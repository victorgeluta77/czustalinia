let wrapper = document.querySelector(".cz_linia_wrapper");
let text = document.querySelector(".cz_linia_text");
// console.log(text.textContent);

// let textCont = text.textContent;
let textCont = text.textContent;
// text.style.display = "none";
let countring =  0;
for (let i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      let texts = document.createTextNode(textCont[i])
      let span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);
     if (i == textCont.length-1)wrapper.style.textAlign = 'center';
    }, 75 * i);
  }(i));
}
