<?php
include('database.php');

$query = "SELECT * FROM pump_power_monitoring";
$result = mysqli_query($conn, $query);  
if(mysqli_num_rows($result)>0){
    $fetched_data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo "Pump Power Monitoring Data: <br>";
    foreach($fetched_data as $data){
        echo "ID:" .$data['id']. "Running_data".$data['running_frequency']."<br>";
    }
}
?>