function sendMail(contactForm) {
    emailjs.send("service_i152dwh","lwt_yb3bsvi",{
    from_name: "Bia",
    message: "me",
    from_email: "stylistbia@gmail.com",
})
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

