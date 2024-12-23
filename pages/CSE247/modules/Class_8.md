# Class 8

BSTs and AVL Trees

Motivation - Limitations of Dictionaries

* Worst-case operation performance is \Theta (n).
* Do not adequately represent naturally ordered collections.

Ordered Dynamic Set Operations

(Java: SortedSet)

Dynamic - means that a query of the set must return the correct answer at any point during a sequence of insertions and deletions.

Sorted Array / Sorted List (cannot insert in less than n)

Sub-linear time insert/remove/find

Binary Tree...

* can do operations in time proportional to height of tree.
* not sub-linear size always...

Binary Search Tree

* Every node x contains a key value x.key
* Every node satisfies the following invariant ("BST property"):
* For every node y in x's left subtree, y.key <= x.key
* For every node z in x's right subtree, x.key <= z.key
* (If each key in BST is unique, these inequalities are strict <)

#### Find

min on the left most, 

max on the right most.

#### Insert

create node and put it in correct level. (any level)

#### Iterate

succ(x)=right most element (if null, return the parent) in x's parent

#### Remove

swap delete item with it's successor,or predecessor, then remove.

All operation of the tree is related to height of tree.

## Balanced tree..

AVL **A**delson-**V**elsky and **L**andis.

differ height at most 1.

