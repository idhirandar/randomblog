// assets/js/nav-inject.js
document.addEventListener("DOMContentLoaded", function () {
  // adjust selector if your theme uses a different header element
  var header = document.querySelector("header") || document.querySelector(".site-header") || document.body;
  if (!header) return;

  var nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.innerHTML = '<a href="/">Home</a><a href="/about">About</a><a href="/posts">Posts</a>';
  header.appendChild(nav);
});

