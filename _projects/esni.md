---
layout: page
title: Privacy in SDN based networks
description: Improving security in computer networks
img: 
importance: 1000
category: Academic
---

[Project Report](/assets/pdf/esni.pdf)

<!-- Nowadays it is common practice to host multiple websites at the same IP address. This is made by possible through the use of Server Name Indication (SNI). The SNI extension enables servers to return the correct SSL certificate during the TLS handshake. 

ESNI keeps the SNI secret by encrypting the SNI in the TLS handshake. This is done using public key cryptography, wherein the server keeps a public key in its DNS record which can be used to encrypt the SNI field. 

Domain fronting is a technique in which different domain names are present in the SNI field and the HTTP host header. The SNI field contains a normal uncensored domain whereas the host header contains the secret cnesored domain. However, this technique was discontinued by CDNs. -->

In this project, we built software using Apache2 and OpenSSL to circumvent censorship agencies’ firewalls by using ESNI and the concept of domain hiding. Unfortunately, ESNI deprecated midway through this project so further research on ESNI was discontinued. 
