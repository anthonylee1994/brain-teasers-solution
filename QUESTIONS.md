# Section A - Brain Teasers

### Question 1 - Compute recursive digits sum of X
**Examples**

When X = 23935198273,
```
Ans |> 23935198273
    |> 2 + 3 + 9 + 3 + 5 + 1 + 9 + 8 + 2 + 7 + 3
    |> 51
    |> 5 + 1
     = 6
````

### Question 2 - Compute to N

Given the digits 123456789, build an expression by inserting "+" or "-" anywhere BETWEEN the digits so that it results to N.
Your answer should return all possible combinations.

**Examples**

When N = 50,
```
1 + 2 + 3 + 4 - 56 + 7 + 89
1 + 2 + 3 - 4 + 56 - 7 + 8 - 9
1 + 2 + 34 - 5 - 6 + 7 + 8 + 9
1 + 2 + 34 - 56 + 78 - 9
1 + 2 - 3 + 4 + 56 + 7 - 8 - 9
1 + 2 - 34 + 5 - 6 - 7 + 89
1 - 2 - 3 - 4 - 5 - 6 + 78 - 9
1 - 2 - 3 + 4 + 56 - 7 - 8 + 9
1 - 2 - 34 - 5 - 6 + 7 + 89
1 - 2 + 3 - 45 + 6 + 78 + 9
1 - 2 + 34 + 5 + 6 + 7 + 8 - 9
1 - 2 + 34 - 5 - 67 + 89
1 - 23 - 4 - 5 - 6 + 78 + 9
1 - 23 + 4 + 5 - 6 + 78 - 9
12 + 3 + 4 - 56 + 78 + 9
12 - 3 - 4 - 5 + 67 - 8 - 9
12 - 3 + 45 + 6 + 7 - 8 - 9
```

When N = 100,
```
1 + 2 + 3 - 4 + 5 + 6 + 78 + 9
1 + 2 + 34 - 5 + 67 - 8 + 9
1 + 23 - 4 + 5 + 6 + 78 - 9
1 + 23 - 4 + 56 + 7 + 8 + 9
12 + 3 + 4 + 5 - 6 - 7 + 89
12 + 3 - 4 + 5 + 67 + 8 + 9
12 - 3 - 4 + 5 - 6 + 7 + 89
123 + 4 - 5 + 67 - 89
123 + 45 - 67 + 8 - 9
123 - 4 - 5 - 6 - 7 + 8 - 9
123 - 45 - 67 + 89
```

### Hints for Bonus in Section A
* Show functional programming technique
