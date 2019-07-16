DROP DATABASE IF EXISTS lyt_db;
CREATE DATABASE lyt_db;
USE lyt_db;

CREATE TABLE artists(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  artistName VARCHAR(225) NOT NULL,
  bandName: VARCHAR(225) NOT NULL,
  bandLocation: VARCHAR(225) NOT NULL,
  bandGenre: VARCHAR(225) NOT NULL,
  bandMembers: VARCHAR(225) NOT NULL,
  photoUrl: VARCHAR(225) NOT NULL,
  musicLink: VARCHAR(225) NOT NULL,
  contactName: VARCHAR(225) NOT NULL,
  contactNumber: VARCHAR(225) NOT NULL,
  email: VARCHAR(225) NOT NULL,
  
  PRIMARY KEY (id)
);


-- INSERT INTO artists (artistName, artistMembers, artistLocation, artistContactName, 
-- artistContactPhone, artistContactEmail) 
-- values ('Targus Targus', 6, 'Boston', 'Dave H.', '2521565455', 'targus@email.com');

-- INSERT INTO artists (artistName, artistMembers, artistLocation, artistContactName, 
-- artistContactPhone, artistContactEmail) 
-- values ('Year of the Clam', 5, 'Boston', 'Sean James', '555-555-5245', 'sean@james.com');

-- INSERT INTO artists (artistName, artistMembers, artistLocation, artistContactName, 
-- artistContactPhone, artistContactEmail) 
-- values ('Miracle Blood', 3, 'Boston', 'Tomoharu T.', '555-555-4452', 'tomo@music.com');

-- INSERT INTO artists (artistName, artistMembers, artistLocation, artistContactName, 
-- artistContactPhone, artistContactEmail) 
-- values ('War Twins', 2, 'Los Angeles', 'Gaetana B.', '555-555-5245', 'gaetana@email.com');

-- INSERT INTO artists (artistName, artistMembers, artistLocation, artistContactName, 
-- artistContactPhone, artistContactEmail) 
-- values ('RH', 3, 'Los Angeles', 'James G.', '555-323-5245', 'james@rh.com');

-- SELECT * FROM artists;