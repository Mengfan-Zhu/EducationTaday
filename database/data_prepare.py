import pandas as pd

read_path = 'data/ori_data/'
write_path = 'data/processed_data/'

# process one txt file, only contain necessary columns and generate new txt file
def process_file(name, column):
    ori_data = pd.read_csv(read_path + name + '.txt', header=None, delimiter='\t', on_bad_lines='skip')
    need_data = ori_data.loc[:,column]
    need_data.to_csv(write_path + name + '.txt', index=None, header=None, sep='\t')

# process all txt files
def process_all():
    process_file("Affiliations", [0,3])
    process_file("Authors", [0,3,4])
    process_file("Papers", [0,4])
    process_file("PaperAuthorAffiliations", [0,1])
    process_file("PaperReferences", [0,1])

process_all()