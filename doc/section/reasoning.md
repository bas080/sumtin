## Reasoning

Referential transparency is nice. What I was missing was a simple random
generation library that works predictably.

This is achieved by passing the random function as an argument. It leaves it up
to you to use Math.random or your favorite pseudo random function instead.
