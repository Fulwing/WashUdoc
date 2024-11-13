# Class 12

Next Wednesday, Exam3! Online

Course evaluation next Wednesday

Studio as usual.

## Greedy algorithm and Minimum spanning tree

Abstract graph problem (network design problem)

Minimize cost of building transmission lines

Desired set of edges is a tree (no cycles)

Clustering data points by proximity.

Approximate solution for salesperson problem. (approximation algorithm)

### General approach

* Start with empty edge set T
* Keep adding edges to T
* Till all the points is connected

### Greedy Principle

Always pick the best edge under current circumstances.

### Prim’s Algorithm

Similar to Dijkstra’s Algorithm

pick the edge of minimum weight that will connect a vertex in T and another vertex that is not in T.

Prof of correctness:

Claim: After any number of edges are chosen, algorithm’s current edge set T is a subset of some minimum spanning tree for G.

(Hence, once T spans all of G, T is itself an MST for G.)

Pf: by induction on # of edges chosen so far.

Base: before any edges are chosen, T is empty, so is a subset of every MST for G.

Ind: Suppose Prim’s criterion picks a next edge e.

Let C and N be the connected and unconnected vertices of G after picking edge set T.

By IH, T is a subset of some MST T\* for G.

Some edge e’ of T\* connects C and N, as does edge e.

If e != e’, the T\* U{e} (spanning tree + 1 edge) forms a cycle in G.

Hence T’ = T\* U {e} -{e’} is another spanning tree for G.

Prim’s criterion picked e instead of e’, so w(e) <= w(e’).

Conclude that W(T’) = W(T\*) – w(e’) + w(e) ≤ W(T\*), and so T’ is a minimum spanning tree that contains T U {e}, as claimed. QED

Implement Prim’s algorithm 

```pseudocode
starting vertex gets v.conn = 0, all other u get u.conn = ∞
mark all vertices as unconnected
while (any vertex unconnected)
    v <- unconnected vertex with smallest v.conn
    for each edge (v, u)
        if (w(v, u) < u.conn)
            u.conn = w(v, u)
    mark v connected // augment partial MST with edge from T to v
```

Algorithm runs in time Θ((|V| + |E|) log |V|) using a binary heap

### Kruskal’s algorithm

Union find data structure

Kruskal’s criterion: add to T the edge e of minimum w(e) that does not form a cycle when combined with edges already in T.

Heap, or pre sorted list (no update needed)

Connected components detection

Union-Find algorithm

Running time of Kruskal's Algorithm

* Stages: sort edges, run main loop
* Main loop: add next-smallest edge provided it does not create cycle
  * Equivalently: add next-smallest edge provided its endpoints aren't in same connected component, i.e. their components are disjoint
  *  Need disjoint-component data structure
* Union-Find: check disjointness in O(log |V|) time
* Main loop running time: O(|E| log |V|) <-- we can cut off after we 

add |V|-1 edges

Total cost: O(|E|log|E| + |E|log|V|) = O(|E|log |V|)

* Last equality holds b/c E = O(|V|2) and log(|V|2) = 2 log |V|
*  Same as Prim's since |E| = Ω(|V|) or else MST wouldn't exist

## Course wrap up