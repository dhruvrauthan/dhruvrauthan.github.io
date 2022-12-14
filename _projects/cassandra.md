---
layout: page
title: Evaluation of Cloud Storage on Edge
description: Analysis of Cassandra in edge networks
img: /assets/img/cassandra.png
importance: 998
category: Academic
---

[Project Report](/assets/pdf/cassandra.pdf)

[Github Repository](https://github.com/dhruvrauthan/Edge-Cassandra)

<!-- Edge Computing is here with its distributed architecture, low latency connectivity and bandwidth relief. Unlike cloud computing which is familiar and known, the edge computing services and support for application development is still in early stages. In the cloud we have numerous database services to efficiently store data whereas no such service exists at the edge yet. 

In this project, we analyze what unique challenges and issues are posed by edge networking to cloud-based storage services. Many edge projects start with a decentralized architecture like the one used in Cassandra. Hence, in this study we start with understanding and quantifying the impact that edge networking has on the workings of a cloud storage system like Cassandra. -->

We set up a Cassandra cluster on the virtual machines deployed using the <a href="https://github.com/atlarge-research/continuum">Continuum</a> framework. Using the Cassandra python driver, we write scripts to read and write data objects and analyse the effect of changing network and database configurations on Cassandra's performance. The work from this project continued and resulted in a publication.
