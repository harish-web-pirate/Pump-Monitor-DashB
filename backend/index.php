<?php
include('database.php');

$query = "SELECT * FROM login_credentials";
$result = mysqli_query($conn, $query);  
if(mysqli_num_rows($result)>0){
    $fetched_data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo "Pump Power Monitoring Data: <br>";
    foreach($fetched_data as $data){
        echo "ID:" .$data['id']. "username:".$data['user_name'].  "Password:".$data['user_password']."<br>";
    }
}
?>