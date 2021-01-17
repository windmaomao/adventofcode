# The behavior of linked list

A list of objects can be tracked with an array but it can be also tracked via a linked list. In order for the list to be linked, all we need to do is to assign a pointer to the object allowing it point to another (or `next`) object, as illustrated below.

<img src="https://www.studytonight.com/data-structures/images/node-in-linked-list.png" style="zoom: 67%;" />

## Behavior

Practically the pointer is all we need to start this behavior, and most of time we don't even realize that we are using it, ex.

- an object ref sharing same object
- an array of index of pointers
- a function call with a call back function
- linear project dependencies

The reason is because each of contains a node that has its own data as well as a pointer to the `next`object, let it be another data or function. And this `node` structure is highly scalable and flexible. For instance, you know everything about yourself, but not the entire picture, ex. how many objects in the list. Moreover the data can be modeled and instantiated before the pointer is assigned.

In order to mimic the linked list structure, we can pick a `head` object where you start, as well as a `tail`object where you end with the pointer set as `null`. Once we have this structure, we can solve similiar problem that we can apply to a linked list. To name a few,

- add a object to the list
- remove a object from the list
- merge two lists
- reverse the order of the list
- detect if the list has a loop
- rotate the objects within the list







