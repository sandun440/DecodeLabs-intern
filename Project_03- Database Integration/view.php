<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Student List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="view-header">
    <h2>Student List</h2>
    <a href="index.php">Add New</a>
</div>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Action</th>
    </tr>

    <?php
    $result = $conn->query("SELECT * FROM students");

    while ($row = $result->fetch_assoc()) {
    ?>
    <tr>
        <td><?= htmlspecialchars($row['id']) ?></td>
        <td><?= htmlspecialchars($row['name']) ?></td>
        <td><?= htmlspecialchars($row['email']) ?></td>
        <td><?= htmlspecialchars($row['course']) ?></td>
        <td>
            <a href="edit.php?id=<?= htmlspecialchars($row['id']) ?>">Edit</a>
            <a href="delete.php?id=<?= htmlspecialchars($row['id']) ?>">Delete</a>
        </td>
    </tr>
    <?php } ?>

</table>

</body>
</html>