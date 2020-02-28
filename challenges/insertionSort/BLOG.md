## Insertion Sort

- Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.


## Pseudo-code

```js
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

- first thing we create a for loop starting from one to the length of the array .
- we set a variable for the previous index and one for the current index . 
- Using a while loop to shift the values depend on the sorting type .

![](https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png)


