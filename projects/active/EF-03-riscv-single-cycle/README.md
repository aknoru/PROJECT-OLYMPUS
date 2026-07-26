---
id: EF-03-RISCV-SINGLE-CYCLE
title: "EF-03 Single-Cycle RISC-V RV32I Processor Simulator"
type: project
status: active
version: 1.0.0
owner: project-maintainer
description: Single-cycle RV32I instruction set simulator in C++ with disassembly and register dump.
---

# EF-03 Single-Cycle RISC-V RV32I Processor Simulator

> **Domain:** 05 Computer Architecture / 06 Software & Tooling  
> **Classification:** Active Engineering Project  

---

## 1. Project Overview

This project implements an RV32I instruction set architecture (ISA) simulator in C++. It models instruction fetch, decoding, ALU execution, memory access, and register writeback for basic RISC-V instructions (`ADD`, `SUB`, `LW`, `SW`, `BEQ`, `JAL`).

---

## 2. Directory Structure

```text
projects/active/EF-03-riscv-single-cycle/
├── README.md
├── src/
│   └── riscv_sim.cpp
└── Makefile
```

---

## 3. Supported Instructions

- **R-Type:** `ADD`, `SUB`, `AND`, `OR`, `XOR`, `SLT`
- **I-Type:** `ADDI`, `LW`, `JALR`
- **S-Type:** `SW`
- **B-Type:** `BEQ`, `BNE`
- **J-Type:** `JAL`

---

## 4. Navigation

- [Project Index](../../../PROJECT_INDEX.md)
- [01 ISA and Assembly](../../../05-computer-architecture/01-isa-and-assembly/README.md)
- [02 Datapath and Control](../../../05-computer-architecture/02-datapath-and-control/README.md)
