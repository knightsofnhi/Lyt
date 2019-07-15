DROP DATABASE IF EXISTS lyt_db;
CREATE DATABASE lyt_db;
USE lyt_db;

CREATE TABLE artists(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  artistName VARCHAR(225) NOT NULL,
  artistMembers INT(3) NOT NULL,
  artistLocation VARCHAR(225) NOT NULL,
  artistContactName VARCHAR(225) NOT NULL,
  artistContactPhone VARCHAR(15) NOT NULL,
  artistContactEmail VARCHAR(225) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO artists (artistName, artistMembers, artistLocation, artistContactName, 
artistContactPhone, artistContactEmail) 
values ('Targus Targus', 6, 'Allston', 'Dave H.', '2521565455', 'targus@email.com');

SELECT * FROM artists;