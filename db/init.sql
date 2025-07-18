CREATE TABLE IF NOT EXISTS students(
    id SERIAL PRIMARY KEY,
    student_name TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS courses(
    id SERIAL PRIMARY KEY,
    course_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS enrollments(
    id SERIAL PRIMARY KEY,
    student INTEGER REFERENCES students(id),
    courses INTEGER REFERENCES courses(id)
);