<?php
$name = $_POST['uname'];
$location = $_POST['ulocation']

$host = "127.0.0.1:5500";
$dbusername = "root";
$dbpassword = "";
$dbname = "donated_names";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()) {
    die('Connection error: ('. mysqli_connect_errno().')'.mysqli_connect_error());
}
else {
    $SELECT = "SELECT name FROM donated_names WHERE name = ? LIMIT 1";
    $INSERT = "INSERT INTO donated_names (name, location) VALUES(?, ?)";

    $stmt = $conn->prepare($SELECT);
    $stmt->bind_param("s", $name);
    $stmt->execute();
    $stmt->bind_result($name);
    $stmt->store_result();

    $rnum = $stmt->num_rows;

    if  ($rnum == 0) {
        $stmt->close();

        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ss", $name, $location);
        $stmt->execute();
        echo "Thank you for donating ;)";
    } else {
        echo "Someone already donated with this name";
    }
    
    $stmt->close();
    $conn->close();
}
?>