const dataForge = require('data-forge');
require("data-forge-fs");

dataForge.readFileSync("csv/Transactions-02.csv")     // Read input file.
  .parseCSV()                                         // Parse CSV data to a dataframe. 
  .parseInts("Column2", "Column3")                    // Parse from strings to integers.
  .parseDates("Column4")                              // Parse from strings to date objects.
  .dropSeries("Column5")                              // Don't want column 5.
  // .where(row => predicate(row))                       // Filter out rows that you don't want.
  // .select(row => transform(row))                      // Apply transformation to each row.
  .asJSON()                                            // Write out data file in CSV (or other) format.
  .writeFileSync("output.json");