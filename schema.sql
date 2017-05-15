DROP DATABASE IF EXISTS buzz;

CREATE DATABASE buzz;

\c buzz;

CREATE TABLE neighborhoods (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE attributes (
  id SERIAL PRIMARY KEY,
  attribute VARCHAR
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR
);

CREATE TABLE bars (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR,
  neighborhood INTEGER REFERENCES neighborhoods(id),
  category INTEGER REFERENCES categories(id),
  hhstart INTEGER,
  hhend INTEGER
);

CREATE TABLE bars_attributes (
  bar_id INTEGER REFERENCES bars(id),
  attribute_id INTEGER REFERENCES attributes(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR
);

CREATE TABLE users_bars (
  user_id INTEGER REFERENCES users(id),
  bar_id INTEGER REFERENCES bars(id)
);

INSERT INTO neighborhoods (name) values ('Tenderloin');
INSERT INTO neighborhoods (name) values ('SOMA');
INSERT INTO neighborhoods (name) values ('Hayes Valley');
INSERT INTO neighborhoods (name) values ('Union Square/FIDI');

INSERT INTO attributes (attribute) values ('Vegan Friendly AF');
INSERT INTO attributes (attribute) values ('Irish');
INSERT INTO attributes (attribute) values ('Gay-Friendly');
INSERT INTO attributes (attribute) values ('Cash Only');
INSERT INTO attributes (attribute) values ('Artsy');
INSERT INTO attributes (attribute) values ('Majestic');
INSERT INTO attributes (attribute) values ('No minimum tab');
INSERT INTO attributes (attribute) values ('smoking');
INSERT INTO attributes (attribute) values ('Fried Chicken');
INSERT INTO attributes (attribute) values ('wifi');
INSERT INTO attributes (attribute) values ('nice people');
INSERT INTO attributes (attribute) values ('good music');
INSERT INTO attributes (attribute) values ('Live Band');
INSERT INTO attributes (attribute) values ('Retirment Home');
INSERT INTO attributes (attribute) values ('Pour House');
INSERT INTO attributes (attribute) values ('Gastropub');
INSERT INTO attributes (attribute) values ('Seafood');

INSERT INTO categories (category) values ('Divey');
INSERT INTO categories (category) values ('Bougie');
INSERT INTO categories (category) values ('Basic');
INSERT INTO categories (category) values ('Hip');
INSERT INTO categories (category) values ('Clubby');
INSERT INTO categories (category) values ('Sporty');



INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Atlas Tap Room', '606 Mission Street', 2, 3, 1500, 1700);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 15);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 11);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 7);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Anchor & Hope', '83 Minna St', 2, 2, 1400, 1600);
INSERT INTO bars_attributes(bar_id, attribute_id) values (2, 16);
INSERT INTO bars_attributes(bar_id, attribute_id) values (2, 7);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Jones', '620 Jones St', 1, 1, 1300, 1500);
INSERT INTO bars_attributes(bar_id, attribute_id) values (3, 4);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Black Cat', '400 Eddy St', 1, 4, 1730, 1930);
INSERT INTO bars_attributes(bar_id, attribute_id) values (4, 13);
INSERT INTO bars_attributes(bar_id, attribute_id) values (4, 12);






INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('B Resturuant and Bar', '720 Howard St', 2, 4, 1600, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (5, 17);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Bellota', '888 Brannan', 2, 4, 1400, 1600);
INSERT INTO bars_attributes(bar_id, attribute_id) values (6, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('The Bird', '115 New Montgomery', 2, 4, 1500, 2000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (7, 9);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('The Cavalier', '360 Jessie St', 2, 4, 1430, 1730);
INSERT INTO bars_attributes(bar_id, attribute_id) values (8, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Cockscomb', '564 4th St', 2, 4, 1700, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (9, 5);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Coin-op Game Room', '508 4th St', 2, 3, 1400, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (10, 14);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Dirty Habit', '12 4th St', 2, 2, 1600, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (11, 11);
INSERT INTO bars_attributes(bar_id, attribute_id) values (11, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('District', '216 Townsend St', 2, 2, 1700, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (12, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Equator', '222 2nd St', 2, 4, 1600, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (13, 11);
INSERT INTO bars_attributes(bar_id, attribute_id) values (13, 5);
INSERT INTO bars_attributes(bar_id, attribute_id) values (13, 7);
INSERT INTO bars_attributes(bar_id, attribute_id) values (13, 10);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Jamber', '858 Folsom St', 2, 3, 1530, 1930);
INSERT INTO bars_attributes(bar_id, attribute_id) values (14, 5);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Jersey', '145 2nd St', 2, 3, 1430, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (15, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Kate O Brien s Irish Bar & Grill', '579 Howard St', 2, 3, 1500, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (16, 2);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Novella', '662 Mission St', 2, 4, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (17, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('The Perennial', '59 9th St', 2, 4, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (18, 12);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Press Club', '20 Yerba Buena Lane', 2, 2, 1600, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (19, 6); 

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Showdown', '10 6th St', 2, 1, 1700, 2000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (20, 15);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Tropisueno', '75 Yerba Buena Lane', 2, 3, 1600, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (21, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Twenty Five Lusk', '25 Lusk St', 2, 3, 1500, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (22, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('District', '216 Townsend St', 2, 2, 1700, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (23, 16);







INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Corridor', '100 Van Ness Ave', 1, 4, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (24, 10);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Onsen', '466 Eddy St', 1, 3, 1730, 1830);
INSERT INTO bars_attributes(bar_id, attribute_id) values (25, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Redford', '673 Geary St', 1, 3, 1700, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (26, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Rx', '701 Geary St', 1, 3, 1700, 1930);
INSERT INTO bars_attributes(bar_id, attribute_id) values (27, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Rye', '688 Geary St', 1, 3, 1700, 1930);
INSERT INTO bars_attributes(bar_id, attribute_id) values (28, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Mr Tipples Recording Studio', '39 Felt St', 1, 2, 1700, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (29, 13);
INSERT INTO bars_attributes(bar_id, attribute_id) values (29, 12);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Swig', '561 Geary St', 1, 4, 1700, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (30, 14);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Tender', '854 Geary St', 1, 2, 1730, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (31, 5);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Tratto', '501 Geary St', 1, 3, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (32, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('White Chapel', '600 Polk St', 1, 2, 1700, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (33, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Saratoga', '100 Larkin St', 1, 2, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (34, 6);


INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Bartlett Hall', '242 O Farrell St', 4, 4, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (35, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Bluestem Brasserie', '1 Yerba Buena Lane', 4, 3, 1600, 1830);
INSERT INTO bars_attributes(bar_id, attribute_id) values (36, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Cheesecake Factory', '251 Geary St', 4, 3, 1600, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (37, 14);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Colibri', '438 Geary', 4, 3, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (38, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('E & O Kitchen and Bar', '314 Sutter St', 4, 4, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (39, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('The European', '490 Geary St', 4, 2, 1700, 2000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (40, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Golden Gate Tap Room', '449 Powell St', 4, 6, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (41, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Hawthorne', '46 Geary St', 4, 5, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (42, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Farallon', '450 Post St', 4, 4, 1630, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (43, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('PABU', '101 California St', 4, 2, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (44, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Puccini & Pinetti', '125 Ellis St', 4, 3, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (45, 16);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Tap 415', '845 Market St', 4, 4, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (46, 15);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Winstons Bar and Lounge', '334 Mason St', 4, 2, 1600, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (47, 11);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('398 Brasserie', '398 Geary St', 4, 2, 1600, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (48, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Pagan Idol', '375 Bush St', 4, 4, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (49, 6);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Rickhouse', '246 Kearny St', 4, 3, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (50, 12);





INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Blackbird Bar', '2124 Market St', 3, 4, 1700, 2000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (51, 5);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Boxing Room', '399 Grove St', 3, 3, 1500, 1800);
INSERT INTO bars_attributes(bar_id, attribute_id) values (52, 13);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Brass Tacks', '488 A Hayes St', 3, 2, 0000, 0000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (53, 13);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Dobbs Bar', '406 Hayes St ', 3, 6, 1400, 2000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (54, 7);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Minas Brazilian Restaurant & Cachaçaria ', '41 Franklin St', 3, 6, 1500, 1700);
INSERT INTO bars_attributes(bar_id, attribute_id) values (55, 4);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Muka', '370 Grove St', 3, 2, 1400, 2000);
INSERT INTO bars_attributes(bar_id, attribute_id) values (56, 4);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Noir Lounge ', '581 Hayes St', 3, 2, 1600, 1900);
INSERT INTO bars_attributes(bar_id, attribute_id) values (57, 4);





















