---
layout: posts
title: Posts
---

<ul class="flex flex-col gap-y-3 w-full">
  <% collections.posts.resources.each do |post| %>
    <li class="w-full">
      <a href="<%= post.relative_url %>">
      <article class="post-item card">
        <h2 class="text-white text-lg font-bold">
          <%= post.data.title %>
        </h2>
        <p class="text-gray-300"><%= post.data.description %></p>
      </article>
      </a>
    </li>
  <% end %>
</ul>
