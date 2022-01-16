import json

def handle_task2(mysql, affiliation, number):
    cursor = mysql.connection.cursor()
    cursor.execute("CALL GetAffiliations(%s,%s);", (affiliation,number))
    results=cursor.fetchall()
    jsonObj = json.dumps(results)
    cursor.close()
    return jsonObj
