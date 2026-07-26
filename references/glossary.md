---
id: REFERENCES-GLOSSARY-MD
title: "Engineering Glossary"
type: glossary
status: active
version: 1.0.0
owner: project-maintainer
description: Master glossary of engineering, computing, and research terms used across Project Olympus.
---

# Engineering Glossary

> **Canonical location:** `references/glossary.md`
> All modules reference this document for term definitions. When adding a term, follow the format below and keep definitions precise and source-backed.

**Format:** `**Term** — Definition. Related: [term], [term].`

---

## A

**ADC (Analog-to-Digital Converter)** — A circuit that converts a continuous-time, continuous-amplitude analog signal into a discrete digital representation. Key parameters: resolution (bits), sampling rate (MSPS), SNR, and ENOB. Related: [DAC], [Nyquist theorem], [oversampling].

**AXI (Advanced eXtensible Interface)** — ARM AMBA on-chip bus protocol standard. AXI4-Lite for register access, AXI4-Stream for streaming data, AXI4 for burst transfers. Used extensively in FPGA IP integration (Xilinx Vivado, AMD). Related: [AHB], [APB], [FPGA].

## B

**Bandwidth** — (1) Signal processing: the range of frequencies a system passes, measured in Hz. (2) Data systems: the maximum data transfer rate, measured in bps. Related: [Nyquist theorem], [Shannon limit].

**Bare-metal** — Firmware that runs directly on hardware without an OS or RTOS, using only the hardware abstraction layer (HAL) or direct register access. Related: [RTOS], [HAL], [embedded systems].

**BER (Bit Error Rate)** — The ratio of incorrectly received bits to total transmitted bits. BER = N_err / N_total. A key figure of merit in communication systems. Related: [SNR], [Eb/N0], [channel coding].

**Blocking vs Non-blocking assignment** — In Verilog/SystemVerilog: blocking (`=`) executes sequentially within an always block (use in combinational logic); non-blocking (`<=`) schedules assignments to occur at end of time step (use in sequential/clocked logic). Mixing them incorrectly causes simulation–synthesis mismatches. Related: [RTL], [Verilog], [race condition].

**Bode Plot** — A frequency-domain representation of a system's gain and phase vs. log frequency. Used to assess stability margins (gain margin, phase margin) in control systems. Related: [gain margin], [phase margin], [Nyquist criterion].

## C

**Cache** — A small, fast memory closer to the CPU that stores recently used data/instructions to reduce average memory access time. Organized in sets, ways, and lines. Metrics: hit rate, miss penalty, AMAT. Related: [memory hierarchy], [DRAM], [TLB].

**CDC (Clock Domain Crossing)** — A signal transitions between logic clocked by different (unrelated) clocks. Without synchronisation, metastability can corrupt data. Solutions: two-flip-flop synchroniser, async FIFO, handshake. Related: [metastability], [synchroniser], [FIFO].

**CPI (Cycles Per Instruction)** — Average number of clock cycles taken per instruction in a processor. CPU Time = Instruction Count × CPI × Clock Period. Related: [IPC], [pipeline], [performance].

**Control System** — A system that regulates its output to a desired setpoint using feedback. Elements: plant, sensor, comparator, controller, actuator. Types: open-loop, closed-loop, PID. Related: [transfer function], [Bode plot], [stability].

## D

**DAC (Digital-to-Analog Converter)** — Converts a digital code to an analog voltage or current. Key parameters: resolution (bits), settling time, INL, DNL. Related: [ADC], [audio], [signal conditioning].

**Datapath** — The hardware units that perform computation in a processor: ALU, registers, MUX, adders, shifters. Controlled by the control unit. Related: [control unit], [pipeline], [ALU].

**DMA (Direct Memory Access)** — A mechanism that allows peripherals to transfer data to/from memory without CPU intervention, freeing the CPU for other tasks. Related: [bus mastering], [peripheral], [embedded systems].

**DSP (Digital Signal Processing)** — Mathematical manipulation of digitized signals. Core operations: filtering (FIR/IIR), FFT, convolution, correlation. Implemented in software, DSP processors, or FPGA. Related: [FFT], [FIR], [IIR], [FPGA].

## E

**ENOB (Effective Number of Bits)** — A figure of merit for ADC quality that accounts for noise and distortion. ENOB = (SINAD − 1.76) / 6.02. Related: [ADC], [SINAD], [SNR].

**FSM (Finite State Machine)** — A computational model with a finite set of states, transition rules, and outputs. Moore: output depends on state only. Mealy: output depends on state + input. Related: [sequential logic], [HDL], [RTL].

