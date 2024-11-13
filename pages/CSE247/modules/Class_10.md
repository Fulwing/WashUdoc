# Class 10

Rubber duck debugging~

Graph and their traversals.

## Definition and representations

collections describe groups' relationships

A set V of nodes or vertices, together with a set E of edges.

Self edge is not allowed in this lecture.

### Directions in Graph

Directed and undirected

Max number of edges: O(n^2)

Directed: n(n-1)

Undirected: n(n-1)/2

If the graph has \Theta(n^2) edges, it is **dense**.

* Complete graph
* Complete bipartite graph (can be separate to 2 parts with every node in one part don't have connection with each other.)

If the graph has O(n) edges, it is **sparse**.

* Ladder
* Tree

### Representation of graph

Adjacency matrix 

undirected graph have adjacency matrix symmetry to diagonal line.

use for Dense Graph

Adjacency list

Array [1..n] - A [i] contains list of edges (i,j)

use for Sparse Graph

| For graph G(V,E)           | Adjacency Matrix | Adjacency List      |
| -------------------------- | ---------------- | ------------------- |
| Space                      | \Theta(\|V\|^2)  | \Theta(\|V\|+\|E\|) |
| Time check edge exist      | 1                | O(\|V\|)            |
| Time to scan all the edges | \Theta(\|V\|^2)  | \Theta(\|E\|)       |

ps. |V| means size of V, just like vector.

## Searches

Remember to mark searched nodes to avoid repeated search.

### BFS

Queue! to store order of permutation.

```java
public void BFS(AdjacencyList map,Node root){
	Queue<Node>order=new Queue<Node>();
    Set<Node>marked=new HashSet<Node>();
    int depth=0;
    order.append(root);
    marked.put(root);
    while (!order.isEmpty()){
        int levelSize=order.size();
        for(int i=0;i<levelSize;i++){
            for(Node j:map.get(order.peek())){
                if(!marked.contains(j)){
                	order.append(j);
                	marked.put(j);
            	}   
            }
        	order.pop();
        }
        depth++;
    }
}
```

Proof for BFS:

Claim: BFS enqueues every vertex w with D(v,w) = d before any vertex x with D(v,x) > d.

Base (d=0): v itself is enqueues first and has D(v,v) = 0.

Hence, by **First In First Out** property of Queue, u is dequeued before any vertex with distance >= d.

When u is dequeued, w is enqueued (if not yet seen)

Any vertex with distance > d must be discovered (and thus enqueued) via edge from a vertex at distance < d.

Corollary: BFS assigns every vertex its correct shortest path distance from v. 

Unreachable with \inf value.

#### Cost of BFS

Mark, enqueue, dequeue O(1), \Theta(|V|) total.

Enumerate its adjacent edges (\Theta(|E|) over all vertices).

Total cost is \Theta(|V|+|E|)

#### Application

Bipartite testing

Level of social network

### DFS 

Stack! to store the parent nodes. (or recursive operations...)

```java
public void DFS(AdjacentList map,Node root){
	Stack<Node>order=new Stack<Node>();
    Set<Node>marked=new HashSet<Node>();
    order.push(root);
    marked.put(root);
    while(!order.isEmpty()){
        
    }
}
```

Proof for cycle detection for DFS:

Claim: G contains .......

If a directed graph does not contain a cycle, we can assign an order to its vertices.

Defn: if u != v, u<v if there exists a path in G from u to v. 

This rule yield a partial order on G.

#### Cost of BFS

Mark, enqueue, dequeue O(1), \Theta(|V|) total.

Enumerate its adjacent edges (\Theta(|E|) over all vertices).

Total cost is \Theta(|V|+|E|)

#### Application 

Detect cycle

Topological sort