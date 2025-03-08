<?php 
include('database.php');

if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Prepare the SQL query with placeholders to prevent SQL injection
    $query = "SELECT * FROM login_credentials WHERE user_name = ? LIMIT 1";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if(mysqli_num_rows($result) > 0){
        // Fetch the result row
        $user = mysqli_fetch_assoc($result);
        
        // Verify the hashed password
        if(password_verify($password, $user['user_password'])){
            echo "Login Successful";
        } else {
            echo "Invalid Password";
        }
    } else {
        echo "Username not found";
    }
    mysqli_stmt_close($stmt);
}
?>
