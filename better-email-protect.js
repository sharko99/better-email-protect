/**
 * Dynamic Email Replacement Script
 * 
 * Description:
 * This script dynamically replaces placeholders in the DOM with an email address.
 * Initially, all instances of "{{EMAIL}}" are replaced with "Email address loading...".
 * Once the page is fully loaded, these placeholders are then replaced with the actual
 * email address, which is composed from separate variables.
 * 
 * Usage:
 * Include this script in your HTML and ensure jQuery is loaded. The script will automatically
 * execute on document ready and window load events.
 * 
 * Example:
 * To use, simply place "{{EMAIL}}" in your HTML where you want the email to appear.
 * 
 * Dependencies:
 * jQuery - This script requires jQuery to be loaded before its execution.
 *
 * Repository: https://github.com/sharko99/better-email-protect
 * 
 * Author: sharko99
 * License: MIT
 * Date: 2024-01-29
 *
 * Notes:
 * - This is meant for basic email obfuscation and may not provide strong protection against sophisticated bots.
 * - Ensure you replace the 'localPart' and 'domain' variables with your actual email parts.
 * - Be cautious with .html() replacements as they can have unintended side effects on complex websites.
 */


jQuery(function() {
    // Initial replacement with loading text
    $('body').html($('body').html().replace(/{{EMAIL}}/g, 'Email address loading...'));

    // Variables to compose the actual email
    var localPart = 'example';  // Replace with your local part of the email
    var domain = 'domain.com';  // Replace with your domain

    // Function to replace the placeholder with the actual email
    function updateEmail() {
        var email = localPart + '@' + domain;
        $('body').html($('body').html().replace(/Email address loading.../g, email));
    }

    // Call the function to replace with the actual email
    $(window).on('load', function() {
        updateEmail();
    });
});
