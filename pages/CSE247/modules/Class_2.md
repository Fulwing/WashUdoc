# Class 2

Studio in groups, labs in individuals.

### Tool tip: Java debugger in Eclipse

* Setting break points,
* Running program: observer stop points.
* Step into will go into method call, step over will execute the next line of code only.
* Debug/ Java options change view of workplace in Eclipse.

### Review in Studio 0

* Ticks are a useful way to measure complexity -- count of # of times we reach a specific place in the code.
* Growing a array by doubling takes time linear in # of elements added. 
* Naive approach took quadratic time~
* we can reason about the number of ticks of a program analytically, without actually running it.

Counting the number of ticks exactly.

## Asymptotic complexity

Constant time: 

basic operation ( *, /, &, |, +, -, ^)

Big - O notation

Big - Omega notation

Big - Theta notation



### for one for loop

````java
for(int i=0;i<n;i++) {
			this.value+=i;
			ticker.tick();
		}
````


$$
\sum_{i=0}^{n-1} 1 = n-1-0+1=n
$$

### for two loop

```java
for(int i=0;i<n;i++) {
	for (int j=i;j<n;j++) {
			this.value+=i;
			ticker.tick();
	}
}
```

inner loop
$$
\sum_{j=0}^{i-1} 1 = i-1-0+1=i
$$
outer loop
$$
\sum_{i=0}^{n-1} 1 = 0+1+2+...+n-1={(n-1)n\over 2}={n^2-n\over2}
$$


### Pseudo code example

```pseudocode
for j in i ... n
	tick()
	for k in 0 ... j
		tick ()
		tick ()
		tick ()
```

inner loop
$$
\sum_{k=0}^{j} 3 = 3\sum_{k=0}^{j} 1=3(j+1)
$$
outer loop
$$
\sum_{j=1}^{n} 3(j+1)+1=\sum_{j=1}^{n} 3j+4=3\sum_{j=1}^{n}j+4\sum_{j=1}^{n} 1={3(n)(n+1)\over2+4(n-1+1)}={3n^2+11n\over2}
$$
How do we Actually use Running Times?

* Predict exact time to complete a task.
* Compare running time in different  order of growth rate.

Desirable Properties of Running Time Estimates

* only care for long time growth rather than small sample size.

### Definition of Big-O Notation (upper bound of algorithm)

* Let f(n), g(n) be non-negative functions for n>0. (eg. running time)
* We say that f(n) = O(g(n)), if there exist constants c>0, n0>0, such that for all n>= n0, f(n)<=c*g(n).
* When specifying running times, never write a constant inside O(), it is unnecessary.

Steps of validation:

1. Pick c >0, n0 >0.
2. Write down desired inequality f(n) <= c g(n).
3. Prove that for all n>=n0, the equation holds.

eg. 

prove that
$$
3n^2+11n=O(n^2)
$$
c=33 (coefficient of 3*11), n0=1

for n>=1, difference 
$$
33n^2-(3n^2+11n)=(11n^2-3n^2)+(11n^2-11n)+(11n^2-0)\geq0
$$

**When the equation be come complex, try to take derivative of the equation.**

Example:

Does 1000 n log n = O (n^2)?

set c =1000, n0=1,

when n=1 1000 n^2 -1000 n log n =1000 > 0

moreover, this difference only grows with increasing n >1
$$
{d \over dn}[1000n^2-1000n \log n]=2000 n -1000-1000 \log n
$$
which is > 0 for n =1.

Furthermore, 
$$
{d^2\over dn^2}[1000n^2-1000n\log n ]=2000-1000/n
$$
which is >0 for n>=1. Hence, the derivative remains positive, and so the difference  increases for n>=1 as claimed.

### Extensions of Big-O

#### Definition of Big-Omega Notation (lower bound of algorithm)

* Let f(n), g(n) be non-negative functions for n>0. (eg. running time)
* We say that f(n) = Omega(g(n)), if there exist constants c>0, n0>0, such that for all n>= n0, f(n)>=c\*g(n).
* This is basically, lower bound of algorithm f(n)

#### Definition of Big-Theta Notation (medium of algorithm)

* Let f(n), g(n) be non-negative functions for n>0. (eg. running time)
* We say that f(n) = Theta(g(n)), if there exist constants c1,c2>0, n0>0, such that for all n>= n0, c2\*g(n) >=f(n)>=c1\*g(n).