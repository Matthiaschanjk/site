document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Function for Matthias
    var i = 0;
    var txt = "Matthias";
    var speed = 180;
    var year = new Date().getFullYear();
    var footer = "© " + year + " Matthias Chan"

    function typewriter() {
        if (i < txt.length) {
            document.getElementById("matthias").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typewriter, speed);
        }
    }

    //Set Footer Year
    document.getElementById("year").innerHTML = footer;

    

    typewriter();
});
