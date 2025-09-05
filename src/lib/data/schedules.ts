import type { Schedule } from "./types";

export const schedule2025: Schedule<2025> = [
    {
        type: "other",
        trackType: "common",
        title: "Walk-in",
        timeSlot: "08:00",
    },
    {
        type: "other",
        trackType: "common",
        title: "Welcome",
        timeSlot: "09:30",
    },
    {
        type: "talk",
        trackType: "common",
        title: "Programming, Past and Future",
        description: `In 1957 the first municipal computer was installed, marking the start of public computing. At that time computers cost millions, and programmers in comparison were almost free. The first programming languages, FORTRAN, Algol, Cobol, LISP, were designed at that time, with that economic relationship in mind: it didn't matter how long ittook to program, as long as the program didn't waste computer time. In fact some people thought that programming languages were already a waste, since they used precious computer time to compile. So programs were all expressed in the computer's terms, telling it step-by-step what to do, and not expressed in the programmer's terms.

It happened slowly, but now the economic relationship is entirely reversed: programmers are expensive, and computers relatively almost free. And yet we are still programming them in languages that are directly descended from languages that assume the opposite.

Does that mean we are doing it wrong? And if so, what are the alternatives?
`,
        room: "Progress",
        speakerId: 11,
        timeSlot: "09:45",
        year: 2025,
    },
    {
        type: "other",
        trackType: "common",
        title: "Break",
        timeSlot: "10:30",
    },
    {
        type: "talk",
        trackType: "single",
        title: "Typing your Python code like a ninja!",
        description: `It’s 2025 - basic static typing in Python is no longer a secret, and most developers are familiar with its core benefits. But many of the more advanced features in Python’s typing system remain underused and misunderstood, leaving a lot of power on the table. By overlooking these tools, developers miss out on writing safer, clearer, and more scalable code.

In this talk, we’ll dive into some of these powerful typing features and see how adopting them can help you write clearer, safer, and more scalable code. We will explore features like:

* Overloads
* Generics
* TypeGuard / TypeIs
* Proper **kwargs typing
* Overrides
* And more…

Let’s take your static typing skills to the next level - and become true typing ninjas in the process!
`,
        room: "Progress",
        speakerId: 3,
        timeSlot: "10:45",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "TBD",
        description: "TBD",
        room: "Quest",
        speakerId: -1,
        timeSlot: "10:45",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "From Flask to FastAPI: Why and how we Made the Switch",
        description: `At Polarsteps recently migrated its core API from Flask to FastAPI. In this talk, I’ll walk through the technical and organizational reasons that led to this decision, the challenges we faced during the migration, and the improvements we saw after switching.

We’ll look at how FastAPI’s type hints, automatic docs, and async support helped improve developer experience, onboarding, and performance. I’ll share how we managed the transition from Flask, including strategies to handle legacy code and shared dependencies.

This is a practical talk for engineers and teams considering FastAPI in production. Going over what worked, what didn’t, and what we’d do differently if we had to do it again.
`,
        room: "Progress",
        speakerId: 1,
        timeSlot: "11:25",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Low Latency Python - Say Goodbye to C++",
        description: `Do you think Python is too slow for high-throughput systems? Well, think again! In this talk, we’ll challenge the well-accepted belief that performant systems must be written in C++ by showcasing a Python-based architecture that handles thousands of messages per second. We'll take a C-style approach to Python performance: aggressive memory budgeting, minimized re-allocations, and a hot path where every line of code matters.

We'll explore the design and performance journey of a high-volume sensor network simulator that ingests and processes thousands of UDP messages per second from virtual devices scattered across London. These sensors emit temperature, humidity, gas, flood, and smoke data, which is often malformed or come in unpredictable bursts.

By the end of the talk, you’ll see how a carefully engineered Python stack can meet the latency and throughput demands typically reserved for C++. It’s not just “fast for Python” – it’s fast, readable, and it might just change your mind!
`,
        room: "Quest",
        speakerId: 6,
        timeSlot: "11:25",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Performance Myths and Silent Pitfalls of __slots__",
        description: `When optimizing Python, many developers reach for __slots__ to save memory and speed up attribute access. But much of the common wisdom about this feature is outdated. On modern Python, long-held assumptions often fail—and subtle misconfigurations can quietly make code slower and less efficient.

Is your knowledge current, or are your optimizations working against you? This session cuts through the myths with fresh data, shows you how to spot hidden traps, and helps you ensure __slots__ delivers real performance gains—not surprises.
`,
        room: "Progress",
        speakerId: 2,
        timeSlot: "12:05",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Tooling with Purpose: Making Smart Choices as You Build",
        description: `Starting a new Python project can feel like stepping into a maze of choices—package managers, testing frameworks, documentation tools, containers, and more. For many developers, especially those early in their journey, this complexity can delay the most important step: building the actual prototype or MVP (Minimum Viable Product).

In this talk, we’ll walk through the Python ecosystem from the ground up, progressively building a project structure that evolves with your needs. We’ll discuss which decisions can be postponed, which tools are worth adopting early, and how to avoid over-engineering. By the end, you’ll have a clear roadmap for starting small and scaling your project responsibly.

Whether you're building a data science tool, a web app, an API or a library, this talk will help you understand the essential building blocks of a well-structured project and make confident and timely choices that keep your progress steady without letting tooling decisions get in the way.
`,
        room: "Quest",
        speakerId: 7,
        timeSlot: "12:05",
        year: 2025,
    },
    {
        type: "other",
        trackType: "common",
        title: "Lunch",
        timeSlot: "12:35",
    },
    {
        type: "talk",
        trackType: "single",
        title: "Don't Panic! A Developer's Guide To Security",
        description: `As a developer, you play a crucial role in the security of your projects. At the same time, security is but one of the many responsibilities a developer has to fulfill these days. It almost seems like you have to be an expert in just about anything!

Thankfully, you don’t have to be a security expert to contribute to the security of your projects. In this talk, I will show you how to approach security systematically without feeling overwhelmed.

First, I will discuss some background on security theory and my take on the role of developers in security. While many of us are familiar with individual security practices, such as scanners and secure coding patterns, the bigger picture you get from zooming out helps you determine which security practices you should prioritize in your project. This discussion will include the difficult topic of advocating for security with product owners and stakeholders.

Then, I will introduce you to open-source industry standards, such as the OWASP DevSecOps Maturity Model, that you can use to start implementing security in your projects. Rather than feeling the pressure of having to reinvent the wheel, we can rely on the materials and frameworks that security experts have developed. Luckily for us, we’ll see that many of the best practices involve automation, leaving us with the time to actually develop the applications we’re supposed to be developing.

By the end of my talk, you will not be a security expert, but you should have enough pointers to get started with security!
`,
        room: "Progress",
        speakerId: 10,
        timeSlot: "13:30",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Paleofuturistic Python",
        description: `The first GitHub release of uv dates back to February 2024 only. Yet, it already feels like it has been with us forever. The tooling ecosystem for developers in the Python language has always felt like a quagmire: lots of opinions and good partial solutions, but no decent overall standardization. Now with the brilliant simplicity of uv, the future for development in Python seems a lot brighter. Developers in Python can now stop asking themselves "how can I get my Python workflow running?" and start asking themselves "how can I get the most out of my Python workflow?"

In this workshop we will setup a local Python workflow. We will mirror this flow in a completely automated CI/CD pipeline. It will be able to take care of publishing a library, reusing it in a CLI and deploying that as an application on the public internet; all the while doing automated Q&A at every possible step. Of course, I put all this automation in a cookiecutter template you can reuse after the session.

The Python development workflow your past self had always hoped for is finally here!
`,
        room: "Quest",
        speakerId: 8,
        timeSlot: "13:30",
        year: 2025,
        multiSlot: 2,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Leading Kedro: lessons from maintaining an open source Python framework",
        description: `Maintaining an open source project sounds exciting…until you're juggling user requests, roadmap decisions, contributor onboarding, and technical debt all at once. In this talk, I’ll share my journey as a tech lead on Kedro, an open source Python framework for building robust data and machine learning pipelines. Over the past six years, Kedro has grown into a mature project with 10,000+ GitHub stars and a global community of users and contributors. I’ll walk through the practical strategies and hard-earned lessons from leading the project: how we scale community contributions, evolve the architecture, and strike the right balance between innovation and long-term sustainability. Whether you're an engineer relying on open source tools or someone curious about what it takes to maintain one, this talk will give you a behind-the-scenes look at the technical and human side of open source leadership.`,
        room: "Progress",
        speakerId: 4,
        timeSlot: "14:05",
        year: 2025,
    },
    {
        type: "other",
        trackType: "common",
        title: "Break",
        timeSlot: "14:35",
    },



    {
        type: "talk",
        trackType: "single",
        title: "TBD",
        description: "TBD",
        room: "Progress",
        speakerId: -1,
        timeSlot: "14:50",
        year: 2025,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Measuring and elevating quality in engineering practice",
        description: `How do you measure, track, represent and drive engineering quality, without crudely reducing it to something it is not?

If you work in an engineering and are interested in the question of how the organisation as a whole could improve – continuously – the ways in which it works, you will probably find something useful in this session.

In my work in Canonical's Engineering Excellence organisation, I direct engineering practice at scale: the documentation efforts of dozens of teams in over a hundred software products. To do that I have had to find ways to measure quality of practice and outcome. I also had to persuade all those engineering teams to accept them, and work with them.

The methods and approaches I developed for documentation have been adopted for other engineering disciplines, such as security engineering practice. I'll share them in this workshop in the form of reusable tools that can similarly be adopted and adapted to other needs.

At the heart of them is a maturity model that helps drive practice quality at scale, elevating standards, discipline and execution.
`,
        room: "Quest",
        speakerId: 9,
        timeSlot: "14:50",
        year: 2025,
        multiSlot: 2,
    },
    {
        type: "talk",
        trackType: "single",
        title: "Race to the Root Cause",
        description: `How fast can you really debug a Python stacktrace? This talk is a rapid-fire challenge where we throw real-world-inspired stacktrace puzzles at the audience. Can you spot what actually happened before the reveal? Each puzzle starts with a snippet of code and a misleading or confusing stacktrace, and the audience gets to play along as we unravel what’s really going on under the hood.

Examples include:

* Chained Exception Puzzle:
  Python’s “During handling of the above exception, another exception occurred” messages rarely make the real flow obvious. We’ll see how these stacktraces force you to piece together what actually happened.

* The Missing Curly Bracket:
  Sometimes Python blames a line with a \`with\` statement, even though no code runs there. Why does this happen? And what does it have to do with curly brackets?

 By the end, you’ll have a better feel for Python’s stacktraces, some new strategies for debugging faster, and at least one story to share the next time a stacktrace tries to trick you.

You’ll walk away with sharper debugging instincts, some practical tricks, and maybe a laugh at Python’s expense. If you’ve ever felt outsmarted by a stacktrace, this is your chance to race to the root cause — and win.
`,
        room: "Progress",
        speakerId: 5,
        timeSlot: "15:25",
        year: 2025,
    },
    {
        type: "other",
        trackType: "common",
        title: "Break",
        timeSlot: "15:55",
    },
    {
        type: "talk",
        trackType: "common",
        title: "TBD",
        description: "TBD",
        room: "Progress",
        speakerId: -1,
        timeSlot: "16:10",
        year: 2025,
    },
    {
        type: "other",
        trackType: "common",
        title: "Closing",
        timeSlot: "16:55",
    },
    {
        type: "other",
        trackType: "common",
        title: "Drinks & Snacks",
        timeSlot: "17:05",
    },
]
