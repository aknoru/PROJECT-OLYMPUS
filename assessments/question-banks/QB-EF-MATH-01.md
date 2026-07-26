---
id: QB-EF-MATH-01
title: "Engineering Mathematics High-Yield Question Bank"
type: question-bank
status: active
version: 1.0.0
owner: project-maintainer
description: Practice problems covering Linear Algebra, Calculus, Differential Equations, and Complex Analysis with step-by-step solutions.
---

# Engineering Mathematics High-Yield Question Bank

> **Module:** 02 Engineering Foundations / 01 Engineering Mathematics  
> **Target Exam:** GATE ECE / University End-Semesters  

---

## Linear Algebra

### Question 1 (Eigenvalues)
**Problem:** Matrix $A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$. Find the eigenvalues and corresponding eigenvectors of $A$.

**Solution:**
1. Characteristic Equation: $\det(A - \lambda I) = 0 \implies (2-\lambda)^2 - 1 = 0 \implies (2-\lambda)^2 = 1$.
2. $\lambda - 2 = \pm 1 \implies \lambda_1 = 3, \quad \lambda_2 = 1$.
3. For $\lambda_1 = 3$: $(A - 3I)x = 0 \implies \begin{bmatrix} -1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
4. For $\lambda_2 = 1$: $(A - I)x = 0 \implies \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies v_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

---

### Question 2 (Matrix Rank)
**Problem:** Determine the rank of the matrix $B = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{bmatrix}$.

**Solution:**
1. Observe that Row 2 = $2 \times$ Row 1, and Row 3 = $3 \times$ Row 1.
2. Performing row operations $R_2 \leftarrow R_2 - 2R_1$ and $R_3 \leftarrow R_3 - 3R_1$ yields $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$.
3. Only 1 non-zero row remains $\implies \text{Rank}(B) = 1$.

---

## Calculus & Differential Equations

### Question 3 (Vector Calculus - Divergence Theorem)
**Problem:** Evaluate the surface integral $\oiint_S \vec{F} \cdot d\vec{S}$, where $\vec{F} = x \hat{i} + y \hat{j} + z \hat{k}$ over the closed surface of a unit sphere $x^2 + y^2 + z^2 = 1$.

**Solution:**
1. By Gauss's Divergence Theorem: $\oiint_S \vec{F} \cdot d\vec{S} = \iiint_V (\nabla \cdot \vec{F}) dV$.
2. $\nabla \cdot \vec{F} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 1 + 1 + 1 = 3$.
3. Integral $= 3 \iiint_V dV = 3 \times \text{Volume of unit sphere} = 3 \times \left(\frac{4}{3} \pi (1)^3\right) = 4\pi$.

---

## Navigation

- [Question Banks Index](README.md)
- [Assessment Index](../../ASSESSMENT_INDEX.md)
