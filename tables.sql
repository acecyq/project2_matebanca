-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email varchar(255),
  password varchar(255),
  questions_id integer
);

-- create questions table
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  img varchar(255),
  level varchar(255),
  topic varchar(255),
  difficulty varchar(255),
  user_id integer
);

-- create answers table
CREATE TABLE IF NOT EXISTS answers (
  id SERIAL PRIMARY KEY,
  content varchar(8000),
  img varchar(255),
  user_id integer,
  question_id integer
);

-- create comments table
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  content varchar(8000),
  user_id integer,
  question_id integer,
  solution_id integer
);