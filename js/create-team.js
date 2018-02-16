const fileInput = document.getElementById('img-file-input');

fileInput.addEventListener('change', (e) =>  {

    var files = e.target.files;

    var show = $('#show-logo')

    // show.empty();

    // show.append('<img src="" id="image">');

    var img = $('#loaded-logo');

    img.attr("src",window.URL.createObjectURL(files[0]));

});



const colorChange1 = document.getElementById('colorChoice1');
const colorChange2 = document.getElementById('colorChoice2');

colorChange1.addEventListener('change', (e) =>  {

    var other = $('#show-color-1');

    other.css('background-color', $('#colorChoice1').val())

});

colorChange2.addEventListener('change', (e) =>  {

    var other = $('#show-color-2');

    other.css('background-color', $('#colorChoice2').val())

});