-- Create Table Queries:

CREATE TABLE expenses (
    expense_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    guest_id UUID NOT NULL
        REFERENCES guest_users(guest_id)
        ON DELETE CASCADE,
    expense_name VARCHAR(150) NOT NULL,
    expense_amount NUMERIC(12, 2) NOT NULL,
    expense_date DATE NOT NULL,
    expense_time TIME NOT NULL,
    category_id INT NOT NULL
        REFERENCES expense_categories(category_id),
    expense_type VARCHAR(10) NOT NULL,
    expense_payment_method VARCHAR(50) NOT NULL,
    expense_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expense_categories (
    category_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE guest_users (
    guest_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Drop Tables Queries:

DROP TABLE guest_users;
DROP TABLE expenses;
DROP TABLE expense_categories;

-- Show Table Data Queries:

SELECT * FROM guest_users;
SELECT * FROM expenses;
SELECT * FROM expense_categories;