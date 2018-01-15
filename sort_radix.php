<?php
  $unsorted = 4;
 ?>
<html>

<head>
  <meta charset="UTF-8">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
  <script src="raphael.min.js"></script>

  <title>Radix Sort</title>

</head>

<body>
  <div class="col-md-auto">
    <div id="description">
      <h1>Radix Sort</h1>
      <h3>Sorts a list of integers.</h3>
    </div>
    <hr>

    <button id="btn_new" onclick="alert('New List!')">New List!</button>
    <button id="btn_sort" onclick="alert('Sort!')">Sort!</button>
    <button id="btn_reset" onclick="alert('Reset!')">Reset!</button>

    <div id="sort">

    </div>
  </div>
</body>

  <script src="sort_radix.js"></script>

</html>
