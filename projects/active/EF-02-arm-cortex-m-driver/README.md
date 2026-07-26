---
id: EF-02-ARM-CORTEX-M-DRIVER
title: "EF-02 Bare-Metal UART Driver for ARM Cortex-M"
type: project
status: active
version: 1.0.0
owner: project-maintainer
description: Register-level C bare-metal UART driver for ARM Cortex-M (STM32) with ring buffer and unit tests.
---

# EF-02 Bare-Metal UART Driver Project

> **Domain:** 04 Embedded Systems / 06 Software & Tooling  
> **Classification:** Active Engineering Project  

---

## 1. Project Overview

This project implements a production-grade, bare-metal C UART driver for ARM Cortex-M microcontrollers. It features memory-mapped register manipulation without vendor HAL bloat, an interrupt-driven ring buffer, and unit tests.

---

## 2. Directory Structure

```text
projects/active/EF-02-arm-cortex-m-driver/
├── README.md
├── include/
│   └── uart_driver.h
├── src/
│   └── uart_driver.c
└── test/
    └── test_uart_driver.c
```

---

## 3. Specifications

- **Baud Rate:** 115200 bps @ 16 MHz System Clock
- **Buffer:** 64-Byte Circular Ring Buffer for RX/TX interrupts
- **MISRA C Compliance:** Strict type safety, explicit bit shifts, zero dynamic memory allocation (`malloc`)

---

## 4. Navigation

- [Project Index](../../../PROJECT_INDEX.md)
- [01 C Foundations](../../../04-embedded-systems/01-c-foundations/README.md)
- [03 Peripherals & Drivers](../../../04-embedded-systems/03-peripherals-and-drivers/README.md)
