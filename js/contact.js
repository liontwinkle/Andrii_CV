$(function () {

    "use strict";
    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form #submit').on('click', function (e) {
        if (!e.isDefaultPrevented()) {
             var sender = $('#contact-form #InputEmail').val();
             var subject = $('#contact-form #InputSubject').val();
             var message = $('#contact-form #InputMessage').val();

             console.log(sender);
             console.log(subject);
             console.log(message);
             Email.send({
                Host: "smtp.elasticemail.com",
                Port: "25",
                Username: "andrysoul32@gmail.com",
                Password: "5DD0BDDE06710E36638FC46CBF7EFA75A3BC",
                To: 'andrysoul32@gmail.com',
                From: sender,
                Subject: subject,
                Body: message,
              })
            .then(function (message) {
              alert("mail sent successfully")
            });
        }

    })
});