$( document ).ready(function() {
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

    $('#colorChoice1').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            var other = $('#show-color-1');
            var field = $('#colorChoice1');
            // $('#colorChoice1').val('#' + hex);
            other.css('background-color', '#' + hex);
            field.css('background-color', '#' + hex);

        }
    });

    $('#colorChoice2').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            var other = $('#show-color-2');
            var field = $('#colorChoice2');
            // $('#colorChoice2').val('#' + hex);
            other.css('background-color', '#' + hex);
            field.css('background-color', '#' + hex);

        }
    });

});