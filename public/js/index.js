const counters = document.querySelectorAll('.value');
const speed = 100;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('target');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 2);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


var typed=new Typed(".auto-type",{
  strings: ["#Import", "#Export"],
  typeSpeed:140,
  backSpeed:140,
  loop:true
});

const pop=setTimeout(()=>
{
  $('#signup').click();

},5000);
pop();


