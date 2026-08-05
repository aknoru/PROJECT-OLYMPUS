---
id: AI-PROMPTS-LIBRARY
title: "AI Prompts Library"
type: resource
status: active
version: 1.0.0
---

# AI Prompts Library

<div class="oa-shell">

<section class="oa-hero">
  <div class="oa-hero-left">
    <p class="oa-eyebrow">PROMPT ENGINEERING · 10 CATEGORIES · PRODUCTION PROMPTS</p>
    <h1>AI Prompts <span class="oa-accent-text">Library</span></h1>
    <p class="oa-hero-sub">Curated, battle-tested prompts for engineering, research, coding, career, health, and daily operations.</p>
  </div>
</section>

> **Usage:** Copy any prompt, replace `[BRACKETS]` with context. All prompts are engineered for Claude/GPT-4/Gemini.

---

## 💻 1. LeetCode & DSA

### Problem Explanation

```
I'm solving [PROBLEM NAME] on LeetCode. I've been stuck for [TIME].
My current approach: [YOUR APPROACH]
1. Identify what I'm missing conceptually (not code)
2. Give me the key insight as one sentence
3. Ask me a leading question to find it myself
4. Only show code if I ask "show me"
```

### Pattern Recognition

```
Look at this LeetCode problem: [PASTE PROBLEM]
Answer ONLY in this format:
- Pattern: [PATTERN NAME]
- Why: [ONE SENTENCE]
- Data structure: [WHAT TO USE]
- Time complexity hint: [BIG-O HINT]
```

### Solution Review

```
Here is my LeetCode solution for [PROBLEM]: [PASTE YOUR CODE]
Review it for:
1. Correctness (edge cases I missed)
2. Time/space complexity
3. One optimization if any
4. Code quality
Don't rewrite it — just point out what's wrong.
```

---

## ⚡ 2. Verilog / RTL / FPGA

### RTL Code Review

```
Review this Verilog module for correctness, synthesis readiness, and best practices:
[PASTE CODE]
Check for: latches, blocking/non-blocking errors, reset logic, clock domain issues, naming convention.
```

### Testbench Generation

```
Write a complete SystemVerilog testbench for this module: [PASTE MODULE]
Include: clock (10ns), reset sequence (synchronous, active low), 5 test cases with edge cases, $display outputs, $finish.
```

### HDLBits Explanation

```
I'm stuck on HDLBits problem: [PROBLEM NAME]. My attempt: [CODE or "haven't started"]
Give me:
1. The concept being tested (1 sentence)
2. A structural hint (not code)
3. The key Verilog construct I need
```

---

## 🔬 3. Research & Paper Writing

### Literature Review

```
I'm writing a literature review on [TOPIC]. Analyze this paper:
[PASTE ABSTRACT]
Extract:
1. Problem being solved
2. Core methodology (2-3 sentences)
3. Key results (quantitative)
4. Limitations
5. Relation to [MY RESEARCH AREA]
```

### Section Writing

```
Write the [SECTION] of a [IEEE/ACM] paper on [TOPIC].
Target audience: Hardware engineers with 3+ years experience.
Length: [WORDS]. Previous section ended: [LAST SENTENCE].
Use IEEE style, passive voice where appropriate, no first person.
```

### Paper Review Response

```
Reviewer feedback on my paper [TITLE]: [PASTE REVIEWER COMMENTS]
Help me write a professional response that:
1. Acknowledges each concern
2. States changes made OR defends original with evidence
3. Maintains academic tone
```

---

## 📚 4. Learning & Explanation

### First-Principles Explanation

```
Explain [CONCEPT] to me as if I'm a smart engineer who has never seen it before.
Start from the fundamental problem it solves.
Use an analogy, then the real mechanism, then show a minimal code example.
End with: what goes wrong when engineers misunderstand this.
```

### Feynman Technique Check

```
I'm about to explain [CONCEPT] as if teaching it to someone with no background.
Here is my explanation: [YOUR EXPLANATION]
Tell me:
1. What I got wrong
2. What I glossed over
3. The gap in my mental model
4. One better analogy
```

### Study Plan Generator

```
I have [HOURS] per week to learn [SUBJECT] for [GOAL] in [TIMEFRAME].
My current level: [BEGINNER/INTERMEDIATE/ADVANCED]
Create a week-by-week plan with:
- Topic per week
- Resource (free preferred)
- One deliverable to prove mastery
- Red flags that mean I need to slow down
```

---

## 🎯 5. GATE ECE Preparation

### Problem Solving

```
I'm solving GATE ECE [YEAR] question: [PASTE QUESTION]
My answer: [YOUR ANSWER]. Correct answer: [CORRECT ANSWER]
Explain:
1. The correct approach step by step
2. Why my approach was wrong
3. The formula or concept I need to memorize
4. Two similar GATE problems to practice
```

### Topic Revision

```
I have 2 hours to revise [GATE TOPIC] for GATE ECE.
Create a rapid-revision outline:
1. The 5 most important concepts (in order)
2. Most common question types
3. 3 formulae I absolutely must memorize
4. Most common mistakes candidates make
5. Two practice problems with answers
```

---

## 🚀 6. Career & Interview

