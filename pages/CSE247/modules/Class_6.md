# Class 6

Exam 1 Graded...

M6 Lab (practice on recurrence, sorting, searching.)

## Lecture 6

How fast can we sort?

### Outline

Sorting overview

Lower bound on running time of comparison-based sorting

Radix sort

Bound radix sorting

#### What do we know about soring?

Worst case n log n algorithm

* HeapSort
  * Call extractMin() (log n) for n times. 
* MergeSort
  * Divide and conquer algorithm.

Other sorting

* BubbleSort - n^2
* InsertionSort - n^2
* ShellSort - n^3/2 or n^2
* QuickSort - n log n

Sound of sort

#### How fast can we sort?

what operations can be considered as constant time?

* All the sorting algorithms we listed work on any **Comparable** data type.
* Can answer "is x > y" in constant time.

pair wise comparison -> comparison sort

measure times of comparison.

for fastest algorithm O(n log n).

Is there a function f(n) where the fastest sorting algorithm have Omega(f(n))

#### A Trivial Lower Bound

at least n/2 comparison needs to be made. Omega(n/2) at least.

use tree to encode logic of comparison sequence.

Every decision tree corresponds to a sorting algorithm...

Running time of tree is path from root to leaf.

eg. for comparing 3 elements, height of tree=3.

suppose every decision tree has t(n) leaves, the tree have branching factor of w, then the problem requires at least log_w t(n) to solve.

Apply to comparison sorting:

w=2

t(n)=n! (reason: n\*(n-1)\*(n-2)\*(n-3)\* .... \* 1)

depth of decision tree for comparison based sorting >= log_2 (n!)

log (n!)=Theta(n log n)

prof:

log (n!)=O(n log n)

log (n!)=Omega(n log n)

**It is impossible to sort in comparison**

#### Breaking the n log n barrier

Counting sort (given k)

* Linear to n sorting algorithm.
* Extend with integer keys

Radix sort (given k)

* Divide each input integer into d digits
* Digits may be in any base k
* Sort using d successive passed of counting sort.
* We sort by **least significant** digit first.
* Sort in each pass mush be **stable** - never inverts order of two inputs with the same key.
* total time = Theta(log_k n*(n+k))