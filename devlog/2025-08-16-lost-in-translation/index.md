---
title: "Lost in Translation"
description: "Moving from web development to C++ - the culture shock of pointers, memory management, and build systems"
tags: [devlog, helios]
keywords: [cpp, c++, web development, java, javascript, memory management, pointers, visual studio, learning cpp]
authors: [thorstensuckow]
---


My background is in the web world - I've spent years wrangling Java, JavaScript (and countless frameworks based on it), PHP (from Zend to Laravel over Symfony and self-written solution), and the closest I ever got to the metal was writing C, of which I thought it would give me a head start for a game engine project. In a way, it did: I wasn't scared of pointers. But it also gave me a false sense of security.

<!--truncate-->

Moving to C++ is like a profound culture shock. The language demands a completely different level of discipline. Suddenly, it's not just about maintaining memory, it's also about ownership. The concept of smart pointers, and the critical role of a destructor is a universe away from the cozy safety of a [garbage collector ❤️](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html) or `==` out of the box. (I now understand the motivation behind Java better.)

And that's before you even get to the build process: No more _save and refresh_ and _hot reloads_. Here, you enter a three-act play with the compiler, the linker, and a mysterious director named VisualStudio 2022 and its ever so confusing tree menus and option dialogs. I guess it's time to get familiar with compiler command line options, since they play such a crucial role in C++... 