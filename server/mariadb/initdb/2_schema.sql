CREATE TABLE IF NOT EXISTS kt.user(
  `user_id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_handle` VARCHAR (255) UNIQUE NOT NULL,
  `user_mail_address` VARCHAR (255) UNIQUE NOT NULL,
  `user_password` VARCHAR (255) NOT NULL,
  `user_content` JSON NOT NULL,
  CHECK (JSON_VALID(user_content))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt.post(
  `post_id` INT (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `post_user_id` INT (11) NOT NULL,
  `post_content` JSON NOT NULL,
  `post_geo` GEOMETRY NOT NULL,
  CONSTRAINT fk_post_user_id
    FOREIGN KEY (`post_user_id`)
    REFERENCES `user` (`user_id`)
    ON DELETE RESTRICT ON UPDATE RESTRICT,
  CHECK (JSON_VALID(post_content))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS kt.location(
  `location_id` INT (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `location_user_id` INT (11) NOT NULL,
  `location_content` JSON NOT NULL,
  `location_geo` GEOMETRY NOT NULL,
  CONSTRAINT fk_location_user_id
    FOREIGN KEY (`location_user_id`)
    REFERENCES `user` (`user_id`)
    ON DELETE RESTRICT ON UPDATE RESTRICT,
  CHECK (JSON_VALID(location_content))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;