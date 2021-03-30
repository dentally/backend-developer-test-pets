# Instructions

Given a "LOVE PETS" score, determine whether or not they have a given pet, and a full list of their pets.

An "LOVE PETS" test produces a single numeric score which contains the
information about all the pet(s) a person has.

The list of pets (and their value) that we score are:

- dog (1)
- cat (2)
- cow (4)
- goat (8)
- pig (16)
- camel (32)
- chicken (64)
- horse (128)

So if Jack has a cat and camel, he gets a "LOVE PETS" score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Jack has any of the pets listed above.
- All the pets that Jack has.

Note: a given score may include pets **not** listed above (i.e.
a persons pet score of 256, 512, 1024, etc.). Your program should
ignore those components of the score. For example, if the pet
score is 257, your program should only report the pet of dog (1).