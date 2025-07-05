let tlo = document.querySelector('body');
let prevKolor="#000000"
function cos(kolor){

    tlo.animate([

        {backgroundColor: prevKolor},
        {backgroundColor: kolor}
    ],{
        duration: 250,
        fill: 'forwards',
    }
)
    prevKolor = kolor;
}
//tlo.style.backgroundImage = `radial-gradient(circle at 50% 50%, #000000, ${kolor} 50%, #000000 100%)`