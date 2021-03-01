


const bo =  document.querySelector('body');

const r = document.querySelector('#red');
const b = document.querySelector('#blue');
const c = document.querySelector('#green');



r.addEventListener('mouseover', () => {
    bo.style.backgroundColor = "red";
    

})

b.addEventListener('mouseover', () => {
    bo.style.backgroundColor = "blue";
    

});

c.addEventListener('mouseover', () =>{
    bo.style.backgroundColor = "green";
    
});


