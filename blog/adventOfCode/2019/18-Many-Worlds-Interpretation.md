# Day 18 Many-Worlds Interpretation

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

## Problem

The goal is to find the minimum steps it takes to collect all keys (`a` to `z`). You start from `@`,   and you won't be allowed to pass through a door (ex. `A`) without its key (ex. `a`).

> `#` is a wall, `.` is a path.

## Strategy

The overall strategy is to find a path for keys by taking them as nodes, for instance, we are looking for a path `a->b->c->d->e->f` . In order to resolve the edges connecting the nodes, for this problem, we need to find out if `a->b` exists and if so what's the the steps taking it, the cost. 

There're two strategy to find out the edges, one is more intuitive, referred as `dynamic`, whereas the other one referred as `static`. 

### Dynamic

At any particular time, if you start from `a`, and you look for a way to reach next possible keys.

### Static

