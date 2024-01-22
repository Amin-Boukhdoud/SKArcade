<?php
session_start();
header('Content-type:application/json;charset=utf-8');

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "web";

// Create connection
try {
    $conn = new mysqli($servername, $username, $password, $dbname);
}
    catch (Exception $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

$user= $_SESSION['username'];
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
   
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $data = $_POST['score'];
        
        if(!empty($data)){
            echo json_encode($data);
            $sql = "UPDATE tbl_users SET high_score = '$data' WHERE USERNAME = '$user'";
            if ($conn->query($sql) === TRUE) {
                echo "High score updated successfully";
            } else {
                echo "Error updating high score: " . $conn->error;
            }
        }else{
            echo "NOT EXIST DATA";
        }
    }else{
      echo "NO POST";
    }
    
}
    
?>
