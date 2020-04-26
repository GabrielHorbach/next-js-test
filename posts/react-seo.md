---
title: 'How to handle SEO on React?'
date: '2020-04-26'
---

So, these days I was wondering how to handle **SEO** on ReactJS websites. You probably know what SEO is, but in any case, as a Googled definition says:

*SEO is an acronym that stands for search engine optimization, which is the process of optimizing your website to get organic, or un-paid, traffic from the search engine results page.*

Resuming all that, you want your website to be found by search engine results.

As we know, the problem with React and SEO is that the search engines web crawlers are only able to crawl a page if it is completely rendered on the backend, know as server-side rendering.

After searching for some solutions, I found these 2 usefull ways you can deal with SEO on React.<br><br>

# React Helmet

This is a cool npm package that you can add to your project. Using it you will be able to add some important tags inside a *head* tag as well as other features and it is super simple and friendly to implement. It's worth to check it out. Click [here](https://github.com/nfl/react-helmet) to visit the GitHub page.

*Here's how it works:*

![Code example](/images/code-example1.png)

You just import a Helmet component and wrap your head tags inside it on each page you want.<br><br>

# NextJS

If SEO is a crucial thing to your website, then you may consider using NextJS. NextJS is a framework that allows you to build server-side rendering and static web applications using React.

NextJS will serve each file in /pages directory under a pathname matching the filename. It has built-in components such as *Head*, wich you can import directly from NextJS core and use that to declare the head tags inside your pages.

NextJS has two forms of pre-rendering:

- **Static Generation:** when the HTML is generated at the build moment and is reused for each request.
- **Server-side Rendering:** when HTML is generated on each request.

You can define wich one of them to use on each page wich is called a "hybrid" NextJS app, where the most pages are served using Static Generation and Server-side Rendering for others.

There's a question about when to use wich one of them, but basically, if you can pre-render a page ahead of a user's request then you should use Static Generation.

Now, if you need to show frequently updated data, then you should use Server-side Rendering and the page content will change on every request. It will be slower, but the pre-rendered page will always be up-to-date.

You can read more about NextJS [here](https://nextjs.org/).<br><br>

Using one of these solutions you certainly will have a good SEO optimization on your ReactJS applications. And by the way, this blog is made using NextJS. It's my first contact with this framework and is being very cool.