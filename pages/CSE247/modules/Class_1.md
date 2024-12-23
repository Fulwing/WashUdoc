# Class 1

Traveling salesperson (classic~)

Halting problem~

### What is algorithm?

An "effective procedure" 

* Implementable on a "computer". (eg. Halting problem)

for taking any instance of a computational problem 

* Cannot just work for some instances.

and finding a correct solution.

* For now - always exactly correct.

### Algorithms for Sorting

enumerate all permutations of input array and find the one that's sorted.

#### Selection sort

#### Insertion sort

### What makes Algorithm good

#### correct?

eg. selection sort

Selection sort correctly sorts lists of one element.

(Base case)

Given an input list of n element...

Algorithm removes smallest elt, puts it at start of output.

Remaining input list is one element smaller.

...

#### efficient?

Need to count simple, abstract operations.

Measurement: function of input size (n).

Principle: for each input size, measure the **worst-case** running time over all inputs.

eg. selection sort

time

=n+(n-1)+(n-2)....+1

=n(n+1)/2

where n^2 is dominant

