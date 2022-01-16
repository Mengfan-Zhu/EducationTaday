CREATE TABLE IF NOT EXISTS Authors(
    AuthorId BIGINT,
    DisplayName	VARCHAR(255),
    LastKnownAffiliationId BIGINT,
    PRIMARY KEY(AuthorId)
);

CREATE TABLE IF NOT EXISTS Affiliations(
    AffiliationId BIGINT,
    DisplayName	VARCHAR(255),
    PRIMARY KEY(AffiliationId)
);

CREATE TABLE IF NOT EXISTS Papers(
    PaperId	BIGINT,
    OriginalTitle VARCHAR(511),
    PRIMARY KEY(PaperId)
);

CREATE TABLE IF NOT EXISTS PaperReferences(
    PaperId	BIGINT REFERENCES Papers,
    PaperReferenceId BIGINT REFERENCES Papers,
    PRIMARY KEY(PaperId, PaperReferenceId)
);

CREATE TABLE IF NOT EXISTS PaperAuthorAffiliations(
    PaperId	BIGINT REFERENCES Papers,
    AuthorId BIGINT REFERENCES Authors,
    PRIMARY KEY(PaperId, AuthorId)
);

