function cytat(imie){

if (imie=="krzysiek"){
    document.getElementById('krzysiek').style.display="none";
    document.getElementById('joanna').style.display="block";
    document.getElementById('ewa').style.display="none";
}
else if (imie=="joanna"){
    document.getElementById('krzysiek').style.display="none";
    document.getElementById('joanna').style.display="none";
    document.getElementById('ewa').style.display="block";
}
else if (imie=="ewa"){
    document.getElementById('krzysiek').style.display="block";
    document.getElementById('joanna').style.display="none";
    document.getElementById('ewa').style.display="none";
}
}