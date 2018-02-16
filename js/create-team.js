const fileInput = document.getElementById('img-file-input');

fileInput.addEventListener('change', (e) =>  {

var files = e.target.files;

var show = $('#show')

show.empty();

show.append('<img src="" id="image">');

var img = $('#image');

img.css('max-width','300px');
img.css('max-height','300px');

img.attr("src",window.URL.createObjectURL(files[0]));

});




const colorChange = document.getElementById('colorChoice');

colorChange.addEventListener('change', (e) =>  {

var other = $('#show-other');

other.empty();

// other.css('width', '50px');
// other.css('height', '50px');

other.css('background-color', $('#colorChoice').val())

});