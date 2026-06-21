# Project 03 — Database Integration (PHP + MySQL)

Simple PHP CRUD example that demonstrates how to connect to a MySQL database and perform basic Create / Read / Update / Delete operations for a `students` table.

## Features

- Add new student records (name, email, course).
- View list of students with Edit and Delete actions.
- Example files included: `index.php`, `db.php`, `insert.php`, `view.php`, `edit.php`, `update.php`, `delete.php`, `style.css`.

## Requirements

- PHP 7.4+ (or compatible)
- MySQL / MariaDB
- A web server (XAMPP, WAMP, MAMP) or PHP built-in server for local testing

## Database setup

Run the following SQL to create the database and `students` table:

```sql
CREATE DATABASE student_db;
USE student_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  course VARCHAR(255) NOT NULL
);
```

## Configuration

1. Open `db.php` and update the connection details if your MySQL user, password, host, or database name differ. The example uses:

```php
$conn = new mysqli("localhost", "root", "", "student_db");
```

2. Ensure your web server has access to the project folder.

## Run (development)

Using PHP built-in server for quick testing:

```bash
cd "Project_03- Database Integration"
php -S localhost:8000
# Open http://localhost:8000/index.php in your browser
```

Or place the project folder inside your web server's `www`/`htdocs` directory and visit it with your browser.

## Usage

- Open the Add Student form (`index.php`) to insert new students.
- Click `View Students` (or open `view.php`) to see records and use Edit/Delete links.

## Security notes

- This sample is intended for learning. Before using in production, implement:
  - Prepared statements (parameterized queries) to prevent SQL injection.
  - Server-side input validation and sanitization.
  - Proper error handling and logging.
  - Authentication & authorization if exposing to users.

## Files

- `index.php` — Add form and link to view.
- `db.php` — Database connection.
- `insert.php` — Insert handler.
- `view.php` — List and action links.
- `edit.php` / `update.php` — Edit flow.
- `delete.php` — Delete handler.
- `style.css` — Basic styling.

## Next steps (suggestions)

- Replace direct SQL with prepared statements (PDO or mysqli prepared statements).
- Add client-side validation and better styling.
- Add README translations or a short walkthrough video.

---

If you want, I can add the prepared-statement version of `insert.php` and `update.php` next — should I proceed? 
