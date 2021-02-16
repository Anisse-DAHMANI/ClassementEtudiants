import csv

with open('s3.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file, delimiter=';')
    for row in csv_reader:
        print(str(row) + '\n' + str(row.code_nip))
