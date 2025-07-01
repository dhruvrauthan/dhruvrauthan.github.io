---
layout: page
permalink: /contact/
title: contact
description: #Contact me!
nav: true
nav_order: 10
---

The best way to reach me is via email

<a href="mailto:{{ social[1] | encode_email }}" target="_blank" rel="noopener" style="text-decoration: none;">
  <i class="fas fa-envelope" style="color: #2698BA; text-align: center;"></i>
  &nbsp; Email
</a>

<a href="https://www.linkedin.com/in/{{ social[1] }}" target="_blank" rel="noopener" style="text-decoration: none;">
  <i class="fab fa-linkedin" style="color: #2698BA; text-align: center;"></i>
  &nbsp; LinkedIn
</a>

<a href="https://github.com/{{ social[1] }}" target="_blank" rel="noopener" style="text-decoration: none;">
  <i class="fab fa-github" style="color: #2698BA; text-align: center;"></i>
  &nbsp; Github
</a>

<!-- <i class="fas fa-phone fa-flip-horizontal" style="color:#2698BA"></i>&nbsp;&nbsp; [+91 9718301601](tel:+919718301601) -->


<div class="social" style= "position: absolute; left:0; right:0; ">
    <div class="contact-icons">
        {% include social.html %}
    </div>
    <div class="contact-note">
        {{ site.contact_note }}
    </div>
</div>