## F

**FFT (Fast Fourier Transform)** — An efficient algorithm for computing the Discrete Fourier Transform (DFT) in O(N log N) vs O(N²). Used for spectral analysis, filtering, and communications. Related: [DFT], [DSP], [spectral analysis].

**FIR (Finite Impulse Response) filter** — A digital filter whose output is a weighted sum of current and past input samples only. Always stable; linear phase achievable. Related: [IIR], [convolution], [DSP].

**FPGA (Field-Programmable Gate Array)** — An integrated circuit containing an array of programmable logic blocks and reconfigurable interconnects, allowing hardware circuits to be implemented after manufacture. Programmed with Verilog/VHDL and synthesised using tools like Vivado or Quartus. Related: [RTL], [synthesis], [LUT].

## G

**GATE (Graduate Aptitude Test in Engineering)** — A competitive examination in India for admission to postgraduate engineering programs (M.Tech/MS/PhD) and PSU recruitment. ECE paper covers 12 subjects: Engineering Mathematics, Networks, EDC, Analog, Digital, Signals & Systems, Control, Communications, Electromagnetics, Programming, and two electives. Related: [PYQ], [GATE ECE].

## H

**HAL (Hardware Abstraction Layer)** — A software layer that standardises access to hardware peripherals through a consistent API, hiding platform-specific details. Common examples: STM32 HAL (STMicroelectronics), nRF HAL (Nordic). Related: [bare-metal], [driver], [embedded systems].

**HDL (Hardware Description Language)** — A programming language used to model and describe digital circuits. Primary HDLs: Verilog (IEEE 1364), VHDL (IEEE 1076), SystemVerilog (IEEE 1800). Related: [RTL], [simulation], [synthesis].

**Hazard (pipeline)** — A condition that prevents the next instruction in a pipeline from executing in the correct clock cycle. Types: structural (resource conflict), data (RAW/WAW/WAR), control (branch). Related: [pipeline], [stalling], [forwarding].

## I

**IIR (Infinite Impulse Response) filter** — A digital filter with feedback (recursive); its impulse response is theoretically infinite. More efficient than FIR for same selectivity, but can be unstable; no guaranteed linear phase. Related: [FIR], [filter design], [DSP].

**Interrupt** — A hardware or software signal that causes the processor to suspend its current task and execute an Interrupt Service Routine (ISR). Types: edge-triggered, level-triggered, NMI. Related: [ISR], [NVIC], [priority], [embedded systems].

**ISA (Instruction Set Architecture)** — The part of the computer architecture visible to software: opcode encoding, register file, memory model, calling convention. Examples: RISC-V, ARM (AArch64), x86-64. Related: [RISC], [CISC], [microarchitecture].

## J

**JTAG (Joint Test Action Group)** — IEEE 1149.1 standard for testing integrated circuits and programming FPGAs/microcontrollers via a 4-wire serial interface (TDI, TDO, TMS, TCK). Used for boundary scan and debug. Related: [debugging], [SWD], [OpenOCD].

## K

**Karnaugh Map (K-map)** — A graphical tool for minimising Boolean expressions with up to 6 variables by grouping adjacent minterms. Produces minimal SOP or POS expressions. Related: [Boolean algebra], [digital logic], [FSM].

## L

**Latency** — The delay from stimulus to response. In memory: access time. In pipelines: cycles from instruction issue to result availability. In networks: end-to-end propagation + queuing + processing delay. Related: [throughput], [bandwidth], [pipeline].

**LUT (Look-Up Table)** — The fundamental programmable logic unit in an FPGA. An N-input LUT can implement any N-input Boolean function by storing all 2^N truth table entries in SRAM. Related: [FPGA], [logic synthesis].

## M

**Metastability** — A condition where a flip-flop enters an indeterminate state because a data input violated setup or hold time. The flip-flop may resolve to 0 or 1 after a random time. Probability of failure reduces with synchroniser stages. Related: [CDC], [synchroniser], [FPGA].

**MTBF (Mean Time Between Failures)** — The average time between system failures; a reliability metric. Related: [reliability], [fault tolerance], [embedded systems].

## N

**Nyquist Theorem** — To reconstruct a bandlimited signal of maximum frequency f_max without aliasing, the sampling rate must be at least 2 × f_max. Related: [ADC], [aliasing], [sampling].

**NVIC (Nested Vectored Interrupt Controller)** — ARM Cortex-M peripheral that manages interrupt priorities and enables nested interrupts. Related: [interrupt], [Cortex-M], [embedded systems].

