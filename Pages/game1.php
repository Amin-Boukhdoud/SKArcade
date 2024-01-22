<?php
session_start();
if (!isset($_SESSION["username"])){
        header("location:../index.php");
    }
    ?>
<iframe src="https://frayfight.com/game/" title="Fray Fight" scrolling="no" allow="autoplay; payment; fullscreen; microphone; clipboard-read; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-write 'self' https://frayfight.com" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" allowfullscreen loading="eager" style="border: 0px; background-color: rgb(255, 255, 255); width: 100%; height: 100%; min-width: 100%; min-height: 100%;">
</iframe></br>
<a href="https://frayfight.com/" target="_blank">Fray Fight</a> is Developed by <a href="https://playsaurus.com" target="_blank">Playsaurus</a> - an idle game development studio.
                    