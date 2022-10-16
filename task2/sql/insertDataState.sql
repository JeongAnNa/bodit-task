-- Create insert_data_state Table
CREATE TABLE `insert_data_state` (
  `code` int(11) NOT NULL,
  `kind` varchar(20) NOT NULL,
  `message` varchar(100) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Insert rows
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('0', 'Insert Successed', '데이터 추가에 성공했습니다.');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('1', 'kind Input Error', '손목 가동성, 어깨 굴곡, 어깨 신전, 보행, 호흡 균형 중 하나를 입력해주세요!');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('2', 'figure Input Error', '손목 가동성의 수치 범위는 0 ~ 90입니다.');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('3', 'figure Input Error', '어깨 굴곡의 수치 범위는 30 ~ 170입니다.');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('4', 'figure Input Error', '어깨 신전의 수치 범위는 -60 ~ -30입니다.');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('5', 'figure Input Error', '보행의 수치 범위는 10 ~ 100입니다.');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('6', 'figure Input Error', '손목가동성의 수치 범위는 -100 ~ 100입니다.');
INSERT INTO `bodit-task`.`insert_data_state` (`code`, `kind`, `message`) VALUES ('7', 'Update Successed', '기존에 등록된 데이터를 업데이트 했습니다.');