## O

**Oversampling** — Sampling a signal at a rate much higher than the Nyquist rate to reduce in-band noise through noise shaping. Used in sigma-delta ADCs. Related: [ADC], [Nyquist theorem], [noise shaping].

## P

**PID Controller** — A feedback controller with three terms: Proportional (error), Integral (accumulated error), Derivative (error rate of change). Tuning: Kp, Ki, Kd. Related: [control system], [feedback], [stability].

**Pipeline** — A technique that overlaps execution of multiple instructions by dividing execution into stages (IF, ID, EX, MEM, WB). Increases throughput; introduces hazards. Related: [CPI], [hazard], [forwarding].

**PYQ (Previous Year Question)** — Questions from past GATE or competitive examinations. Analysing PYQs is the most evidence-backed method for understanding exam patterns and prioritising topics. Related: [GATE], [revision].

## R

**Race Condition** — A flaw where the system's behaviour depends on the relative timing of uncontrolled events. In digital design: can arise from combinational feedback or incorrect Verilog blocking assignments. Related: [Verilog], [glitch], [CDC].

**RTOS (Real-Time Operating System)** — An OS designed for embedded systems requiring deterministic response times. Key concepts: tasks, scheduler (preemptive/cooperative), semaphores, queues, priorities. Examples: FreeRTOS, Zephyr, VxWorks. Related: [embedded systems], [scheduler], [semaphore].

**RTL (Register-Transfer Level)** — A hardware abstraction describing circuits in terms of registers, combinational logic, and the data transfers between them. RTL is synthesisable; behavioural is not. Related: [HDL], [synthesis], [FPGA].

## S

**Setup Time (t_su)** — The minimum time before the clock edge that data must be stable at a flip-flop input. Violation causes metastability. Related: [hold time], [timing analysis], [metastability].

**Shannon Limit** — The theoretical maximum information transfer rate over a channel: C = B × log₂(1 + SNR), where B is bandwidth and SNR is signal-to-noise ratio. Related: [channel capacity], [SNR], [coding theorem].

**SNR (Signal-to-Noise Ratio)** — The ratio of signal power to noise power, typically in dB: SNR_dB = 10 × log₁₀(P_signal / P_noise). Related: [BER], [ADC], [communications].

**Synthesis** — The process of converting RTL (Verilog/VHDL) into a netlist of logic gates, registers, and FPGA primitives. Tools: Vivado Synthesis (Xilinx), Quartus (Intel), Yosys (open-source). Related: [place and route], [timing analysis], [LUT].

## T

**TLB (Translation Lookaside Buffer)** — A cache for virtual-to-physical address translations, used to speed up virtual memory access. A TLB miss triggers a page-table walk. Related: [virtual memory], [cache], [MMU].

**Transfer Function** — In control and signal processing, the ratio of output to input in the Laplace (s) or Z domain. H(s) = Y(s) / X(s). Fully characterises a linear, time-invariant system. Related: [Bode plot], [pole-zero], [stability].

## U

**UART (Universal Asynchronous Receiver/Transmitter)** — A serial communication protocol without a shared clock, using start/stop bits for framing. Typically configured as: baud rate, data bits, parity, stop bits. Related: [SPI], [I2C], [serial communication].

## V

**Verilog** — IEEE 1364 hardware description language used for RTL design, simulation, and synthesis. Synthesisable constructs: `always @(posedge clk)`, `assign`, `module`, `reg`, `wire`. Related: [VHDL], [SystemVerilog], [RTL].

**Virtual Memory** — An abstraction that gives each process the illusion of a private address space, backed by physical memory and disk. Implemented via page tables and TLBs. Related: [TLB], [MMU], [cache].

## Z

**Z-Transform** — The discrete-time equivalent of the Laplace transform. Used to analyse discrete-time systems and digital filters. X(z) = Σ x[n] z^−n. Related: [Laplace transform], [IIR], [DSP], [digital filter design].

---

## Adding Terms

To add a new term:

1. Insert it alphabetically in the correct letter section.
2. Use format: `**Term** — Precise definition. Related: [term1], [term2].`
3. Cross-reference at least two related terms.
4. If the definition comes from a primary source, add a citation to [`references/bibliography.bib`](bibliography.bib).
5. Run `python scripts/validate_repository.py` to confirm the file passes validation.

---

## Related Documents

- [Acronyms](acronyms.md)
- [Bibliography](bibliography.bib)
- [Standards Index](standards-index.md)
- [Knowledge Graph](../KNOWLEDGE_GRAPH.md)
