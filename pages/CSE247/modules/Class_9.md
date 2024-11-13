# Class 9

Lab 9 out this week!!!

Exam 2 next week 11/16 6:30-8:30

## How to Balance a tree

Worst cost preview

Bridge From Previous Lecture

AVL Tree - Heights of left, right subtrees of every node differ in height by at most 1 

Balance factor

height of left subtree - height of right subtree (empty node has height -1)

every node of an AVL tree has a balance factor of either -1, 0, +1

Insertion node into an AVL tree can make the root's balance +2 or -2.

Resulting tree may no longer be AVL tree

### Restore balance

Rotate tree

Rotate right at parent x, putting left child of x as parent.

​	    	X												Y

​	     /	  \										/      \

​     Y			T3            <=> 			T1		X

​    /\															   /\

T1 T2															T2 T3

```pseudocode
rotate_right(node x) -> node:
	node y=x.left
	x.left=y.right
	y.right=x
	return y

rotate_left(node y) ->node:
	node x=y.right
	y.right=x.left
	x.left=y
	return x
```

```Java
public class Node{
    private Node left;
    private Node right;
    private Object value;
}

public void rotateRight(Node x){
    Node y=x.left;
    //Node T1=y.left;
    Node T2=y.right;
    //Node T3=x.right;
    x.left=T2;
    //x.right=T3;
   	y.right=x;
    //y.left=T1;
}
public void rotateLeft(Node y){
    Node x=y.right;
    y.right=x.left;
    x.left= y;
}
```

### Types of unbalance

left left higher - rotate right on root

left right higher - rotate left on root left (back to case left left higher) - rotate right on root

right left higher - rotate right on root right (back to case right right higher) - rotate left on root

right right higher - rotate left on root

### When rebalance

insertion

only rebalance once

deletions

check up to the root

## Alternative Non Binary Tree

### B tree

height of root to leaf is constant.

### 2,3,4 tree 

h 2^(h+1)-1 keys

when insert

promote first, then split

can be map to binary tree

### Red and Black tree

x                   ->                 x

xy                   ->               y

​										/

​									x

xyz                 ->                 y

​									/                \

​								x                     z

lose balanced with factor two, better performance for more insertion and deletion.

AVL would be better when searching intensive.