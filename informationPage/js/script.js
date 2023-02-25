let submenu = document.getElementById("submenu");
let boton = document.getElementById("pp");

function adding() {
    let imageRoute = prompt("Please, input the image's route: ");
    let textt = prompt("Description: ");
    if (imageRoute == "" || textt == "") {
        alert("Nothing Indented");
    } else {
        submenu.innerHTML += "<div class='subitem'><img src='"+imageRoute+"' alt='Here should be an image' class='image-i'><p>"+textt+"</p></div>";
        imageRoute = "";
        textt = "";
    }
}

var sunandset = document.getElementById("sunset");
var suntype = 1;
sunandset.addEventListener('click', function() {
    if (suntype == 1) {
        document.getElementById("contain").style.backgroundColor = "#253250";
        sunandset.innerHTML = "<span class='material-symbols-outlined'>sunny</span>";
        suntype = 0;
    } else {
        document.getElementById("contain").style.backgroundColor = "#D8D8D8";
        sunandset.innerHTML = "<span class='material-symbols-outlined'>bedtime</span>";
        suntype = 1;
    }
});
