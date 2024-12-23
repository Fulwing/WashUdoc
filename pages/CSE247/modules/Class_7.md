# Class 7

LAAAAAAAAAAAAB

lab 6 lab 7

## Efficient collections via hashing

Outline:

*  Dictionary ADT
* Hashing
  * Goal: avoid collisions while preserving correctness.
  * Front end: hash value design for objects
    * for new application code
  * Back end: hash table design as a data structure.
    * from library

Hash Function Pipeline

Objects -> Integers -> Buckets

(key)          (integers)     (indices)

### Dictionary

insert() insert a key value pair

find() based on keys return key value pair

remove() based on keys remove key value pair

#### some bad implementations

| Structure     | insert | delete | find  | space |
| ------------- | ------ | ------ | ----- | ----- |
| unsorted list | 1      | n      | n     | n     |
| sorted list   | n      | n      | n     | n     |
| sorted array  | n      | n      | log n | n     |
| min-heap      | log n  | N/A    | N/A   | n     |

Let U be the set of all possible keys

Allocate an array of size U

If we get a record with key k, put it in k's array cell.

| direct table | 1    | 1    | 1    | U    |
| ------------ | ---- | ---- | ---- | ---- |

problem for direct table: 

* U>>n
* key aren't integers

Idea: Hash Functions

A hash function h maps keys k of some type to integers h(k) in a fixed range [0,N)

Collision, when two key  mapped to one value

Simple strategy: chaining

| hash table | n/m+1<f(n)<n | n/m+1<f(n)<n | n/m+1<f(n)<n | m(buckets)+n |
| ---------- | ------------ | ------------ | ------------ | ------------ |

Simple Uniform Hashing

load factor = n/m

m can be adjust dynamically.

### Controlling the Load Factor (in chaining, not linear probing)

constant load factor = constant complexities

hash DOS(Denial of Service) attack

### Some Hash function design

#### Assumptions

Objects to be hashed have been converted to integer hash codes range from [0,N)

For java, &0x7fffffff (java hash code can be negative)

#### Two Main Approaches

##### Division hashing

bucket index = hashcode modulo table size.

the perils of division hashing:

if j = c mod m, them j mod d = c mod d

prime number!

avoid pow of 2 and 10

##### Multiplicative hashing

let A be a real number in [0,1)

b(c) = floor(((c*A)mod 1.0)m)

x mod 1.0 mean fractional part of x.

cA mod 1.0 is in [0,1), so b(c) is an integer in [0,m) - an index.

A should not be too small.

suggest picking A from [0.5,1)

Ex: A=(sqrt(5)-1)/2

#### Hashcode generation



