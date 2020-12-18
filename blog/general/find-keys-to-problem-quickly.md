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

Imagine there're lots things you'd like to get, but when you rush to the door without the key.

Yeah we realize that we just simply don't have the key. More accurately, we don't have the (right) key (at the right moment). Therefore we can't open the door, thus can only imagine what's behind the door.

## Problem

How do I find a way to collect all without getting stuck. Or what is the least effort doing that. Any plan?

The problem actually was created as a competition question in Advent Of Code 2019  and Day 18. It is to find the minimum steps it takes to collect all keys (`a` to `z`). You start from `@`,   and doors `A-Z` are locked without keys `a-z`. For instance, if you don't have key `b`, you won't be able to open door `B` and move behind it. `#` is a wall, `.` is a path. You can only go in four directions, up, down, left, and right.

## Intuition

We are absolutely looking for a path `a->b->c->d->e->f`  and in order to do that, we need to find out if `a->b` exists and if so what's the cost, here the number of steps. 

Suppose at one point of time, you have keys `[a,b]` while standing at `b`, you look for your next move, you see `c`, you aslo see `d` but it's behind a door `C`. This is great, you'll go with key `c`, simply that you can't go with `d`. Moreover once you have `c`, door `C` won't be problem.

Now, you have keys `[a,b,c]` while standing at `c`, you look for your next move, you see `[d,e,f]` are all reachable. You'll need to make a choice. Let us say the costs for them are `[2,20,5]`. You then take `d` by hoping you pick **the best one at the moment** and you'd come back one day for the others `[e,f]`.

You manage to keep track of one route to the end,  `a->b->c->d->e->f` . This gives you the overall cost of `148`. Now you go back to take other choices, especially the ones that you have to park when they were discovered. And you find  there're two other routes, `a->b->d->c->f->e` and `a->b->c->d->f->e`. And one of them actually costs `136`, which is less. I should've taken this route. Of course you didn't know that, but you do now since you've done it now.  

This is the right approach. The following is a problem that I believe very close to a real life problem. 

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

> The reason I think this is closer to real life is that it's so bizarre that everything is actually around you but you fail to find out how to reach them, and/or in which order. 

The answer is `136`. It takes only `4` seconds for my old laptop to reach the answer, believe it or not !! 

However, If it had been a real life problem,  it probably won't be solvable, because there's up to `64` possible routes (with caching strategy, termed as *Déjà vu* which we will explain shortly). As a human, it might be rare seeing anyone store this much of information in a systematic order and also keeping track of everything along the way, leaving alone the map isn't available to us from the very beginning.

Now you see, pick the cheapest path at the moment is, for linear problems (ones with only one working path), can play out nicely. But it also breaks down pretty quickly once the path gets little bit more convoluted along the way. It could be one of the issue preventing you reaching solution quickly. This is so true that sometimes you get into some situation that you only wish you can dig yourself out.

Keep in mind this is a global optimization game, not a localized one. We are not looking for one road, as in the "All road lead to Rome", instead we are looking more for the **"Cheapest road to Rome"**.

## Déjà vu

If we follow our intuition without some careful consideration, we won't be finish the problem on time. Since roughly speaking, we can have `10^10` possible routes, that is ten-zeros of routes,  compared to `64` we actually end  up with. 

Remember back then, for each step we have a pattern of holding some keys `[a,b,c]` while standing at `c`? Turns out this is not unique. These cases stack up quickly, especially for relatively more open map. Since you want to try out lots of different possibilities, you'll arrive at same position with same set of keys a lot. Let's pause for a second.

Yeah, call it Déjà vu, the feeling that one has lived through the present situation before, your personal experience, your life time lesson, or your predication to the future. Whatever you call it, it happened before and you have a strong guts feeling what'll happen if you just let it run with this.  

The computer knows the map, thus here the Déjà vu is a precise state, where it could have a name, as well as a number associated with the cost to this future. Our job here isn't judging the number, of course if the number is very large or very small, it could becoming interesting. But most importantly we are here to document this number, and make sure we only find out the number once and then next time when we arrive at this exact state, we can pull it out from the rabbit hat right away instead of going through the same computation. Remember, doing `10^10` times of anything is a costly matter.Therefore the saving is tremendous and should be applied at all cost. This is more to say, "Do it once. Do it right."

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

- I'll take anything,
- Do it once and do it right
- Forget "All roads lead to Rome", there could be too many.

