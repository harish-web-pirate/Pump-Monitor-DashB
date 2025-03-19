<?php
include('database.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Expires: 0");


$data = json_decode(file_get_contents("php://input"), true);
if (empty($data['username']) || empty($data['password'])) {
    echo json_encode(["success" => false, "message" => "Empty Field!"]);
    exit;
}

if (isset($data['username']) && isset($data['password'])) {
    $username = mysqli_real_escape_string($conn, $data['username']);
    $password = mysqli_real_escape_string($conn, $data['password']);

    $query = "SELECT * FROM login_credentials WHERE user_name = 'admin'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        
        if ($password === "admin123") {
            echo json_encode(["success" => true, "message" => "Login successful"]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid password"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "User not found"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}

mysqli_close($conn);
?>