### Resume Bullet Point

```
Rewrite this resume bullet point to be stronger:
[ORIGINAL BULLET]
Role target: [JOB TITLE] at [COMPANY TYPE]
Make it: specific, quantified, action-first, impact-last.
Give me 3 versions to choose from.
```

### STAR Story

```
I'm preparing a STAR story for [BEHAVIORAL QUESTION].
Raw notes: [PASTE YOUR ROUGH NOTES]
Help me structure this as a perfect STAR answer:
- Situation: 2-3 sentences
- Task: 1-2 sentences
- Action: 4-5 sentences (most detail here)
- Result: quantified, specific
Total length: 90-120 seconds when spoken.
```

### Technical Interview Prep

```
Interview me on [TOPIC] as if you're a senior engineer at [COMPANY].
Start easy, then escalate difficulty.
After each answer I give, tell me:
1. What was good
2. What was wrong or missing
3. The follow-up a real interviewer would ask
Continue until I say "stop".
```

### Offer Negotiation

```
I received an offer: [SALARY AMOUNT] at [COMPANY].
My competing offer / market data: [DATA]
Write a 3-sentence counter-offer email that:
1. Expresses genuine enthusiasm
2. States my ask (₹ specific)
3. Provides a brief rationale
Professional, confident, not apologetic.
```

---

## ❤️ 7. Health & Mental Performance

### Recovery Protocol

```
I'm in [DESCRIBE STATE: exhausted/anxious/depressed/overwhelmed].
I have [TIME AVAILABLE].
Give me a grounded, evidence-based 3-step recovery sequence for today.
Be specific about what to do, in what order, and how long.
Do not tell me to "take it easy" — tell me exactly what to do.
```

### Therapy Journal Prompt

```
Today I felt [EMOTION] when [TRIGGER SITUATION].
Help me process this using:
1. Observer perspective (what would a neutral observer say happened?)
2. IFS lens (which part of me reacted and why might it be protecting me?)
3. Somatic check (where do I feel it in my body?)
4. Growth reframe (what is this situation teaching me?)
```

---

## 🤖 8. AI/ML Coding

### PyTorch Architecture

```
I want to implement [MODEL ARCHITECTURE] in PyTorch for [TASK].
Dataset: [DESCRIBE DATA]
Hardware: [GPU/CPU, VRAM]
Write:
1. The model class (clean, commented)
2. Training loop with tqdm
3. Validation loop
4. Key hyperparameters as constants at the top
5. One improvement I should consider
```

### Debugging ML

```
My model is [OVERFITTING / UNDERFITTING / NOT CONVERGING / GIVING NaN].
Architecture: [DESCRIBE]
Dataset: [SIZE, TYPE]
Loss at epoch [N]: [VALUE]
Diagnose the problem and give me 3 specific things to try, in order of likelihood.
```

### RAG System Design

```
I'm building a RAG system for [USE CASE].
Documents: [DESCRIBE: PDFs, markdown, code, etc.]
Query types: [EXAMPLES]
Design:
1. Chunking strategy (size + overlap)
2. Embedding model recommendation (free preferred)
3. Vector DB choice
4. Retrieval strategy (similarity + reranking?)
5. Prompt template for the LLM
```

---

## 🏗 9. System Design

### HLD Interview

```
Walk me through designing [SYSTEM: e.g., Twitter, Uber, YouTube].
I'll answer your questions one at a time.
After my answer, tell me:
1. What requirements I missed
2. What assumptions I should state
3. The follow-up a real interviewer asks
Start with: "What are the functional requirements?"
```

### Architecture Review

```
Review this system architecture for [PURPOSE]:
[DESCRIBE OR PASTE DIAGRAM DESCRIPTION]
Identify:
1. Single points of failure
2. Scalability bottlenecks
3. Data consistency risks
4. Security gaps
5. The one change that would have the highest impact
```

---

## ⚡ 10. Daily Operations

### Day Planning

```
Today is [DAY, DATE]. My capacity is [LOW / MEDIUM / HIGH].
My top 3 priorities are: [LIST]
Available time: [HOURS]
Current mode: [NORMAL / MINIMUM VIABLE / RECOVERY]

Build me a time-blocked schedule for today.
Include: deep work blocks, breaks, meals, exercise, and evening therapy.
Make it realistic, not aspirational.
```

### Weekly Planning

```
It's Sunday. Here is my weekly data:
- LeetCode this week: [N]
- GATE study: [HOURS]
- Deep work total: [HOURS]
- Energy rating: [1-5]
- Biggest win: [WIN]
- Biggest failure: [FAILURE]

Build my next week plan with:
1. 3 non-negotiable outcomes
2. Daily focus topic
3. One thing to protect (non-negotiable)
4. One thing to reduce
```

### Evidence Log Assistant

```
I just completed [ACTIVITY]. Here is what happened: [DESCRIBE]
Write a 2-sentence evidence log entry that:
1. States what was built/solved/learned
2. Quantifies the result (lines of code / problems / concepts / time)
Format: Past tense, engineering tone, no filler words.
```

---

<a href="./" class="oa-guidance-link" style="display:inline-flex;margin-top:1rem">← Back to Command Center</a>

</div>
