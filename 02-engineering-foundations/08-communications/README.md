---
id: 02-ENGINEERING-FOUNDATIONS-08-COMMUNICATIONS-README-MD
title: "08 Communications"
type: curriculum-module
status: active
version: 1.0.0
owner: project-maintainer
description: Core curriculum module covering Analog Communications (AM/FM/PM), Digital Communications (PCM/ASK/PSK/FSK), Random Processes, SNR, and Information Theory.
---

# 08 Communications

> **Domain:** 02 Engineering Foundations  
> **Target Audience:** Undergraduate ECE / GATE ECE / Telecom Engineers  
> **Prerequisites:** 03 Signals & Systems, 11 Probability & Random Processes  

---

## 1. Overview & Objectives

Communications analyzes the transmission of information over physical channels subject to bandwidth limitations and noise.

### Key Objectives
1. **Analog Communication:** AM (DSB-SC, SSB-SC, VSB), FM (Narrowband/Wideband), PM, Superheterodyne receivers.
2. **Pulse Modulation:** PAM, PWM, PPM, Quantization, PCM, DPCM, Delta Modulation, ISI & Nyquist criterion.
3. **Digital Modulation Schemes:** BPSK, QPSK, BFSK, QAM, Constellation diagrams, Coherent/Non-coherent detection.
4. **Noise & Random Processes:** Thermal noise, SNR calculations, Noise Figure, Equivalent Noise Temperature.
5. **Information Theory:** Entropy, Mutual Information, Shannon Channel Capacity theorem, Source/Channel coding.

---

## 2. Topic Breakdown & Syllabus

```mermaid
flowchart TD
    COMM["Communications"]
    ANALOG["1. Analog Modulation"]
    PULSE["2. Pulse & Digital Transmission"]
    DIGITAL["3. Digital Modulation"]
    INFO["4. Information Theory & Noise"]

    COMM --> ANALOG
    COMM --> PULSE
    COMM --> DIGITAL
    COMM --> INFO

    ANALOG --> A1["AM, DSB-SC, SSB-SC, VSB"]
    ANALOG --> A2["FM, PM, Carson's Rule & Superhet"]

    PULSE --> P1["PCM, Quantization Noise, DPCM"]
    PULSE --> P2["ISI, Raised Cosine Filter, Eye Diagrams"]

    DIGITAL --> D1["BPSK, QPSK, M-ary QAM Constellations"]
    DIGITAL --> D2["Matched Filter & Optimum Receiver"]

    INFO --> I1["Entropy & Shannon Capacity Formula"]
    INFO --> I2["Noise Figure & SNR in AM/FM"]
```

---

## 3. Core Equations

| Concept | Equation | Application |
|---------|----------|-------------|
| **Carson's Rule (FM Bandwidth)** | $B_T = 2(\Delta f + f_m) = 2 f_m (\beta + 1)$ | FM channel bandwidth calculation |
| **PCM Bit Rate** | $R_b = n \cdot f_s \ge 2 n f_{max}$ | Digital voice/video transmission |
| **Shannon Channel Capacity** | $C = B \log_2 \left( 1 + \frac{S}{N} \right)$ | Maximum theoretical data rate |
| **PCM Quantization SNR** | $SNR_{dB} \approx 6.02 n + 1.76$ | ADC resolution vs dynamic range |

---

## 4. Navigation & Cross-References

- [Parent Directory](../README.md)
- [03 Signals and Systems](../03-signals-and-systems/README.md)
- [11 Probability and Statistics](../11-probability-and-statistics/README.md)
- [Knowledge Graph](../../KNOWLEDGE_GRAPH.md)
