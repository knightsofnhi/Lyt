### Schema
DROP DATABASE IF EXISTS venue_db;
CREATE DATABASE venue_db;
USE venue_db;

CREATE TABLE venues
(
	id int NOT NULL AUTO_INCREMENT,
	venueName varchar(255) NOT NULL,
    venueMembers int (2) NOT NULL,
	PRIMARY KEY (id)
);