<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the data from the form
    $name = $_POST["username"];
    $password = $_POST["password"];

    // You can add validation and data processing here
    // For example, checking if the email is valid or saving it to a database

    // Sending a simple response to the user
    echo "Hello, $name! Thank you for submitting your email address:.";
} else {
    // Redirect or display an error message if the form was not submitted via POST
    // For example:
    // header("Location: your_form_page.php");
    // or
    // echo "Invalid request method.";
}
?>
