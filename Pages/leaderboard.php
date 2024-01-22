<?php
session_start();
if (!isset($_SESSION["username"])) {
    header("location:../index.php");
}

function FetchUsers()
{
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "web";
    $db = new mysqli($servername, $username, $password, $dbname);

    $query = "SELECT ID, USERNAME, EMAIL, HIGHSCORE FROM tbl_users";
    $stmt = $db->query($query);

    if (!$stmt) {
        die('Error in query: ' . $db->error);
    }

    $a_users = array();
    while ($obj = $stmt->fetch_object()) {
        $a_users[] = $obj;
    }

    return $a_users;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flappy Bird</title>
    <link rel="stylesheet" href="../assets/css/style1.css">
    <style>
        body {
            background: #312f2f;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }


        .arcade-logo {
            max-width: 100%;
            height: auto;
        }

        .navigation {
            margin-top: 10px;
        }

        .iframe-container {
            margin-top: 100px;
            width: 500px;
            height: 600px;
            overflow: hidden;
            margin-bottom: 20px; /* Adjust as needed */
        }

        iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }

        .L-title {
            margin: 20px 0;
        }

        img {
            max-width: 100%;
            height: auto;
            margin: 10px 0;
        }

        .table-container {
            width: 80%;
            margin-bottom: 30px; /* Adjust as needed */
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 20px; /* Increased padding */
            text-align: left;
            color: white; /* Set text color to white */
            font-size: 20px; /* Increased font size */
        }

        th {
            background-color: #4CAF50; /* Green background color for headers */
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2; /* Gray background color for even rows */
        }

        .table-row {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>

<header>
    <img class="arcade-logo" src="../assets/images/ZS3t.gif">
    <nav class="navigation">
        <a href="leaderboard.php">Flappy Bird Game</a>
        <a href="gallery.php">Gallery</a>
        <button class="btnLogin-popup" onclick="redirectToLink('../index.php')">Logout</button>
    </nav>
</header>

<div class="iframe-container">
    
    <iframe src="../BE/FlappyBird" title="Flappy Bird" scrolling="no" allow="autoplay; payment; fullscreen; microphone; clipboard-read; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-write 'self' https://frayfight.com" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" allowfullscreen loading="eager"></iframe>
</div>

<div class="L-title">
    <div class="table-row">
    <img src="../assets/images/flaps1.png" alt="" style="height: 200px; width:250px;">
        <h2>You made it to the leaderboard...</h2>
        
    </div>
</div>

<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Username</th>
            <th>Highscore</th>
        </tr>
        </thead>
        <tbody>
        <?php
        $a_users = FetchUsers();
        foreach ($a_users as $user) {
            echo '<tr>
                    <td style="background-color: #008CBA;">' . $user->USERNAME . '</td>
                    <td style="background-color: #4CAF50;">' . $user->HIGHSCORE . '</td>
                  </tr>';
        }
        ?>
        </tbody>
    </table>
</div>

</body>
<script>
    function redirectToLink(url) {
        window.location.href = url;
    }
</script>
</html>
