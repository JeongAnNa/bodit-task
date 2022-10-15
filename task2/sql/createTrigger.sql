-- Data 테이블의 종류, 수치 값 제한
CREATE DEFINER=`root`@`localhost` TRIGGER `bodit-task`.`measurement_datas_insert_validation` BEFORE INSERT ON `measurement_datas` FOR EACH ROW
BEGIN
	IF NEW.kind != "손목 가동성" and NEW.kind != "어깨 굴곡" and NEW.kind != "어깨 신전" and NEW.kind != "보행" and NEW.kind != "호흡균형" THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "입력된 데이터와 일치하는 종류가 존재하지 않습니다.";
	END IF;
    IF NEW.kind = "손목 가동성" and (NEW.figure < 0 or NEW.figure > 90) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "손목 가동성의 수치 범위는 0 ~ 90입니다.";
	ELSEIF NEW.kind = "어깨 굴곡" and (NEW.figure < 30 or NEW.figure > 170) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "어깨 굴곡의 수치 범위는 30 ~ 170입니다.";
    ELSEIF NEW.kind = "어깨 신전" and (NEW.figure < -60 or NEW.figure > -30) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "어깨 신전의 수치 범위는 -60 ~ -30입니다.";
    ELSEIF NEW.kind = "보행" and (NEW.figure < 0 or NEW.figure > 100) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "보행의 수치 범위는 10 ~ 100입니다.";
    ELSEIF NEW.kind = "호흡 균형" and (NEW.figure < -100 or NEW.figure > 100) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "손목가동성의 수치 범위는 -100 ~ 100입니다.";
	END IF;
    IF EXISTS(SELECT * FROM `measurement_datas` WHERE record_id=NEW.record_id and kind=NEW.kind) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "해당 데이터가 이미 존재합니다. UPDATE문을 통해 데이터를 수정해주세요!";
	END IF;
END
