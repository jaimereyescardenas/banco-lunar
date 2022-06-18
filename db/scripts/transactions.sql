CREATE TABLE transactions(
    id SERIAL NOT NULL PRIMARY KEY,
    from_account INTEGER NOT NULL,
    to_account INTEGER NOT NULL,
    amount INTEGER NOT NULL CHECK (amount >= 0),
    transaction_timestamp TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_origin_account FOREIGN KEY (from_account) REFERENCES accounts(id),
    CONSTRAINT fk_destination_account FOREIGN KEY (to_account) REFERENCES accounts(id)
);