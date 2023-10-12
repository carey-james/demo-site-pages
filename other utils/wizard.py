### THE WIZARD'S KEY
### 0: Client
### 1: SSN
### 2: State
### 3: County
### 4: Zip
### 5: Reserved for other Geo data or flag
### 6: Reserved for other Geo data or flag
### 7: Reserved for other Geo data or flag
### 8: Reserved for other Geo data or flag
### 9: Reserved for other Geo data or flag
### 10: Variable A
### 11: Variable B
### 12: Variable C
### 13: Etc.
### 14: Variable A + B


import pandas as pd 
import numpy as np

csv_file = input('File name:')

with open(csv_file) as csv_data:
	df = pd.read_csv(csv_data)
	results = {}
	for col in df.columns:
		for 
