# Haskell context for linear reasoning
> How difficult is writing a `for` loop?

[Published under Medium](https://medium.com/swlh/haskell-context-of-reasoning-66580aa580bf)
![](https://miro.medium.com/max/700/1*-7r3VIeMv0mKp7GoEuX0KA.jpeg)

We start programming by using `for` structure to perform a loop, such as the above example. As you can see, the additional effort to setup a loop is mainly due to that we need to dig into another context, in this case, array.
```js
for (let i = 0; i < 6; i++) { print i; }
```
Looping isn't pretty. Other than throwing in additional boilerplate, keeping track of the extra index, the issue mainly lies in that it breaks the reasoning process. 
Dimension is costly, for sure. No wonder we don't want to approach problem in higher dimension, we tend to flatten our thoughts so that we can stay in a linear one dimensional array most of time so to visualize the data flow in our limited brain power. 
## Dimension as variable
Let's take one step back and see how `Haskell` approaches this type of reasoning.
```haskell
[i | i <- [0..5]]
```
This is called list comprehension.
> I use context whenever I'm talking about array or any context structure here. The accurate definition only comes after treating list as a `Monad`. 
> What's interesting is on the `i <-` side. You might think it's assigning the list to `i`. But this is not true, it's actually binding the context to `x`, so that `x` stands for the (possible) value inside the list, similar if not identical to the classical loop.
> Another example from the nested loop. You can see writing multiple loops is more or less multiple sections with `<-`.
```haskell
[(i+j) | i <- [0..5], j <- [i..5]]
```
## Context
Interestingly, the above context concept wasn't created for `list` or array only. It was designed to be applied to any context, let it be array, map, set, or any type you can imagine, as long as it contains some values that we can operate on.
```haskell
[i | i <- Context]
```
Does that mean we can avoid writing loop? No, we still need loop, but instead of thinking with loop, maybe we should start thinking things as matter of contexts. If the context is available, we can quickly use it to formulate the problem while preserving the main thread of brain reasoning. 
This means, relatively speaking, we can try to attempt higher dimensional or more complex context based problem without drawing too much brain power detouring into matrix of sub-problems, simply because this time we start with a language with them. 

> I don't think it will save you time constructing the context if it's not available. But if it's constructed already, it'll make big difference. This logic is almost true for everything, isn't it?