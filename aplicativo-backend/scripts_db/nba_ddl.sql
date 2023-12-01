USE NBA;

DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Team;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Arena;
DROP TABLE IF EXISTS TeamStatistics;
DROP TABLE IF EXISTS Includes;
DROP TABLE IF EXISTS SeasonStatistics;

CREATE TABLE Game (
    ID INTEGER PRIMARY KEY,
    Date DATE,
    Status VARCHAR(255),
    Season INTEGER,
    Win BIT,
    fk_Team_ID_Home INTEGER,
    fk_Team_ID_Away INTEGER
);

CREATE TABLE Team (
    ID INTEGER PRIMARY KEY,
    Abbreviation VARCHAR(255),
    City VARCHAR(255),
    Nickname VARCHAR(255),
    Maximum_Year INTEGER,
    Minimum_Year INTEGER,
    Foundation_Year INTEGER,
    Name VARCHAR(255),
    fk_Arena_Name VARCHAR(255)
);

CREATE TABLE Player (
    ID INTEGER PRIMARY KEY,
    Name VARCHAR(255),
    Nickname VARCHAR(255),
    Seconds_Played INTEGER
);

CREATE TABLE Arena (
    Name VARCHAR(255) PRIMARY KEY,
    Capacity INTEGER
);

CREATE TABLE TeamStatistics (
    Rebounds INTEGER,
    Assists INTEGER,
    3_Point_Percentage DOUBLE,
    Free_Throw_Percentage DOUBLE,
    Field_Goal_Percentage DOUBLE,
    Points INTEGER,
    fk_Team_ID INTEGER,
    fk_Game_ID INTEGER
);

CREATE TABLE Includes (
    fk_Team_ID INTEGER,
    fk_Player_ID INTEGER,
    Season INTEGER
);

CREATE TABLE SeasonStatistics (
    Season_ID INTEGER,
    Win_Percentage DOUBLE,
    Winning_Games INTEGER,
    Loosing_Games INTEGER,
    Games_Played INTEGER,
    Conference VARCHAR(255),
    fk_Team_ID INTEGER
);
 
ALTER TABLE Game ADD CONSTRAINT FK_Game_1
    FOREIGN KEY (fk_Team_ID_Home)
    REFERENCES Team (ID)
    ON DELETE RESTRICT;

ALTER TABLE Game ADD CONSTRAINT FK_Game_2
    FOREIGN KEY (fk_Team_ID_Away)
    REFERENCES Team (ID)
    ON DELETE RESTRICT;
 
ALTER TABLE Team ADD CONSTRAINT FK_Team_1
    FOREIGN KEY (fk_Arena_Name)
    REFERENCES Arena (Name)
    ON DELETE RESTRICT;

 ALTER TABLE TeamStatistics ADD CONSTRAINT FK_TeamStatistics_1
    FOREIGN KEY (fk_Team_ID)
    REFERENCES Team (ID)
    ON DELETE RESTRICT;
 
ALTER TABLE TeamStatistics ADD CONSTRAINT FK_TeamStatistics_2
    FOREIGN KEY (fk_Game_ID)
    REFERENCES Game (ID)
    ON DELETE RESTRICT;

ALTER TABLE Includes ADD CONSTRAINT FK_Includes_1
    FOREIGN KEY (fk_Team_ID)
    REFERENCES Team (ID)
    ON DELETE RESTRICT;
 
ALTER TABLE Includes ADD CONSTRAINT FK_Includes_2
    FOREIGN KEY (fk_Player_ID)
    REFERENCES Player (ID)
    ON DELETE RESTRICT;
 
ALTER TABLE SeasonStatistics ADD CONSTRAINT FK_SeasonStatistics_1
    FOREIGN KEY (fk_Team_ID)
    REFERENCES Team (ID)
    ON DELETE RESTRICT;