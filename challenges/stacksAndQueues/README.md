# Challenge Summary
<!-- Short summary or background information -->
create a node class 

create a Stack class
with: push(), pop(), isEmpty() and peek() ;

create a Queue class 
with: enqueue(), dequeue(), isEmpty() and peek() ;


## Challenge Description
<!-- Description of the challenge -->
- i need to create three classes for node , stack and queue .
so in stack i can push , pop and in the queue to enqueue and dequeue .

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- in stake we know that firs in last out , by using a top pointer that updated every time we can push or pop by using it ,on the other side in queue i used two pointers front and back , so when i need to add i just change the back pointer and when i want to remove i change the front pointer 

## Big O notation 

starting with stacks , we have there a pointer called top , will alway point on the top element in the stacks , so when we push we change his position to the new pushed element with out going through the whole data so O(1) for it , 
when we pop same thing happened we change the top to the next item so O(1) , for peek and isEmpty we only check the top so O(1) .

now with queues we have front and back pointer when we enqueue we add to back pointer the new element then change the pointer to the new element we added without going the whole elements so O(1), for dequeue same thing but for the front pointer O(1) , peek and isEmpty will check the front pointer same as stacks O(1).

we used to have O(n) and O(2n) when we want to add or remove from linked-list but here with the pointers it much easier , no need to go through the all nodes every time we want to do something and less complexity so here O(1) ;  



