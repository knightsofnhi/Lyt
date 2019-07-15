DROP DATABASE IF EXISTS lyt_db;
CREATE DATABASE lyt_db;
USE lyt_db;

CREATE TABLE artists(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  artistName VARCHAR(225) NOT NULL,
  artistMembers INT(3) NOT NULL,
  artistLocation VARCHAR(225) NOT NULL,
  artistContactName VARCHAR(225) NOT NULL,
  artistContactPhone VARCHAR(10) NOT NULL,
  artistContactEmail VARCHAR(225) NOT NULL,
  PRIMARY KEY (id)
);