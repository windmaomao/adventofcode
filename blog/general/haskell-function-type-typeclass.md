# Haskell function, type and typeclass

Is this level of trouble worth it in the end?
[Published under Medium](https://windmaomao.medium.com/haskell-function-type-and-typeclass-b8cef0effe34)
![](https://miro.medium.com/max/2730/1*CkwIuglztV31ZjwKWsZTlQ.jpeg)
Like any tech-savvy person who would chase the latest computer spec, I'm very much into understanding what's really going on with a new language, especially when the new language starts to show its potential in practical fields.

## Function
The learning initially isn't that difficult at least not the beginning., I've been practicing the functional programming, comfortable of functions as a first class citizens and strongly feeling that function probably is what the programming is about, not the implementation.
```haskell
>>> length (takeWhile (<1000) (scanl1 (+) (map sqrt [1..]))) + 1 
```
With recursive feature and chaining (via $ and dot), one nice thing that `Haskell` can do is writing code with fewer lines. It's not only short, but also concise and (easy) to understand, easy being subjective.
It gets quite a few stuff out of box, ex. laziness, chaining, pattern matching, guards, where, let, etc.  Although these are quite eye-catching, I won't say this is where the magic comes from. It got to be something else worth your effort.
## Type
The next few weeks became a confusing journey, new terminologies everywhere, new definition over old concept, synonym for something similar but not quite. I have to throw away some of my existing understanding of the programming.
And it all starts with the fact that you can define a custom `type`,
```haskell
data Bool =  True | False
```
What's interesting is that the `type` can be defined by a flexible way, using a `constructor`. Because the constructor is a function, it can take type parameters. Wow,
```haskell
data Maybe a = Nothing | Just a
```
How could a `type` have a definition depending on an unknown variable? Do we have that kind of capability before? Does that mean we can program on it? Is this sort of Matrix movie?
Since people tends to give the same name to the type constructor and the type, we see the following a lot, which can confuse the heck of newcomers. 
```haskell
data Vector = Vector a a a
```
WTH? I can't understand the above statement for quite sometime. It turns out the definition above doesn't really care about `a`, instead it tells you what will happen to three `a`. Therefore do not expect to find any implementation of `a` inside the source code. Moreover the name is very arbitrary, you could care less as I implied. The beauty then lies on the structure of `a a a`, as well as its implementation. Man.
> If you can write a `type` on the go, you probably can express yourself in terms of coding with extra dimension, considering variable/instance/function as the foundation dimensions. If AI stands for a helper to human brain, type system is more like the AI of the programming. It should provide you with a solution without you knowing the solution. A viable solution should come out by `itself`. Is this really possible?
## Typeclass
The story didn’t end here. Once you get into a wild world, most of time you’ll be presented with a unique categorization of that wildness. Here comes the `typeclass`.
Do you remember back after you programmed a few different car models, you normally want to design a Car class to save some work, which deals with different car metrics, ex. color and model. Similarly, once you have lots of types, you want to save some of work in terms of defining them, especially for the part of similar behaviors among them.
```haskell
class Eq a where  
    (==) :: a -> a -> Bool  
    x == y = not (x /= y)
```
The above defined an equal behavior for numbers. One popular topic over the internet is about `Functor`, so I’ll throw the piece here for free,
class Functor f where  
```
   fmap :: (a -> b) -> f a -> f b  
```
Can you believe, the above line tells you there’s some similarity between `[]` , `\r -> r` and `IO`. Let me translate it, it says there’s something in common between a list, a function and an input/output. Yeah I don’t care if you believe it or not, it actually empowers some fancy operation in the following,
```haskell
>>> (+2) <$> [2,3,5]
```
where the left hand side of `<$>` is a regular function, and right hand side is a context List where elements inside is more relevant to that function, for instance, each element can be the input of the function. The answer of the above statement is `[4,5,7]`.
The functor is a bit eye opener, in the sense, it comes from one extreme principle (or shall I say ultimate goal) of the computer science. We want to maximize the exposure of the generic usage of a single function while preserving the reasoning. Otherwise we would refer this type of exposure as collection of knowledge, or simply as experience, which you sugar code in your resume. But you wouldn’t come up the formula of that experience, can you? That seems to me the point of the functor.

## Future
Where does the future lie? Not sure, but what’s known is that with this level of generalization, we’ll enter a retrospective zone that every thing we did before gets a chance to be revisited in a higher level, except the outcome this time is much more re-usability in the end, and this generalization can benefit other fields that might or might not be related in the past.