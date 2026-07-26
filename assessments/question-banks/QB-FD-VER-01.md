---
id: QB-FD-VER-01
title: "Verilog and Digital Logic High-Yield Question Bank"
type: question-bank
status: active
version: 1.0.0
owner: project-maintainer
description: Practice problems covering FSM design, Verilog blocking vs non-blocking assignments, and setup/hold timing analysis.
---

# Verilog and Digital Logic High-Yield Question Bank

> **Module:** 03 FPGA & Digital Design / 06 Digital Logic  
> **Target Exam:** GATE ECE / Digital Design Interviews  

---

## 1. Setup & Hold Time Analysis

### Question 1 (Maximum Operating Frequency)
**Problem:** A flip-flop has $t_{clk-q} = 2\text{ns}$, $t_{setup} = 1.5\text{ns}$. The combinational logic delay between two flip-flops is $t_{comb} = 4.5\text{ns}$. Find the minimum clock period $T_{min}$ and maximum frequency $f_{max}$.

**Solution:**
1. $T_{min} \ge t_{clk-q} + t_{comb} + t_{setup}$.
2. $T_{min} = 2.0\text{ns} + 4.5\text{ns} + 1.5\text{ns} = 8.0\text{ns}$.
3. $f_{max} = \frac{1}{T_{min}} = \frac{1}{8 \times 10^{-9}} = 125\text{ MHz}$.

---

## Navigation

- [Question Banks Index](README.md)
- [Assessment Index](../../ASSESSMENT_INDEX.md)
