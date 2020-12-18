# How to find keys without getting stuck by the door

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

The problem is pretty real. 

There're lots things we'd like to get, but more often we rush to the door without the key, and bang our head against the it, and then we start to wander around.

Yeah we realize that we just simply don't have the key. More accurately, we don't have the (right) key (at the right moment). Of course, we have some keys, and we always have some keys. 

## Problem

How do I know I won't get stuck in next door. Or what is the least effort if eventually I have to go through all of them. Any plan?

The problem actually was created as a competition question in Advent Of Code 2019  and Day 18. It is to find the minimum steps it takes to collect all keys (`a` to `z`). You start from `@`,   and doors `A-Z` are locked without keys `a-z`. For instance, if you don't have key `b`, you won't be able to open door `B` and move into the area behind.

> `#` is a wall, `.` is a path.

How come do I have a goosebump that the answer will lead to other things?

## Intuition

We are looking for a path `a->b->c->d->e->f`  and in order to do that, we need to find out if `a->b` exists and if so what's the cost, the number of steps. 

Suppose at one point of time, you have keys `[a,b]` while standing at `b`, you look for your next move, you see `c`, you aslo see `d` but it's behind a door `C`. This is great, you'll go with key `c`, simply that you can't go with `d`. Moreover once you have `c`, door `C` won't be problem.

Now, you have keys `[a,b,c]` while standing at `c`, you look for your next move, you see `[d,e,f]` are all reachable. You'll need to make a choice. Let us say the costs for them are `[2,20,5]`. You then take `d` by hoping you pick **the best one at the moment** and you'd come back one day for the others `[e,f]`.

You manage to keep track of one route to the end,  `a->b->c->d->e->f` . This gives you the overall cost of 148. Now you go back to take other choices, especially the ones that you have to park when they were discovered. And you find  there're two other routes, `a->b->d->c->f->e` and `a->b->c->d->f->e`. And one of them actually costs 136, which is less. I should've taken this route in the first place. Of course you didn't know that, but you do now since you've done it now.  

This is the right approach. To demo it, I picked a map which I believe very close to a real life problem. 

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

The answer is `136`. It takes `4` seconds for my old laptop to reach the answer, impressive once I solved it !! 

However, If it had been a real life problem,  it probably won't be solvable, because there's up to `64` possible routes (even with caching strategy, termed as *Déjà vu* which we will explain shortly, without caching the possible routes could be a lot more). As a human, it might be rare seeing anyone store this much of information in a systematic order and also keeping track of everything along the way, leaving alone the map isn't available to us from the very beginning.

> Now you see, pick the best one at the moment is, for linear problems (ones with only one working path), can play out nicely. But it also breaks down pretty quickly once the path gets little bit more branches along the way. Not only it's not the best choice, but also it could be one of the issue preventing you reaching solution quickly. That's why this is a global optimization game, not a localized one. We are not looking for one road, as in the "All road lead to Rome", instead we are looking more for the **"Cheapest road to Rome"**.

## Déjà vu

If we follow our intuition so far , we can't even finish the problem on time. Since roughly speaking, we can have `10^10` possible routes, that is ten-zeros of routes,  compared to `64` we actually end  up with. What is this caching solution?

Remember back then, for each step we have a pattern of holding some keys `[a,b,c]` while standing at `c`? Actually this is not unique at all. For open map, this is especially true, since you want to try out lots of different possibilities, so you could end up at one position with same set of keys. Let's pause to think of a real life case for this. 

Yeah, call it Déjà vu, the feeling that one has lived through the present situation before, your personal experience, your life time lesson, or your predication to the future. Whatever you call it, it happened before and you have a strong guts feeling what'll happen if you just let it go with this.