---
id: QB-EF-NET-01
title: "Network Theory High-Yield Question Bank"
type: question-bank
status: active
version: 1.0.0
owner: project-maintainer
description: Practice problems covering Thevenin equivalents, AC resonance, transient response, and two-port networks with step-by-step solutions.
---

# Network Theory High-Yield Question Bank

> **Module:** 02 Engineering Foundations / 02 Network Theory  
> **Target Exam:** GATE ECE / EE  

---

## 1. Network Theorems

### Question 1 (Thevenin Equivalent)
**Problem:** A network has an open circuit voltage $V_{oc} = 12\text{V}$. When a $6\Omega$ resistor is connected across the terminals, the terminal voltage drops to $8\text{V}$. Find the Thevenin equivalent resistance $R_{th}$.

**Solution:**
1. $V_L = V_{th} \frac{R_L}{R_{th} + R_L}$.
2. $8 = 12 \frac{6}{R_{th} + 6} \implies 8(R_{th} + 6) = 72 \implies 8 R_{th} + 48 = 72$.
3. $8 R_{th} = 24 \implies R_{th} = 3\Omega$.

---

## 2. Resonance

### Question 2 (Series RLC Resonance)
**Problem:** A series RLC circuit has $R = 10\Omega$, $L = 2\text{mH}$, and $C = 5\mu\text{F}$. Calculate the resonant frequency $f_0$ and Quality Factor $Q$.

**Solution:**
1. Resonant Frequency $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{2 \times 10^{-3} \times 5 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-8}}} = 10^4 \text{ rad/s}$.
2. $f_0 = \frac{\omega_0}{2\pi} = \frac{10000}{2\pi} \approx 1591.55 \text{ Hz}$.
3. Quality Factor $Q = \frac{\omega_0 L}{R} = \frac{10000 \times 2 \times 10^{-3}}{10} = \frac{20}{10} = 2.0$.

---

## Navigation

- [Question Banks Index](README.md)
- [Assessment Index](../../ASSESSMENT_INDEX.md)
