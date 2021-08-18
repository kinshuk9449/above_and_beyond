$(document).ready(function(){
    $("#navbar").load("navbar.html");
});

$(document).ready(function(){
    $("#footer").load("copyright.html");
});
const devices = JSON.parse(localStorage.getItem('devices')) || [];


function Action(){

    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = '/';
}