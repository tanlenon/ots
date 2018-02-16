$( document ).ready(function() {

    const fileInput = document.getElementById('img-file-input');

    fileInput.addEventListener('change', (e) =>  {

        var files = e.target.files;

        var show = $('#show-logo')
        var img = $('#loaded-logo');

        img.attr("src",window.URL.createObjectURL(files[0]));

    });
    
});
