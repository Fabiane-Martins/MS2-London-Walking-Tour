(function(){
                emailjs.init("user_BoUJ1ejHb5ZG7B15ZYLtd");
                
            })();

function sendMail(contactForm) {
    emailjs.send("service_i152dwh","lwt_yb3bsvi",{
    from_name: $("#fullname").val(),
    message: $("#message").val(),
    from_email: $("#emailaddress").val(),
})
    .then(
        function(response) {
            alert("Message Sent")
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

