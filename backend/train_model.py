import pandas as pd

# Load dataset
df = pd.read_csv("../dataset/stress_dataset.csv")

print("Dataset Loaded Successfully!\n")

print("Dataset Shape:")
print(df.shape)

print("\nColumn Names:")
print(df.columns)

print("\nMissing Values:")
print(df.isnull().sum())

print("\nData Types:")
print(df.dtypes)