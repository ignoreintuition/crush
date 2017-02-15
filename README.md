# crush
Crush.js is a library for managing datasets in Javascript.  The purpose of this library is to allow for simple dataset management on the frontend.  Currently the library supports:

getUniqueValues(data, attr)
This takes in a dataset and the attribute you want all of the unique attributes.  It will return an array of the unique values

groupBy(data, attr, metric)
Takes in a dataset, the attribute you want to group by, and an optional array of metrics to sum.  

orderBy(data, s, o) 
Takes in a dataset, the metric you want to sort by (s) and the order (o) "ASC" for asscending and "DESC" for descending.
