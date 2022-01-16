import json

def handle_task1(mysql, author, number):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT OriginalTitle, Freq\
    FROM Papers NATURAL JOIN (SELECT PR.PaperReferenceId AS PaperId, COUNT(*) AS Freq\
    FROM PaperReferences PR JOIN (SELECT * FROM PaperAuthorAffiliations \
    WHERE AuthorId = (SELECT AuthorId \
    FROM Authors \
    WHERE DisplayName = %s LIMIT 1)) AS PA\
    WHERE PR.PaperId = PA.PaperId\
    GROUP BY PaperId) AS A\
    ORDER BY Freq DESC\
    LIMIT %s", (author,number))
    results=cursor.fetchall()
    jsonObj = json.dumps(results)
    cursor.close()
    return jsonObj
