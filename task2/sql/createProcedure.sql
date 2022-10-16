-- Measurement Datas Table에 데이터 Insert시 제약사항
DELIMITER $$
CREATE PROCEDURE insertData (newId INT, newKind VARCHAR(12), newFigure INT)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
    START TRANSACTION;
	IF newKind != "손목 가동성" and newKind != "어깨 굴곡" and newKind != "어깨 신전" and newKind != "보행" and newKind != "호흡 균형" THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "입력된 데이터와 일치하는 종류가 존재하지 않습니다.";
	ELSEIF newKind = "손목 가동성" and (newFigure < 0 or newFigure > 90) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "손목 가동성의 수치 범위는 0 ~ 90입니다.";
	ELSEIF newKind = "어깨 굴곡" and (newFigure < 30 or newFigure > 170) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "어깨 굴곡의 수치 범위는 30 ~ 170입니다.";
    ELSEIF newKind = "어깨 신전" and (newFigure < -60 or newFigure > -30) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "어깨 신전의 수치 범위는 -60 ~ -30입니다.";
    ELSEIF newKind = "보행" and (newFigure < 0 or newFigure > 100) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "보행의 수치 범위는 10 ~ 100입니다.";
    ELSEIF newKind = "호흡 균형" and (newFigure < -100 or newFigure > 100) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "손목가동성의 수치 범위는 -100 ~ 100입니다.";
	ELSE
		CALL duplicateCheck(newID, newKind, newFigure);
	END IF;

    COMMIT;
	
END $$
DELIMITER ;

-- Measurement Datas Table에 데이터 Insert시 기존에 있던 데이터인지 확인
DELIMITER $$
CREATE PROCEDURE duplicateCheck (newId INT, newKind VARCHAR(12), newFigure INT)
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
    START TRANSACTION;
    
	IF EXISTS(SELECT * FROM `measurement_datas` WHERE record_id=newId and kind=newKind) THEN
		UPDATE `measurement_datas` SET figure=newFigure WHERE record_id=newID and kind=newKind;
		SELECT * FROM `bodit-task`.insert_data_state WHERE code=7;
	ELSE
		INSERT INTO `bodit-task`.measurement_datas VALUES (newId, newKind, newFigure);
		SELECT * FROM `bodit-task`.insert_data_state WHERE code=0;
    END IF;

    COMMIT;
END $$
DELIMITER ;