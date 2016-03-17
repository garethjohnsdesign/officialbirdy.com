---
title: Birdy
date: 2016-02-06 22:34:00 Z
header: Beautiful Lies
subheader: The New Album Now Available for Pre-Order
itunes: http://smarturl.it/BeautifulLies.iTunes
apple music: http://smarturl.it/BeautifulLies.AP
spotify: http://smarturl.it/BeautifulLies.SP
amazon: http://smarturl.it/BeautifulLies.AM
google play: http://smarturl.it/BeautifulLies.GP
layout: default
---

{% include newsletter.html %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
{% include photos.html %}
{% include live.html %}