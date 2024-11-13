# Class 11

M11 Lab will be out.

pre-lab longer than usual~

May not be hard as AVL~

## Weighted Shortest Paths

### Weighted Graph

assume w(e)>=0

Dijkstra's Algorithm...

Can convert edge weight to placeholder nodes, then BFS as unweighted graph.

Only work for integers, and expensive...

### Shortest Path

Alternative strategy -- "Relaxation"?

Explore, when found a better weight, v.dist + w(v,u) < u.dist

update u.dist, and continue~

**Dijkstra: at each step, explore edges out of vertex v with smallest v.dist, and relax all its adjacent vertices..**

```pseudocode
// mark all vertex unfinished and set start point distance to 0.
while (any vertex unfinished)
	v <- unfinished vertex
	for each edge of v
		// Relaxation~
		if v.dist + edge < u.dist
			u.dist = v.dist + edge
	mark v as finished.
```

Then you get the shortest path tree starting form v!

Proof of correctness of Dijkstra's algorithm: **(when edge weight is not negative)**

**Claim**: when we explore the edges out of vertex v, v has its correct shortest-path distance D(start,v) stored in current best estimate v.dist.

**Pf**: by induction on order of exploration.

**Base**: starting vertex is explored first, with its correct shortest-path distance of 0.

**Ind**: suppose the algorithm is about to choose v for exploration.

Assume that v.dist > D(start, v) (i.e. v's distance if wrong).

Consider a shortest path from start to v.

start -> u -> v

Let u be last finished

By IH, u had its correct shortest-path distance when it was explored.

Moreover, D(start, u) <= D(start,v), since u precedes v on shortest path to v.

If edge u -> v is on shortest path, then exploring u's outgoing edges assigns v its correct shortest-path distance D(start,v). -><-

Otherwise, some other vertex x lies between u and v on this path, with D(start,x) <= D(start,v).

 start -> u -> x ->v

Since v does not have its correct shortest-path distance, v.dist > x.dist, and so x would be explored next, not v -><-

#### Track Distances of unfinished vertices.

Use Priority Queue, keyed on dist.

Dijkstra's algorithm with priority queue:

```pseudocode
v.dist <- 0; H[v] <- PQ.insert(start vertex v)
for all other vertices u:
	u.dist <- inf; H[u] <- PQ.insert(u)
	
while(PQ not empty)
	V <- PQ.extractMin()
	for each edge (v, u)
		if(v.dist + w(v, u) < u.dist)
			u.dist <- v.dist + w(v, u)
			H[u].updatePriority(u.dist)
```

#### Running time of Dijkstra's Algorithm

For each vertex, we do one PQ insert() and one PQ extractMin()

For each edge, we don one PQ updatePriority()

Total cost is |V|(T insert+ T extractMin)+|E| T update priority

operations for PQ is all \Theta( log|V|)

Hence, algorithm runs in time \Theta (|V|+|E|) log |V|)

Bellman-Ford algorithm (For negative weights) \Theta(|V||E|)

Floyd-Warshall Algorithm (For all shortest path of vertices) \Theta(|V|^3)

