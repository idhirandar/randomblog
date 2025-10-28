---
layout: default
title: Home
---

# Welcome to My Random Tech Blog 🛠️

Hey! I'm **Dhirandar**, a Linux and infrastructure enthusiast.

This blog is my personal tech notebook — short posts on:
- Linux commands and tips  
- Nginx & proxy setups  
- DevOps tools  
- Networking concepts

---

## Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span> - {{ post.date | date: "%b %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

👉 Check out my latest post below!

