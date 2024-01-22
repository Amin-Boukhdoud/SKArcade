<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include database connection
    include('db.php');

    // Get user input
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the username already exists
    $checkUsernameQuery = "SELECT * FROM tbl_users WHERE USERNAME='$username'";
    $checkUsernameResult = mysqli_query($conn, $checkUsernameQuery);

    if (mysqli_num_rows($checkUsernameResult) > 0) {
        // Username already exists
        echo "Username already exists. Please choose a different username.";
        mysqli_close($conn);
        exit();
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // SQL query to insert new user with hashed password
    $query = "INSERT INTO tbl_users (USERNAME, PASSWORD, EMAIL) VALUES ('$username', '$hashedPassword', '$email')";
    $result = mysqli_query($conn, $query);

    // Check if the query was successful
    if ($result) {
        echo "Signup successful! You can now <a href='../Pages/login.php'>login</a>.";
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
}
?>
