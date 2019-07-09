use lyt_db;

delete from venues;

insert into venues (venueName, venueLocation, venueContactName, venueContactPhone, venueContactEmail) 
values ('Starlight', 'Southbridge', 'Taylor', '555-555-5555', whatever@email.com);
insert into venues (venueName, venueLocation, venueContactName, venueContactPhone, venueContactEmail) 
values ('Blue Gallery', 'Allston', 'Tomo', '1234567899', tomo@gmail.com);

delete from artists;

insert into artists (artistName, artistLocation, artistMembers, artistManager, artistPhone, artistEmail) 
values ('Targus Targus', 'Allston', '6', 'Dave', '1231231234', sdf@gmail.com);
insert into artists (artistName, artistLocation, artistMembers, artistManager, artistPhone, artistEmail) 
values ('Daygrazer', 'Allston', '3', 'Dave', '555-555-5362', dave@gmail.com);
insert into artists (artistName, artistLocation, artistMembers, artistManager, artistPhone, artistEmail) 
values ('Daygrazer', 'Allston', '3', 'Dave', '555-555-5362', dave@gmail.com);