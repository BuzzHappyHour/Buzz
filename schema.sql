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
INSERT INTO attributes (attribute) values ('hot people');
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

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Atlas Tap Room', '606 Mission Street', 2, 3, 15, 17);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 15);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 11);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 7);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Anchor & Hope', '83 Minna St', 2, 2, 14, 16);
INSERT INTO bars_attributes(bar_id, attribute_id) values (2, 16);
INSERT INTO bars_attributes(bar_id, attribute_id) values (2, 7);

INSERT INTO bars (name, location, neighborhood, category, hhstart, hhend) values ('Jones', '620 Jones St', 1, 1, 13, 15);
INSERT INTO bars_attributes(bar_id, attribute_id) values (3, 4);


