/*var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

xhr.onload = function () {
    // The following conditional check will not work locally - only on a server
    if (xhr.status === 200) { // If server was ok
        document.getElementById('content').innerHTML = xhr.responseText; // Update
    }
};

xhr.open('GET', 'ajax/joe-bloggs-speech.html', true); // Prepare the request
xhr.send(null); // Send the request
*/


$(document).ready(function () {
    $('.thumb a').on('click', function (e) {
        e.preventDefault();

        var url = 'joe-bloggs-speech.html';
        var $content = $('#content');

        $.ajax({
            type: 'GET',
            url: url,
            timeout: 2000,
            beforeSend: function () {
                $content.replaceWith('<div id="content" class="col-sm-9"></div>');
                $content = $('#content');
                // You may not see the below image appear of the request is handled quickly
                $content.append('<div id="load" style="height:250px;"></div>');
                //delay();
            },
            complete: function () {
                $('#load').remove();
            },
            success: function () {
                $('#content').load(url + ' #content').hide().fadeIn(4000);
                //$(document).append('<button id="back">Back</button>');
            },
            fail: function () {
                alert('hello there');
                $('#content').html('<h3>There was a problem loading this. Please try again later.</h3>');
            }
        });

    });

    $('#back img').on('click', function (e) {
        e.preventDefault();
        alert('jus gt called');
        window.history.go(-1);
    });

});