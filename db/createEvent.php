<?php
$name = strval($_GET['name']);
$servername = "localhost";
$username = "user";
$password = "record12";
$dbname = "Main";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO Main (name) VALUES (?)");
$stmt->bind_param('s', $name);

if($stmt->execute()){
    echo $conn -> insert_id;
}
else{
    echo $stmt->errorInfo();
}
mysqli_close($conn);
?>