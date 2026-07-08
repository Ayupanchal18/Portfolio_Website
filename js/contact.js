/* contact.js — Form validation helper (used as fallback if EmailJS is not configured) */
$(document).ready(function() {

    (function($) {
        "use strict";

        // validate contactForm
        $(function() {
            $('#contactForm, #contactFormPage').each(function() {
                $(this).validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        subject: {
                            required: true,
                            minlength: 4
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: "Name must be at least 2 characters."
                        },
                        subject: {
                            required: "Please enter a subject.",
                            minlength: "Subject must be at least 4 characters."
                        },
                        email: {
                            required: "Please enter your email address.",
                            email: "Please enter a valid email address."
                        },
                        message: {
                            required: "Please write a message before sending.",
                            minlength: "Message must be at least 10 characters."
                        }
                    }
                });
            });
        });

    })(jQuery);
});