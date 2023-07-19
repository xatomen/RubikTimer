<?php

$actual_link = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100&family=Rubik:wght@300&family=Victor+Mono:wght@100&display=swap" rel="stylesheet">

    <style>
        body{
            background: rgb(2,0,36);
            background: linear-gradient(0deg, rgba(2,0,36,1) 30%, rgba(12,12,97,1) 78%, rgba(52,1,67,1) 100%);
            min-height: 100vh;
        }
        footer{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            text-align: center;
        }
        .center-timer{
            height:80vh;
        }
        .VictorMono{
            font-family: 'Victor Mono', monospace;
        }
        .Rubik{
            font-family: 'Rubik', sans-serif;
        }
        .Geologica{
            font-family: 'Geologica', sans-serif;
        }
        .transparent{
            background: rgb(0,0,0,0);
        }
    </style>

</head>

<body>

    <nav class="navbar navbar-expand-lg transparent" data-bs-theme="dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link <?php if($actual_link=="http://localhost/RubikTimer/index.php") echo "active"?>" href="index.php">Timer</a>
                    <a class="nav-link <?php if($actual_link=="http://localhost/RubikTimer/algorithms.php") echo "active"?>" href="algorithms.php">Algorithms</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid">