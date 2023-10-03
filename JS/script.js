var array = [
    'Images/Budva.jpg',
    'Images/Capadocia.jpg',
    'Images/Dubai.jpg',
    'Images/Mavrov.jpg',
    'Images/Selanik.jpg',
    'Images/Beograd.jpg'
];

var index = 0;
var time = 3000;

function createSlider(){
    document.getElementById('image').src = array[index];
    index++;

    if(index == array.length){
        index = 0;
    }
    setTimeout("createSlider()", time);
}



createSlider();

