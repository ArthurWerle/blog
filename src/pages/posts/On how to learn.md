---
layout: "../../layouts/MarkdownPostLayout.astro"
title: "On how to learn"
pubDate: 04-04-2024
description: "Tips and tricks about learning I wish I knew earlier"
author: "Arthur Werle"
image:
  url: "/kids-studying.jpg"
  alt: "Kids studying in a school"
tags: ["remote", "travel"]
---
![Kids studying in a school](/kids-studying.jpg "Kids studying in a school")

tl;dr:
- build the things you wish exist
- never build something the same way you built another thing
- learn things when learning new things
- solve YOUR problems, stop thinking of creating a new globally used app, create an app you're gonna use
- learning should not be painful
- have fun


## On how to learn

The way I learn changed a lot in the past years. To give you more context, let's start with a brief history of what learning meant to me through the years.

First, they (with they, I mean school, teachers, people around me etc) made me believe that learning was reading. Just reading. The only advise they always gave me was "you should read more". Then, when I made 18, learning was getting into college. In college, I was showered with things I didn't want to learn, or didn't have any interest (even though I was in the course I wanted to be). Then, after that, learning was following online courses or tutorials. See, in all those scenarios, I never felt **good** while learning. I was always upset, always disappointed with myself. I kepp always wondering: "I'm doing everything right, why am I not learning things?". I think all programmers get through times when they're absolute on fire, when they code everyday, everywhere. I'm sorry to say, but for most people (like me), this don't last long. Then, I found myself disappointed, with no motivation to learn, no motivation to code, nothing. 

Things only changed when I started to do things **for me**. As obvious as it sounds, it wasn't obvious for the 18 year old me, and may not be obvious for you. To talk more about what I mean with that, let's divide this into some topics:

### 1. Have clear goals on what you want to learn

I bet you read this a lot in your life, so I won't be long here, just please stop setting goals like "learn java" or "learn mysql". Have more defined goals like "build X thing using java". Simple as that.

### 2. Build the things you wish exist

For me, this is the key point of everything. There is NO WAY that you like everything you use in your daily basis. Do you hate your note taking app? Build your own. Also, simple as that. I bet you're gonna learn more building one of these things than in ANY course you'll buy. Trust me.

### 3. Learn things while learning new things

So you decided to, for example, build your own note taking app? Why not, while creating it, learning a new language? Why not, instead of using the language/framework you're comfortable with, choosing a new one? Choosing a new DB? Trying a completely new architecture? Or just simply building this in a new OS, in a new IDE.  You may say "but this will take much longer". YES. But is not about in how much time your gonna finish this. And let's be honest, you may **never** finish it. Honestly, the goal isn't even finishing it. The goal is just to learn.

### 4. Stop trying to "save the world"

Is there anyone here that had an idea of something but gave up because "didn't know how to scale/ship this"? I have. This is connected with the point **2**, and what I mean here, is to forget about the world. Forget about other people using it. Forget about everything. Just solve your problem. You don't know how could you, for example, add authentication, cybersec, performance and etc to your own note taking app? But why do you need those things? You could create it without authentication, because you could simply run it on your personal computer/home lab. Those just are just excuses of your brain trying to make it stay comfortable. First, solve your problem. Stop trying to build the new Notion app. Build the app you wish Notion was **for you**.

### 5. Never build something the same way you built another thing

You're a web dev with a strong background in React and you want to build a note taking app. Why use React? Why not use Svelte for that? Or Vue? Or Angular? Or Preact, Solid.js, or any other? If you already have built a Svelte app, go with Vue now, and so on. Why waste this opportunity to learn something new? 


### Some real-world examples of things I did

I always hated financial-control apps. You know the ones you add your expenses, your incomes and stuff? Hated. IMO, all of them are terrible, in all terms. So what I did? I built my own. I have total control of everything. I've hosted it on my raspberry pi, so it's accessible anywhere, and I store the data in the same place. I used React for that (my main stack) but I took the opportunity to learn a new state management tool and new patterns.
 
Speaking of my raspberry pi: the most fun and most usefull project I did **BY FAR** was building my own media server. I can watch movies on my smart TV, smartphone, in all my computers, with the data centered on my raspberry pi server. I download movies/TV shows/animes directly on my raspberry pi, they go directly to my Plex folder, get read by it and added to my Plex app. I'm not gonna enter in deep details here because you can find tutorials of all this. This involved **a lot** of things, like docker, portainer, ubuntu server, vim and etc. There are no words that I can say how much I learnt from this, seriously. 
 
Another example? The blog you're reading this. I wanted to have a blog, so instead of using tools I already knew, I took the opportunity to learn Astro. Super fun.
 
And just to mention other things I created for myself: chriptographed flash disks with digitalizations of some documents, app to help me to choose movies to watch (integrated with AI), app to help me divide my investments based on a strategy, app to centralize all my bookmarks of all social media. The new things I'm gonna create, I'm gonna take the opportunity to build using some tools like [Leptos]([Home - Leptos](https://leptos.dev/)) that let you build web applications with Rust. I'll also build something using WebAssembly. I still don't know why, but when the need of a new thing come up, I have those things I want to learn to use. 

### Have fun

Take out from your mind that learning should be boring, painful and sad. Have fun. You should be having fun. I had a lot of fun doing the things I mentioned above, and I learn a lot with them. I'm sure that there are a lot of things you wish existed, things you wish were better, tools you'd like to use and so on. Solve your problems, build your things, and have fun while doing it. 