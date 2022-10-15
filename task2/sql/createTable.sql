-- Users Table Create Statement
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_name` varchar(20) NOT NULL COMMENT '이름',
  `birth_date` date NOT NULL COMMENT '생년월일',
  `height` int(11) NOT NULL COMMENT '키',
  `phone` varchar(20) NOT NULL COMMENT '핸드폰 번호',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `phone_UNIQUE` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Measurement Records Table Create Statement
CREATE TABLE `measurement_records` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` int(11) NOT NULL COMMENT 'users 테이블의 PK',
  `time` datetime NOT NULL COMMENT '측정 완료한 날짜, 시간',
  `weight` int(11) NOT NULL COMMENT '측정 당시의 몸무게',
  PRIMARY KEY (`record_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Measurement Datas Table Create Statement
CREATE TABLE `measurement_datas` (
  `record_id` int(11) NOT NULL COMMENT 'records 테이블의 PK',
  `kind` varchar(12) NOT NULL COMMENT '종류',
  `figure` int(11) NOT NULL COMMENT '수치',
  KEY `records_idx` (`record_id`),
  CONSTRAINT `records` FOREIGN KEY (`record_id`) REFERENCES `measurement_records` (`record_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;