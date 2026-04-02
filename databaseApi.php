<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "students";


$conn = new mysqli($servername, $username, $password, $database);


$sql =  'SELECT * FROM students_info';

$result = $conn->query($sql);

$students = [];
while($rows = $result ->fetch_assoc()){
     $students[] = $rows;
}


echo json_encode($students);

?>