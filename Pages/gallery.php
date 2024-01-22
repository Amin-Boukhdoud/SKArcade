<?php

session_start();
if (!isset($_SESSION["username"])){
        header("location:../index.php");
    }
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/gallery.css">
   
    <title>Your Website</title>
</head>
<style>
.arcade-logo{

width: 100px;
}


header{
box-shadow: 0 0 30px rgba(0, 0, 0, .5);
backdrop-filter:blur(20px);
position:fixed;
top:0;
left:0;
width: 90%;
padding:20px 100px;
display:flex;
justify-content: space-between;
align-items: center;
z-index: 999;


}
.logo {
font-size: 2em;
color: #ffffff;
user-select: none;
}

.navigation a {
position:relative;
font-size: 2rem;
color: white;
text-decoration: none;
font-weight: 500;
margin-left: 40px;
}

.navigation a::after {
content:'';
position:absolute;
left:0;
bottom: -6px;
width: 100%;
height: 3px;
background:#fff;
border-radius:5px;
transform-origin:right;
transform: scaleX(0);
transition:transform .5s;
}

.navigation a:hover::after {
transform-origin: left;
transform: scaleX(1);
}

.navigation .btnLogin-popup {
width: 130px;
height: 50px;
background:transparent;
border: 2px solid #fff;
outline:none;
border-radius: 6px;
 cursor: pointer;
 font-size: 2rem;
 color:#fff;
 font-weight: 500;
 margin-left:40px;
transition: .5s;
font-family: 'VT323', monospace;

}


.navigation .btnLogin-popup:hover{
background: #fff;
color:#162938;

}


.cube-section {
        display: flex;
        justify-content: space-around; /* Adjusted spacing */
        padding: 20px;
        box-sizing: border-box;
    }

    .cube {
        text-align: center;
        position: relative;
        width: 250px; /* Adjusted width */
        height: 250px; /* Adjusted height */
        overflow: hidden;
        transition: transform 0.5s;
        margin: 0 10px; /* Added margin to create space between cubes */
    }

</style>

<body>


<header>
    <img class="arcade-logo" src="../assets/images/ZS3t.gif">
    <nav class="navigation">
        <a href="leaderboard.php">Flappy Bird Game</a>
        <a href="gallery.php">Gallery</a>
        <button class="btnLogin-popup" onclick="redirectToLink('../index.php')">Logout</button>
    </nav>
</header>



    <div class="hero-section">
        <img src="../assets/images/hero1.gif" alt="Background Image" class="bg-image">
        <div class="hero-content">
            <h1>Gallery of Games</h1>
        </div>
    </div>

    <!-- Cube Section -->
    <div class="cube-section">
        <div class="cube">
            <a href="game1.php">
                <img src="../assets/images/1.gif" alt="Cube 1">
                <h2>Fray Fight</h2>
            </a>
        </div>
        <div class="cube">
            <a href="game2.php">>
                <img src="../assets/images/2.gif" alt="Cube 2">
                <h2>Grindcraft</h2>
            </a>
        </div>
        
        <div class="cube">
            <a href="game3.php">
                <img src="../assets/images/3.gif" alt="Cube 4">
                <h2>Card Quest</h2>
            </a>
        </div>
    </div>

<!--banner-->

<div class="crctr">
    <div class="text-title"><h1>Mystery Game...</h1></div>
			
    <img  class="blas" src="../assets/images/gif2.gif" style="width: 100%; height: 100%; background-color: black;">

    <div class="text-title" style="margin-top: -5px;  background-color: black;  "><h1>A randomized choice... with an addition of 1 Games</h1></div>
    
    
</div>

    <!-- Image with onclick event -->
<div class="mystery">
    <img id="randomImage" src="../assets/images/mystery1.gif" alt="Random Image" width="300" height="200" onclick="redirectToRandomLink()">
    <div class="spacer" style="height: 10   0px; background-color: black;"></div>
</div>


<script>
  // Function to redirect to a random link
  function redirectToRandomLink() {
    // Array of your links
    var links = [
      'game1.php',
      'game2.php',
      'game3.php',
      'game4.php',
      
    ];  

    // Get a random index from the links array
    var randomIndex = Math.floor(Math.random() * links.length);

    // Redirect to the randomly selected link
    window.location.href = links[randomIndex];
  }

    function redirectToLink(url) {
        window.location.href = url;
    }

</script>   
</body>
</html>
