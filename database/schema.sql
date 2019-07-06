### Schema - Venue
DROP DATABASE IF EXISTS venue_db;
CREATE DATABASE venue_db;
USE venue_db;

CREATE TABLE venues
(
	id int NOT NULL AUTO_INCREMENT,
	venueName varchar(255) NOT NULL,
    venueLocation varchar (255) NOT NULL,
    venueManager varchar (255) NOT NULL,
    venuePhone int (9) NOT NULL,
    venueEmail varchar (255) NOT NULL,
	PRIMARY KEY (id)
);

### Schema - Artist
DROP DATABASE IF EXISTS artist_db;
CREATE DATABASE artist_db;
USE artist_db;

CREATE TABLE artists
(
	id int NOT NULL AUTO_INCREMENT,
	artistName varchar(255) NOT NULL,
    artistLocation varchar (255) NOT NULL,
    artistMembers int (9) NOT NULL,
    artistManager varchar (255),
    artistPhone int (9) NOT NULL,
    artistEmail varchar (255) NOT NULL,
	PRIMARY KEY (id)
);