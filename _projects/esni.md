---
layout: page
title: Privacy in SDN based networks
description: security and privacy in computer networks
img: assets/img/12.jpg
importance: 1
category: work
---

This project involved understanding the recent advancements in network security and analysing the different approaches towards censorship circumventions.

Nowadays it is common practice to host multiple websites at the same IP address. This is made by possible through the use of Server Name Indication (SNI). The SNI extension enables servers to return the correct SSL certificate during the TLS handshake. 

ESNI keeps the SNI secret by encrypting the SNI in the TLS handshake. This is done using public key cryptography, wherein the server keeps a public key in its DNS record which can be used to encrypt the SNI field. 

Domain fronting is a technique in which different domain names are present in the SNI field and the HTTP host header. The SNI field contains a normal uncensored domain whereas the host header contains the secret cnesored domain. However, this technique was discontinued by CDNs.

In this project, we built software using Apache2 and OpenSSL to circumvent censorship agencies’ firewalls by using ESNI and the concept of domain hiding.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/sni-vs-non-sni.png" title="sni image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Cloudflare_https_with_secure_dns_tls13_encrytped_sni-1.png" title="esni image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/Domain-fronting-uses-different-domain-names-at-different-layers-At-the-plaintext-layers.png" title="domain fronting image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal it's glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}
