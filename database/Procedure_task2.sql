DROP PROCEDURE IF EXISTS GetAffiliations;
DELIMITER //
CREATE PROCEDURE GetAffiliations (IN affi_name VARCHAR(255), IN num INT)
BEGIN
	DECLARE currAuthorId BIGINT;
	DECLARE done INT default 0;
	DECLARE AuthorCursor CURSOR FOR(
		SELECT AuthorId
		FROM Authors
		WHERE LastKnownAffiliationId = (SELECT AffiliationId 
		FROM Affiliations
		WHERE DisplayName LIKE affi_name
		LIMIT 1));
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

	DROP TABLE IF EXISTS coAuthors;
	CREATE TABLE coAuthors (
		AuthorId BIGINT
	);
	OPEN AuthorCursor;
	cloop: LOOP
		FETCH AuthorCursor INTO currAuthorId;
		IF done THEN
			LEAVE cloop;
		END IF;
		INSERT INTO coAuthors
		(SELECT DISTINCT AuthorId 
			FROM PaperAuthorAffiliations NATURAL JOIN (SELECT PaperId 
			FROM PaperAuthorAffiliations
			WHERE AuthorId = currAuthorId) AS A
			WHERE AuthorId <> currAuthorId);
	END LOOP;
	CLOSE AuthorCursor;
	
	SELECT Affiliations.DisplayName, COUNT(*) AS Freq
	FROM (SELECT DISTINCT AuthorId FROM coAuthors) AS A NATURAL JOIN Authors JOIN Affiliations
	WHERE Affiliations.AffiliationId = Authors.LastKnownAffiliationId
	GROUP BY Authors.LastKnownAffiliationId
	ORDER BY Freq DESC
	LIMIT num;
END //
DELIMITER ;