<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include database connection
    include('db.php');

    // Get user input
    $loginInput = $_POST['loginInput']; // Username or email
    $password = $_POST['password'];

    // SQL query to retrieve user information using a prepared statement
    $query = "SELECT * FROM tbl_users WHERE USERNAME=? OR EMAIL=?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "ss", $loginInput, $loginInput);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    // Check if the query was successful
    if ($result) {
        // Check if the user exists
        if ($row = mysqli_fetch_assoc($result)) {
            $hashedPassword = $row['PASSWORD'];

            // Verify the password
            if (password_verify($password, $hashedPassword)) {
                $_SESSION['username'] = $row['USERNAME']; // Set session variable
                echo json_encode(['success' => true]); // Return success response
                exit(); // Ensure no further execution after sending the response
            }
        }
    }

    // Close the database connection
    mysqli_close($conn);

    // Invalid username, email, or password
    header('HTTP/1.1 401 Unauthorized', true, 401); // Set 401 Unauthorized status
    echo json_encode(['error' => 'Invalid username, email, or password']);
    exit(); // Ensure no further execution after sending the response
}
?>
