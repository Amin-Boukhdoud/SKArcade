<?php 
session_start();
session_unset();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flappy Bird</title>
    <link rel="stylesheet" href="./assets/css/style1.css">
</head>
<body>
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <style>
       body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-image:url('./assets/images/pg4.gif') ;
        background-size: cover;
        background-position: center;
    }

    .form-box h2 {
        font-size: 4rem;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .input-box {
        position: relative;
        width: 100%;
        height: 60px; /* Increase the height of the input box */
        border-bottom: 2px solid #ffffff;
        margin: 30px 0;
    }

    .input-box label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 1.8em; /* Increase the font size of the label */
        color: #ffffff;
        font-weight: 500;
        pointer-events: none;
        transition: 0.5s;
    }

    .input-box input {
        width: 100%;
        height: 100%; /* Make the input take up the full height of the input box */
        font-size: 1.5em; /* Increase the font size of the input text */
        border: none;
        outline: none;
        background: transparent;
        color: #ffffff;
    }




    </style>


    <div class="starter"><img src="./assets/images/baer.gif" alt=""></div>
        
    <div class="wrapper">
        <div class="form-box register">
            <h2>Registration</h2>
            <form id="registerForm" action="BE/signup.php" method="POST" enctype="multipart/form-data" autocomplete="off">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input class="insert-input" type="text" name="username">
                    <label>Username</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" name="email">
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" name="password">
                    <label>Password</label>
                </div>
                <div>
                    <button type="submit" class="btn" name="submit">Register</button>
                </div>
                <div class="login-register">
                    <p>Already have an account?<a href="Pages/login.php" class="login-link">Login</a></p>
                </div>
            </form>
        </div>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        const registerForm = document.getElementById('registerForm');

        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(registerForm);

            fetch('BE/signup.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text()) // Read the response as text
            .then(data => {
                if (data.includes("Signup successful")) {
                    alert("Signup successful! You can now login.");
                    window.location.href = 'Pages/login.php'; // Redirect to login page
                } else {
                    alert(data || "An error occurred"); // Display error message to the user
                }
            })
            .catch(error => {
                alert("An error occurred"); // Display error message to the user
            });
        });
    });
</script>

</body>
</html>
