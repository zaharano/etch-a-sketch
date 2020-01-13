# Etch-a-Sketch

is probably (c) somebody somewhere

##### This project is part of The Odin Project Webdev 101 curriculum.

## Things and stuff
There's something I'm not getting about `this` which is probably fine given how instructors everywhere say it's hard to fully grasp. Maybe it more has to do with... how `this` works within object declarations at runtime. Anyway I *think* that trying to do this project in some OOP style is beyond what was expected, so my failure to do it perfectly that way is probably just fine...

I might refactor this to have cells be a separate object if I did this over.

There's probably something to be done differently here using constructors? Don't really get those yet.

Performance of the grayscale version at >100 or so grid size gets slow. I don't know enough about DOM stuff to know if that's just to be expected at that scale, or something that could be optimized by using some method other than setting opacity style directly on the cell. Or maybe this is something to do with async concerns, like just setting this to be async would fix the issue? *(putting the keyword `async` before the callback function on the listener did not seem to change things)* Is the callback of an event listener already default async? Tblearned, I suppose.