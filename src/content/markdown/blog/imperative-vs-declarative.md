---
title: 'Another Imperative vs Declarative Blog'
date: '2020-10-21'
description: 'This is the one to end them all'
---

I find myself periodically Googling the differences between imperative vs declarative programming. After every search I tell myself this is the last time, I will remember these differences now. Why, cause I’m gonna write it down! Of course that will work. Well, I’ve written down these differences many times and yet here I am, my last time.

So here it is, the quote that will imprint these topics in your brain forever.
“I DECLARE BANKRUPTCY” (I’ll give you a second to figure out where this is from…)

Got it? If you didn’t well its from the Office. In this episode Michael Scott asked an employee, Oscar, what he should do about his poor financial situation. Oscar suggested that he declare for bankruptcy. Being the hilariously, sometimes absent minded person he is, he took Oscars advice literally and yelled out “I DECLARE BANKRUPTCY.” Thinking of course that just by yelling out the word bankruptcy it would get done.

As ridiculous as this situation is, for me, it’s a great way to sum up declarative programming: you declare what you want done without worrying about the steps needed to get it done. Of course in this situation, you have to assume that bankruptcy is a function that when called will take care of putting a person through the bankruptcy process.

Ok, so where does the imperative part come into play? This is the part that Michael left out, or in this case didn’t know about; the steps taken to declare bankruptcy. In our hypothetical bankruptcy function, the body of the function would detail the steps taken to declare bankruptcy.

If you know the show, and in particular Michael, maybe this was really one of his teaching moments? (If you don’t know the show then, there were many hilarious instances where Michael attempted to teach and/or inspire the office). Maybe he was trying to demonstrate how to use one of the programming paradigms of JavaScript, Functional Programming. Of course Michael would have to emphasize that this bankruptcy function would have to be a “Pure Function.” Meaning that this function should not change anything, the same input will always produce the same output. With this fictional bankruptcy function, you would input a person, and the output would be all the paperwork filled out and ready to be processed. So then if he loses that paperwork, or Kevin uses it to clean up chili, then all Michael has to do is declare his bankruptcy function again, and the paperwork would be exactly the same. Then he would have to drop off the paperwork somewhere, I know this example is getting way too ridiculous, he’d probably have Dwight bring it.

In the end, what did Michael teach us: Declarative programming is when we abstract out implementation details (step by step details or Imperative programming) and in so doing we are putting a greater emphasis on what needs to be done (Declarative) over the steps needed to get there (Imperative). Making our code more readable and our intentions more clear. Lets sum it up with a nice table:

|                                       | Imperative                                                                                                            | Declarative                                                             |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| what is it?                           | step by step instructions on how to get something done                                                                | emphasis on what needs to get done over the steps needed to get it done |
| control flow                          | explicit                                                                                                              | implicit                                                                |
| types                                 | Procedural, Object-Oriented                                                                                           | Functional Programming                                                  |
| examples                              | conditional statements, for loops, class/prototype inheritence                                                        | HTML, CSS, SQL                                                          |
| function doubleNums(nums = [1, 2, 3]) | var result = []<br>for (let i = 0; i < nums.length; i++) { <br>&emsp; result.push(nums[i] \* 2)<br>}<br>return result | return nums.map(num => num \* 2)                                        |
