<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baza_projekt";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully";

if(isset($_GET["action"]) && $_GET["action"]=="downloadUser"){
    $sql = "SELECT * FROM `users`";
    $result = $conn->query($sql);

if ($result->num_rows > 0) {
    $arrayUser = [];
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $arr = array('id' => $row['id'],'name' => $row['name'], 
        'surname' => $row['surname'], 'phoneNumber' => $row['phonenumber'], 'adress' => $row['adress']);
        array_push($arrayUser,$arr );
        
    }
    header('Content-Type: application/json');
        echo json_encode($arrayUser);
} else {
    echo "0 results";
}
}
else if(isset($_POST["action"]) && $_POST["action"]=="add"){
    if (isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["phonenumber"]) && isset($_POST["adress"]) )  {
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $phonenumber = $_POST['phonenumber'];
        $adress = $_POST['adress'];  
        
            $sql = "INSERT INTO `users`(`name`, `surname`, `phonenumber`, `adress` ) 
            VALUES ('$name','$surname','$phonenumber','$adress')";
    
            if ($conn->query($sql) === TRUE) {
                 echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            } 
            } 
            else {    
                echo "date not set";
            }
}
else if(isset($_POST["action"]) && $_POST["action"]=="delete"){
    if (isset($_POST["id"]))  {
        $id = $_POST['id'];

            $sql = "DELETE FROM `users` WHERE `id` = $id ";
    
            if ($conn->query($sql) === TRUE) {
                 echo "New record deleted successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            } 
            } 
            else {    
                echo "date not set";
            }
}
else if(isset($_POST["action"]) && $_POST["action"]=="update"){
    if (isset($_POST["id"]) && isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["phonenumber"]) && isset($_POST["adress"]))  {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $phonenumber = $_POST['phonenumber'];
        $adress = $_POST['adress'];

            $sql = "UPDATE `users` SET `name`='$name',`surname`='$surname',`phonenumber`=$phonenumber,`adress`='$adress' WHERE id=$id";
    
            if ($conn->query($sql) === TRUE) {
                 echo "New record update successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            } 
            } 
            else {    
                echo "date not update";
            }
}
   
   

$conn->close();
?> 