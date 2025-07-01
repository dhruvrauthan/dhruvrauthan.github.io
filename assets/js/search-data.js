// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-art",
          title: "art",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/art/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-2001-a-space-odyssey",
          title: '2001: A Space Odyssey',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2001_space_odyssey/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/brave_new_world/";
            },},{id: "books-childhood-39-s-end",
          title: 'Childhood&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/childhood_end/";
            },},{id: "books-darwin-39-s-radio",
          title: 'Darwin&amp;#39;s Radio',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/darwins_radio/";
            },},{id: "books-destination-void",
          title: 'Destination: Void',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/destination_void/";
            },},{id: "books-the-fall-of-hyperion",
          title: 'The Fall of Hyperion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fall_of_hyperion/";
            },},{id: "books-childhood-39-s-end",
          title: 'Childhood&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/flowers_for_algernon/";
            },},{id: "books-the-hitchhiker-s-guide-to-the-galaxy",
          title: 'The Hitchhiker’s Guide to the Galaxy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hitchhikers_guide/";
            },},{id: "books-the-house-of-the-dead",
          title: 'The House of the Dead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/house_of_the_dead/";
            },},{id: "books-hyperion",
          title: 'Hyperion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hyperion/";
            },},{id: "books-jazz",
          title: 'Jazz',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/jazz/";
            },},{id: "books-a-life-on-our-planet-my-witness-statement-and-a-vision-for-the-future",
          title: 'A Life on Our Planet: My Witness Statement and a Vision for the...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/life_on_our_planet/";
            },},{id: "books-neuromancer",
          title: 'Neuromancer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/neuromancer/";
            },},{id: "books-nightfall",
          title: 'Nightfall',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/nightfall/";
            },},{id: "books-the-palace-of-illusions",
          title: 'The Palace of Illusions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/palace_of_illusions/";
            },},{id: "books-red-dragon",
          title: 'Red Dragon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/red_dragon/";
            },},{id: "books-what-i-talk-about-when-i-talk-about-running",
          title: 'What I Talk About When I Talk About Running',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/talk_about_running/";
            },},{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_alchemist/";
            },},{id: "books-the-little-prince",
          title: 'The Little Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_little_prince/";
            },},{id: "books-the-shepherd",
          title: 'The Shepherd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_shepherd/";
            },},{id: "books-the-silence-of-the-lambs",
          title: 'The Silence of the Lambs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_silence_of_the_lambs/";
            },},{id: "books-the-trial",
          title: 'The Trial',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_trial/";
            },},{id: "books-the-three-body-problem",
          title: 'The Three-Body Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/three_body_problem/";
            },},{id: "news-android-developer-indiahaat",
          title: 'Android Developer   IndiaHaat',
          description: "",
          section: "News",},{id: "news-summer-intern-village-book-builders",
          title: 'Summer Intern   Village Book Builders',
          description: "",
          section: "News",},{id: "news-software-summer-intern-nvidia",
          title: 'Software Summer Intern   NVIDIA',
          description: "",
          section: "News",},{id: "news-research-intern-technische-universität-berlin",
          title: 'Research Intern   Technische Universität Berlin',
          description: "",
          section: "News",},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-gt-kvstore",
          title: 'GT-KVStore',
          description: "Developed a C++ gRPC/protobuf distributed key-value store featuring round-robin data partitioning, replication-based fault tolerance and load balancing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aos/";
            },},{id: "projects-aurora",
          title: 'Aurora',
          description: "Developing a web app that transforms your playlist’s genres into dynamic aurora-inspired color visuals (WIP)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aurora/";
            },},{id: "projects-covid-19-cases-tracker",
          title: 'COVID-19 cases tracker',
          description: "Built an Android app tracking India’s COVID-19 cases with visualizations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/covidtracker/";
            },},{id: "projects-privacy-in-sdn-based-networks",
          title: 'Privacy in SDN based networks',
          description: "Built Apache2/OpenSSL reverse proxy using ESNI and domain fronting to bypass censorship firewalls",
          section: "Projects",handler: () => {
              window.location.href = "/projects/esni/";
            },},{id: "projects-real-time-darknet-detection",
          title: 'Real-time Darknet detection',
          description: "Modified FreeBSD IPFW for dynamic per-address darknet detection and built a C++ BareFoot Runtime SDN controller for IPv4/IPv6 inactive‐address monitoring—boosting performance by 90%",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ipfw_darknet/";
            },},{id: "projects-georgia-tech-network-vulnerabilities",
          title: 'Georgia Tech network vulnerabilities',
          description: "Automated Nmap and Censys scans across Georgia Tech’s /10 network, mapping ~42 000 active hosts’ ports, services and CVEs for prioritized remediation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nmap/";
            },},{id: "projects-siegebreaker2",
          title: 'SiegeBreaker2',
          description: "Developed a SmartNIC-driven CDN edge proxy that transparently reroutes TLS 1.3 via Docker-hosted Stunnel, preserving encryption to bypass censorship (under review)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/siegebreaker/";
            },},{id: "projects-sugamyata-teaching-accessibility-in-india",
          title: 'Sugamyata: Teaching accessibility in India',
          description: "Designed academic and industry surveys, and analyzed software engineering course data to evaluate accessibility education outcomes on students",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sugamyata/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%68%72%75%76%72%61%75%74%68%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dhruvrauthan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhruv-rauthan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=stkvlCoAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
