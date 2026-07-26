---
id: EF-01-ALU-VERILOG
title: "EF-01 4-Bit ALU Implementation and Testbench"
type: project
status: active
version: 1.0.0
owner: project-maintainer
description: Synthesisable 4-bit ALU in Verilog with self-checking testbench and Makefile simulation harness.
---

# EF-01 4-Bit ALU Project

> **Domain:** 03 FPGA & Digital Design / 06 Digital Logic  
> **Classification:** Active Engineering Project  

---

## 1. Project Charter

This project implements a synthesisable 4-bit Arithmetic Logic Unit (ALU) in Verilog HDL supporting 8 operations (ADD, SUB, AND, OR, XOR, NOT, SHL, SHR) with Zero and Carry flags, alongside an automated self-checking testbench.

---

## 2. Directory Structure

```text
projects/active/EF-01-4bit-alu/
├── README.md
├── src/
│   └── alu_4bit.v
├── test/
│   └── tb_alu_4bit.v
└── Makefile
```

---

## 3. Specifications & Interface

### Inputs/Outputs

| Signal | Direction | Width | Description |
|--------|-----------|-------|-------------|
| `a` | Input | 4-bit | Operand A |
| `b` | Input | 4-bit | Operand B |
| `opcode` | Input | 3-bit | Operation Select |
| `result` | Output | 4-bit | ALU Result Output |
| `carry_out` | Output | 1-bit | Carry/Borrow Flag |
| `zero_flag` | Output | 1-bit | Zero Flag (1 if result == 0) |

### Opcode Mapping

| Opcode | Operation | Expression |
|--------|-----------|------------|
| `3'b000` | ADD | `result = a + b` |
| `3'b001` | SUB | `result = a - b` |
| `3'b010` | AND | `result = a & b` |
| `3'b011` | OR  | `result = a \| b` |
| `3'b100` | XOR | `result = a ^ b` |
| `3'b101` | NOT | `result = ~a` |
| `3'b110` | SHL | `result = a << 1` |
| `3'b111` | SHR | `result = a >> 1` |

---

## 4. Navigation

- [Project Index](../../../PROJECT_INDEX.md)
- [06 Digital Logic](../../../02-engineering-foundations/06-digital-logic/README.md)
- [01 HDL Foundations](../../../03-fpga-and-digital-design/01-hdl-foundations/README.md)
