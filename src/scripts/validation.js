$( "#userForm" ).submit(function( event ) {
    event.preventDefault();
});
$(document).ready(function(){
    $('#userForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            url: {
                required: true,
                url: true
            }
        },

        messages: {
            name: {
                minlength: "Please enter at least {0} characters"
            },
            email: {
                email: "Email address format required"
            },
        }
    });
});