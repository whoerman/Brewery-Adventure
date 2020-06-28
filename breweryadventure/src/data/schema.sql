### Schema for the resetting the database 
DROP DATABASE IF EXISTS `breweries_db`;
CREATE DATABASE breweries_db;
USE breweries_db;


### schema for importing a csv into a table
### need to put the csv into this special folder otherwaise permission denied
### need to put the id numbers in the csv file before you load it
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/breweries.csv' 
INTO TABLE nouns 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

### schema for brweries table to test csv
CREATE TABLE breweries (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    brewery_type VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    website_url VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    created_at VARCHAR(255) NOT NULL,
    updated_at VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    longitude DECIMAL(3,8) NOT NULL,
    latitude DECIMAL(3,8) NOT NULL,
    tags VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);


### How to Add Quotes to Your Cells in Excel Automatically
### Highlight the cells you want to add the quotes.
### Go to Format –> Cells –> Custom.
### Copy/Paste the following into the Type field: \”@\”
### Click “okay”
### Be happy you didn't do it all by hand.

### temp Noun Schema

