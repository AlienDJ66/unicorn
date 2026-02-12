---
name: unicorn
description: Free, open-source AI command center for Builder, job seekers who want a role in AI-native development. 31 AI-powered skills, a private knowledge vault, and a project workspace.
---

# Unicorn

**Land your next role in AI-native development.**

The industry is shifting to AI-native workflows — where developers, designers, and knowledge workers build *with* AI, not just *about* AI. Unicorn is a free, open-source platform that helps you build real AI skills, ship projects that prove it, and present yourself to employers who are hiring for this new world.

## Who This Is For

**Job seekers who want a role in AI-native development** — software engineers, data professionals, product managers, designers, career transitioners — anyone who wants to work with AI tools as a daily practice, not just a buzzword on a resume.

If you've been asking "how do I break into AI?" — this is your launchpad.

## Why This Exists

You've probably tried asking ChatGPT or Claude for help. It feels like talking to a chatbot. You get a generic answer and move on. But AI is far more powerful than that — most people just don't know how to use it.

Here's the real problem:

- **You don't know what to ask.** AI can't solve your problem if you don't know what problem to solve.
- **Your thinking is scattered.** A thread in ChatGPT, a conversation in Claude, notes in one app, tasks in another. Nothing connects.
- **Knowing AI and proving you can use it are two different things.** Employers want to see you build with AI, not talk about it.

Unicorn gives you the skills, the workspace, and the portfolio to prove you can do AI-native work.

## What You Get

When you clone this project, you get:

- **31 AI-powered skills** — Resume tailoring, idea validation, product development, sales, marketing, business development, legal, finance, and more. Just describe what you need and the AI applies the right skill. [Full list →](docs/skills-reference.md)
- **A private knowledge vault** — Your ideas, notes, goals, career materials, and learning in one place. Never checked into the public repo.
- **A project workspace** — Build and ship real projects that demonstrate your AI-native skills to employers. A "project" can be anything: a blog post, a marketing research brief, a deployed web application, or an automated workflow. Video/image production and workflow automation within the Unicorn command center (with CLI agents) are under development.
- **Works with any AI** — Claude, Gemini, ChatGPT, open-source models. Vendor-agnostic, no lock-in.

## Start Here: Land Your AI Role

```bash
# Clone the project
git clone https://github.com/pingwu/unicorn.git
cd unicorn
```

Then start your CLI coding agent (Cloud desktop/code, Gemini CLI, Codex CLI, or run from IDE with terminal), tell your AI agent: **"Run the init unicorn setup"** — it will create your personal knowledge vault and connect the skills.

**Your first three moves:**
1. **"Help me tailor my resume for this job posting"** → the AI uses `career-resume` to match your experience to AI-native roles
2. **"Build me a personal landing page"** → ship your first project in `projects/agentic-landing-template`
3. **Find your skill gaps** → participate in the Unicorn project itself. Contributing to an open-source AI-native platform *is* the proof employers want to see.

Or follow the manual setup in [INIT_UNICORN.md](INIT_UNICORN.md).

## Grow Beyond the Job Search

Unicorn meets you where you are — and grows with you.

| Stage | You're saying... | Unicorn helps you... |
|-------|-----------------|---------------------|
| **Looking for a role** | "I want to work in AI but don't know how to prove it" | Build portfolio projects, tailor your resume |
| **Exploring what's next** | "I want to do something on my own but don't know where to start" | Validate ideas, find your direction |
| **Building something** | "I'm reaching out but nothing sticks" | Define your product, find your audience |
| **Getting paid** | "I have interest but can't convert to revenue" | Close deals, grow revenue, build partnerships |
| **Running a business** | "I need to operate and scale" | Handle legal, finances, operations, fundraising |

## The One Thing AI Can't Do for You

1. **Ask your Why** — What is your core value? What are your ultimate goals?
2. **Listen to your audience, build trust** — Whether 1:1 or 1:many.
3. **Do and implement with meaningful impact** — Without 1 and 2, building is just busyness.

AI handles the heavy lifting. You handle the asking, listening, and trust-building. [Read more →](docs/philosophy.md)

## Contribute Your Skills

This is a community project. If you've solved a real problem for real people, package it as a skill and share it. [How to contribute →](docs/contributing.md)

## Learn More

- [Skills Reference](docs/skills-reference.md) — All 31 skills, organized by stage and category
- [Philosophy](docs/philosophy.md) — The Ask, Listen, Do framework
- [Contributing](docs/contributing.md) — How to add your own skills
- [PING BOS on YouTube](https://www.youtube.com/@pingbos) — Tutorials and walkthroughs

## Attribution

- Framework based on *Just Ask* by Pinghsien Wu (to be published early March, 2026; To request a copy just ask [ask@ping-ai.com](mailto:ask@ping-ai.com?subject=Just%20Ask%20Unicorn))
- Skills architecture inspired by Anthropic's [knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins/) — an open-source framework for AI-augmented knowledge work.

## License

[MIT](LICENSE)
