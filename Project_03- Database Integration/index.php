<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>CRUD Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Add Student</h2>

<form action="insert.php" method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Course: <input type="text" name="course" required><br><br>
    <button type="submit">Add</button>
</form>

<br>
<a href="view.php">View Students</a>

</body>
</html>