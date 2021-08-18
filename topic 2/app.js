const clr = JSON.parse(localStorage.getItem('clr')) || [];
function Changecolor() {
    var red = document.getElementById('rangeRed').value;
    var blue = document.getElementById('rangeBlue').value;
    var green = document.getElementById('rangeGreen').value;
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    clr[0] = color;
    localStorage.setItem('clr', JSON.stringify(clr));

    var light_id;
    if (document.getElementById('ligh1').checked) {

        document.getElementById('light1').style.backgroundColor = clr[0];

    }
    else if (document.getElementById('ligh2').checked) {

        document.getElementById('light2').style.backgroundColor = clr[0];

    }
    else if (document.getElementById('ligh3').checked) {

        document.getElementById('light3').style.backgroundColor = clr[0];

    }
    else if (document.getElementById('ligh4').checked) {

        document.getElementById('light4').style.backgroundColor = clr[0];
    }
    else {

    }
}