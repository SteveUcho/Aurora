import json
from pprint import pprint

def unpackJson():
    with open('myfile.json', encoding='utf-8') as data_file:
        data = json.loads(data_file.read())
        pprint(data)
        # print("Parsing each one individually...")
        # for i in range(0, len(data)):
        #     dataParsed = data[str(i)]
        #     print("Printing a dictionary...")
        #     print(dataParsed)
        #     print("Printing dic['name'] in order to get the type")
        #     print(dataParsed["name"])

unpackJson()