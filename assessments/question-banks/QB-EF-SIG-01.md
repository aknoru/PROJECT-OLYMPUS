---
id: QB-EF-SIG-01
title: "Signals and Systems High-Yield Question Bank"
type: question-bank
status: active
version: 1.0.0
owner: project-maintainer
description: Practice problems covering Fourier Transforms, Convolution, Laplace ROC, and Z-Transforms with step-by-step solutions.
---

# Signals and Systems High-Yield Question Bank

> **Module:** 02 Engineering Foundations / 03 Signals & Systems  
> **Target Exam:** GATE ECE / EE  

---

## 1. LTI Systems & Convolution

### Question 1 (Continuous Convolution)
**Problem:** Compute $y(t) = x(t) * h(t)$ where $x(t) = e^{-2t} u(t)$ and $h(t) = u(t)$.

**Solution:**
1. $y(t) = \int_{0}^{t} e^{-2\tau} \cdot 1 \, d\tau$ for $t \ge 0$.
2. $y(t) = \left[ -\frac{1}{2} e^{-2\tau} \right]_0^t = -\frac{1}{2} (e^{-2t} - 1) = \frac{1}{2} (1 - e^{-2t}) u(t)$.

---

## 2. Laplace Transform & ROC

### Question 2 (Pole-Zero & Stability)
**Problem:** A system has transfer function $H(s) = \frac{s + 3}{(s + 1)(s - 2)}$. Is the system stable if it is causal?

**Solution:**
1. Poles are at $s = -1$ and $s = 2$.
2. For a causal system, ROC is $\text{Re}(s) > \max(\text{poles}) \implies \text{Re}(s) > 2$.
3. Since the ROC $\text{Re}(s) > 2$ does not include the $j\omega$ axis ($\text{Re}(s) = 0$), the causal system is **unstable**.

---

## Navigation

- [Question Banks Index](README.md)
- [Assessment Index](../../ASSESSMENT_INDEX.md)
