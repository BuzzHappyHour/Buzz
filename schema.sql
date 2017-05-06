DROP DATABASE IF EXISTS buzz;

CREATE DATABASE buzz;

USE buzz;

CREATE TABLE neighborhoods (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE attributes (
  id int NOT NULL AUTO_INCREMENT,
  attribute VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE categories (
  id int NOT NULL AUTO_INCREMENT,
  category VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE bars (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  location VARCHAR(150),
  neighborhood INT,
  category INT,
  PRIMARY KEY(id),
  FOREIGN KEY (neighborhood) REFERENCES neighborhoods(id),
  FOREIGN KEY (category) REFERENCES categories(id)
);

CREATE TABLE bars_attributes (
  bar_id INT,
  attribute_id INT,
  FOREIGN KEY (bar_id) REFERENCES bars(id),
  FOREIGN KEY (attribute_id) REFERENCES attributes(id)
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

INSERT INTO bars (name, location, neighborhood, category ) values ('Atlas Tap Room', '606 Mission Street', 2, 3);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 15);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 11);
INSERT INTO bars_attributes(bar_id, attribute_id) values (1, 7);

INSERT INTO bars (name, location, neighborhood, category ) values ('Anchor & Hope', '83 Minna St', 2, 2);
INSERT INTO bars_attributes(bar_id, attribute_id) values (2, 16);
INSERT INTO bars_attributes(bar_id, attribute_id) values (2, 7);

INSERT INTO bars (name, location, neighborhood, category ) values ('Jones', '620 Jones St', 1, 1);
INSERT INTO bars_attributes(bar_id, attribute_id) values (3, 4);












