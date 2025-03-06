<?php
$db_server = "localhost";
$db_username = "root";  
$db_password = "";
$db_database = "pump_power";
$db_name = "pump_power_monitoring";
$conn = mysqli_connect($db_server, $db_username, $db_password, $db_database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
    echo "Connected successfully";
}
?>