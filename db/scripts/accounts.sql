CREATE TABLE accounts(
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    account_number VARCHAR(30) NOT NULL,
    balance INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);