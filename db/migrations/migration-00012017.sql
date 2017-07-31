-- \c todo_app_dev

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  category VARCHAR(255),
  status VARCHAR(255),
  description VARCHAR(255)
);
