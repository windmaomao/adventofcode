# Search all keys behind doors

```
#########
#b.A.@.a#
######### (8)

########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
######################## (86)

#################
#i.G..c...e..H.p#
########.########
#j.A..b...f..D.o#
########@########
#k.E..a...g..B.n#
########.########
#l.F..d...h..C.m#
################# (136)
```

The problem is too real. 

> Imagine there're lots things behind doors, but when you rush to the door you realize that you ain't have the key.

## Problem

How do I find a way to collect all keys without getting stuck. What is the least effort accomplishing that?

These are the question presented at [Advent Of Code 2019 Day 18 Many-Worlds Interpretation](https://adventofcode.com/2019/day/18). It asks to find the minimum steps it takes to collect all keys (`a` to `z`). You start from location `@`, and the doors `A-Z` are locked unless you have the keys `a-z`. For instance, if you don't have key `b`, you won't be able to open door `B` and move behind it. `#` is a wall, `.` is a path. You can only go in four directions each time, up, down, left, and right.

## Intuition

Follow the instinct, we want to look for a path `a->b->c->d->e->f` and in order to do that, we need to find out if where `a` can lead us to and what are all the costs. 

Suppose at one point of time, you have keys `[a,b]` while standing at `b`, you look for your next move, you see `c`, and `d` that is behind a door `C`. That's great, you'll go with key `c`, since you only reach `d`  after having key `c`.

Now, you have keys `[a,b,c]` while standing at `c`, you look for your next move, you see `[d,e,f]` are all reachable. You'll need to make a choice. Let us say the costs for them are `[2,20,5]`. You then take `d` by hoping you pick **the best one at the moment** and you'd come back one day for the others `[e,f]`.

So far you manage to keep track of one route to the end,  `a->b->c->d->e->f` . This gives you the overall cost of `148`. Now you go back to take other choices and you discover two other routes, `a->b->d->c->f->e` and `a->b->c->d->f->e`. One of them costs `136`, which is less. So you update it as your lowest cost.

Let's apply this approach to a case that looks like a real life problem where there are many keys and doors.

```
#################
#i.G..c...e..H.p#
########.########
#j.A..b...f..D.o#
########@########
#k.E..a...g..B.n#
########.########
#l.F..d...h..C.m#
################# (136)
```

If I turn the above into a computer code and run it, it'll take about `5` seconds, the computer then tells me `136` steps is the minimium steps I need to take to collect all keys, approximately I need to back and forth `13` times. And it also tells me it found at least `64` possible valid routes (with caching strategy, termed as *Déjà vu* which we will explain shortly). 

> In reality, it's rare seeing anyone store this much of information in a systematic order and keep track of paths along the way. Not to mention, we don't have the complete map to start with most of time. 

## Déjà vu

The intuition has a fatal flaw. The above case happens to be an open case where you can have lots of possibilities. Roughly speaking, we can have about `10^10` possible routes, that is ten-zeros of routes. But you just said the computer found `64` routes, there's some difference in between! Well, the computer actually implemented some sort of caching.

Remember back then, for each step we have a pattern of holding some keys `[a,b,c]` while standing at `c`? Turns out this is not unique. How come? Because you could go different route `b->a->c` to reach same set of keys `[a,b,c]` while arriving at `c`. **The holding and location**, termed as a state, turns out to be same for both cases. 

These identical states stack up quickly, especially for open map like this. The more you do, the more Déjà vu you are getting, and sooner or later you'll ask the question why we just remember the route we visited before.

> Call it Déjà vu, the feeling that one has lived through the present situation before, your personal experience, your life time lesson, or your predication to the future. Whatever you call it, it happened before and you have a strong guts feeling what'll happen if you just let it run with this again.  

Yes, that's what the computer did, take the Déjà vu as a state, evaluate the cost and then remember it. Anyway we need to evaluate the cost of any routes, so the effort of evaluation is the same, what's new here is to name this state and assign the cost to this name. 

Note: list the states { a: 3, b: 4 }

Our job here isn't judging this list of names and costs, of course if the cost is very large or very small, it could be interesting to note. But most importantly we are here to document the state, and make sure we only do the same state once and then next time when we arrive at this exact state, we can pull it out from the rabbit hat right away instead of going through it again.

> Remember, doing `10^10` times of anything is a costly matter. 

## Baking

Remember back then, for each step after we arrive at one place, we'd like to find our next possible moves? This job isn't cheap. In our previous version, you need to search a path by starting at that location and checking four possible neighbors, and make a decision based on

- `#` a wall, not a good move
- `.` a path, a good move
- `A` a door, a good move if I have the key `a`
- `a` a key, a good move

If a good move is taken and move to a new location, we then continue checking its four neighbors and find next move again and again until we find another key. (There's a shortcut _happy_ approach at this point, which we will explain further later.)

This new path discovery of  `a->b`, is driven by the above four conditions, and most if not all can be pre-calculated after the map is given. Which means, we know 

- where is all walls
- where is the open paths
- where are all keys
- what are doors between keys 
- what are the cost between keys

Therefore if we bake all these information before we start the solver, we could quickly find out if a path `a->b` is valid and its associated cost. 

> The baked info won't be able to tell preciously if you have the right keys to open the path, since the baking can't have any info about the path you are going to take. But at least it'll provide you the basic requirement if a path can be opened starting from a key. Keep in mind this lack of dynamic check can cost you more in terms of more possible routes.

In a real life problem, this means you know before hand if finishing one thing can lead to the success of another one and associated cost. It can't help anticipate the path you actually take (which can lead to more shortcut and quicker solution, explained later), but it gives you most of the information before hand, therefore could be extremely useful and cost-effective in planning. For not so complex problem, we could even lay them out in a piece of paper to do some strategic play out. 

## Shortcut

An interesting observation from time to time, is that there's shortcuts. For instance, going `a->d` can pass `c`, so "Kill two birds with one stone". And this probably, is the major reason why one solution is cheaper than another one in the end. Pause a second here.

If we happen to have some keys, then we know we can open certain doors in the future, and if it happens there's something behind that door, we are saving a lot of trouble making roundtrip if otherwise. To be honest, this is the main feature of this problem. 

>  Sometimes we call one smart-ass, because he/she can absorb more info and response to the situation in a more optimized way. They don't accomplish it by over-doing in this case, instead they can take shortcuts since they are well prepared. They are street smart.

Interestingly enough, these shortcuts are more associated with the path you've taken, so most can't be baked before you start. They reveal themselves along the way, because without taking some moves, you just won't be able to tell if they are shortcut or not :) 

To further take advantage of this observation, we could stop the neighbors checking after we find a new key and forget any possible routes behind that key. We are making the assumption that nothing behind that key is going to lead to cheaper ways. This is more to say "I'll take anything" approach. Pause one more second here.

Practically in real life problem, you can always go from one place to another one, so technically you won't be able to entirely block the path. Intuitively speaking, the cost of going beyond should be at least one magnitude higher. Therefore not going at all saves tremendous effort without exploring uncharted territory prematurely.

This blocking strategy is, more or less, correct. And practically should be used. This is a practical strategy we all use everyday, we sometimes "Settle with anything works". This might be a general cost-effective thing to do and should only fails in very rare case. A guts feeling is that the righter solution should still come later after we pass this location, not worth to look for more complicated (or costly) future when not needed. 

## Learned

We are not asking "Every roads lead to Rome" question, instead we are asking cheapest pizza you can ever get. Remember the problem we are solving here.

Belongings and position is a state, remember this. If you can name it and evaluate it, it can save you time in the future.




