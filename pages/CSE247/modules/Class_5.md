# Class 5

Exam tomorrow

## Solving recurrence via master method

For recurrence:
$$
T(n)=3T(n/4)+cn^2 \\
T(n)=dn^{\log_4 3}+cn^2+\sum_{j=1}^{\log_4 n-1}3^jc({n\over 4^j})^2\\
dn^{\log_4 3} =base\_case \\
cn^2= work\_done\_by\_root\_node \\
\sum_{j=1}^{\log_4 n-1}3^jc({n\over 4^j})^2 =work\_done\_by\_child\_node
$$
Thus, we could convert it to general form:
$$
T(n)=aT(n/b)+f(n) \\
T(n)=dn^{\log_b a}+f(n)+\sum_{j=1}^{\log_b n-1}a^jf({n\over b^j})\\
dn^{\log_b a} =base\_case \\
f(n)= work\_done\_by\_root\_node \\
\sum_{j=1}^{\log_b n-1}a^jf({n\over b^j})=work\_done\_by\_child\_node
$$

if base is "dominant":
$$
\Theta(n)=n^{\log_b a}
$$
eg.
$$
T(n)=4T(n/2)+cn\\
T(n)=n^2+n+\sum....\\
$$
if root is "dominant":
$$
\Theta(n)=f(n)
$$
eg.
$$
T(n)=2T(n/2)+cn^2\\
T(n)=n+n^2+\sum....\\
$$
if neither is "dominant" (balanced: top and bottom work are the same):

eg.
$$
T(n)=2T(n/2)+cn\\
T(n)=n+n+\sum....\\
$$
the tree have log n levels and n work per level.

thus, the overall asymptotic complexity = Theta(n log n)

$$
f(n)=\Theta(n^{\log_b a})\\
\begin{aligned}
T(n)&=dn^{\log_b a}+f(n)+\sum_{j=1}^{\log_b n-1}a^jf({n\over b^j})\\
	&=dn^{\log_b a}+cn^{\log_b a}+\sum_{j=1}^{\log_b n-1}a^jc({n\over b^j})^{\log_b a}\\
	&=dn^{\log_b a}+\sum_{j=0}^{\log_b n-1}a^jc({n\over b^j})^{\log_b a}\\
	&=dn^{\log_b a}+cn^{\log_ba}\sum_{j=0}^{\log_b n-1}a^j({1\over b^j})^{\log_b a}\\
	&=dn^{\log_b a}+cn^{\log_ba}\sum_{j=0}^{\log_b n-1}{a^j\over b^{j\log_b a}}\\
	&=dn^{\log_b a}+cn^{\log_ba}\sum_{j=0}^{\log_b n-1}{a^j\over a^{j\log_b b}}\\
	&=dn^{\log_b a}+cn^{\log_ba}\sum_{j=0}^{\log_b n-1}{a^j\over a^j}\\
	&=dn^{\log_b a}+cn^{\log_ba}\sum_{j=0}^{\log_b n-1}1\\
	&=dn^{\log_b a}+cn^{\log_ba}\log_bn\\
\end{aligned}\\
T(n)=\Theta(f(n)\log n)
$$

### What dominates actually means

f(n) dominates g(n) if f(n) grows polynomial faster than g(n).

eg. n^3 dominates n^2, n^2.000000001 dominates n^2, but n log n does not dominates n.

### Essence of master method

Let a>= 1 and b>1 be constants, let f(n) be a function, and let T(n) be defined on the nonnegative integers by the recurrence
$$
T(n)=aT(n/b)+f(n)
$$
where we interpret n/b to mean either ceiling or floor of n/b. Then T(n) has to following asymptotic bounds.

* Case I: if $f(n) = O(n^{log_b a-c})$ **($f(n)$ "dominates" $n^{log_b a-c}$)** for some constant c >0, then T(n) = Theta(f(n))

* Case II: if $f(n) = \Theta(n^{log_b a})$, **($f(n), n^{\log_b a-c}$ have no dominate)** then %T(n) = Theta(n^{log_b a} log_2 n)%

  Extension for $f(n)=\Theta(n^{critical\_value}*(log n)^k)$

  * if k>-1

    $T(n)=\Theta(n^{critical\_value}*(\log n)^(k+1))$

  * if k=-1

    $\Theta(n^{critical\_value}*\log \log n)$

  * if k<-1

    $\Theta(n^{critical\_value})$

* Case III: if f(n) = Omega(n^{log_b a+c}) **(n^{log_b a-c} "dominates" f(n))**for some constant c >0, and if a f(n/b)<= c f(n) for some constant c <1 then for all sufficiently large n, T(n) = Theta(n^{log_b a+c})

