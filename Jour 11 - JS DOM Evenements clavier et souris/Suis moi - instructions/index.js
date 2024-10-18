// Faire en sorte que l'élément ayant la classe .js-diddle suive la souris
// lorsque celle-ci bouge


 let imgDOM = document.querySelector('.js-diddle');
 console.log ("image",imgDOM)

document.addEventListener('DOMContentLoaded', function() {
console.log ("test")
    document.addEventListener('mousemove', function(event) {
        console.log(event);
        let x = event.clientX;
        let y = event.clientY;
        
       
        imgDOM.style.left = x + 'px';
        imgDOM.style.top = y + 'px';
    });

});
