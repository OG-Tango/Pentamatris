DROP DATABASE IF EXISTS `pentamatris`;
CREATE DATABASE `pentamatris`;

USE `pentamatris`;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `high_score` int
);

CREATE TABLE `favorites` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `text` varchar(255)
);

CREATE TABLE `user_faves` (
  `user_id` int,
  `fave_id` int
);

ALTER TABLE `user_faves` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_faves` ADD FOREIGN KEY (`fave_id`) REFERENCES `favorites` (`id`);
