---
slug: lost-in-translation
title: "Lost in Translation"
tags: [devlog]
---


My background is firmly in the web world. I've spent years wrangling Java, JavaScript, PHP, and the closest I ever got to the metal was writing C, of which I thought it would give me a head start for a game engine project. In a way, it did: I wasn't scared of pointers. But it also gave me a false sense of security.

<!--truncate-->

Moving to C++ is a profound culture shock. The language demands a completely different level of discipline. Suddenly, it's not just about memory, it's about ownership. The concept of smart pointers, and the critical role of a destructor is a universe away from the cozy safety of a [garbage collector ❤️](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html). 

And that's before you even get to the build process: No more hot reloads or save and refresh. Here, you enter a three-act play with the compiler, the linker, and a mysterious director named VisualStudio 2022 and its ever so confusing tree menus and option dialogs.