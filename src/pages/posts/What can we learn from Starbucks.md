---
layout: "../../layouts/MarkdownPostLayout.astro"
title: "What can we learn from Starbucks"
pubDate: 10-01-2022
description: "What can we learn from the processes of companies like Starbucks, such as many others fast-food brands, and why software engineering allows us to learn from almost any other areas."
author: "Arthur Werle"
image:
  url: "https://ycrlhk0w59rlnqve.public.blob.vercel-storage.com/starbucks-73949aPbi10sXCbl0KyH97B91WzZdw.jpg"
  alt: "Picture of the outside of a Starbucks Coffee store"
tags: ["tech", "processes"]
---

![Picture of the outside of a Starbucks Coffee store](https://ycrlhk0w59rlnqve.public.blob.vercel-storage.com/starbucks-73949aPbi10sXCbl0KyH97B91WzZdw.jpg "Picture of the outside of a Starbucks Coffee store")

Computers science is heavily attached to abstractions. If you work as a software engineer or in any software-related field, abstractions are present in your routine. I don't know any other area which deals with this level of abstraction, and like we always say: everything is a trade-off. Against us, is a big learning curve, dealing with philosophical concepts of virtual objects (yes, sometimes it is hard to work with things that don't exist in real life), and thousands of logics, models, architectures, data representations, and integrations. But, to our benefit, are the unmeasurable ways of dealing with such problems, applying knowledge from almost everything in the world. Sometimes, we even use the same words from other areas, or where do you think "deliveries", "tasks", "patches" and "releases" came from? And this is just the top of the mountain. Truth is, we stole a lot from other fields, but I think we are missing some points. Some very important points.

A type of company from which I think we should import more concepts is fast-food. Take a time to think for a while, aren't they the greatest metaphor of everything we want to have in software engineering?

- They (kinda) apply SOLID. Or would you say they can't scale? They have single responsibilities for each employee; they are open to new recipes (AKA features) and closed to changes; they are a masterpiece of process.
- They have agile methodologies (which work, for them). In the same time you see and ad of a new kind of burguer on the news, they're doing it.
- They have CI/CD. They're continuously improving their products and always ready to production; their pipelines are other people testing them (I know this is true for McDonalds, where some employees randomly go to other store to taste their products).
  And these are just some examples.

When you think about these companies I just mentioned, what's the first thing that comes to your mind? The good flavors? Strong marketing? The well-defined products? The speed of the process? I think most of us miss one thing: since you order the same product, **it always tastes the same**. No matter which day it is, who are the employees working on that day, where in the world you are, and most importantly, **how much experience do the people working there have**¹. Can you imagine how hard is this? You may say: "well, aren't they just following a recipe?". Exactly. They know we are all humans, and of course, we will make mistakes sometimes, but these companies learned **how to make mistakes difficult**. When was the last time you made a mistake, maybe an error in your merge request, which could be avoided by some of these: training, documentation, or a clearer vision of the tasks' goal. I bet these points are taken insanely seriously in these companies. Every employee must be trained, every recipe has clear and direct documentation and every step of the process is broken down to the smallest possible to have clear objectives. When it comes to software engineering, we could add: strong code-review culture, linters, commit hooks, unit tests, good documentation, design systems, FAQ about the codebase, and ADRs (Architecture Decision Records) about our decisions. These are just some examples of what we can do to "automate"² our process.

With all that, I want to say that we need to learn from the processes of these companies because I see a big problem with that in many software houses. The delivery quality depends on a few people, it's hard for new employees to have the same level of understanding of the business as the old ones, and a lot more mistakes are caused by problems these companies have solved decades ago. We should always have big goals; even if we can't apply this 100%, we must get as close as possible. I hope someday we could have a Starbucks-type process in the software engineering field, letting us depend less on people³ and more on the process.

¹ I know, everyone must learn from another person in the beginning, but my point is not saying that everybody should learn by themselves, my point is: you can't say if the person who is making your order has 3 months or 10 years of experience working there.

² By automate, I mean turning the decisions less people-dependent and more business-oriented. We should not spend hours thinking about how to solve a problem, we should just solve it the way it's said to in our docs, linters, hooks, FAQs, or ADRs.

³ Just to be clear, I'm not saying we shouldn't trust people. I'm saying that processes are more trustable than ONLY people. We should always have both.
