# 10pdemo

Demo Project

---

# ✈️ Flight Path Generator (Exercise 1)

This project generates flight path instructions for Commercial Airlines Flight #4815162342 using symbolic coding logic.

---

## 🧩 Problem Summary

You are given a symbolic rule set for creating flight paths from **Chicago** to other U.S. cities. The instruction format must follow these rules:

- Every instruction starts with `X` (begin) and ends with `Y` (stop).
- After `X`, the flight must specify its **direction from Chicago**: `A`, `B`, `C`, or `D`.
- It must then include a path using codes:
  - `1` = Travel North
  - `2` = Travel South
  - `3` = Travel East
  - `4` = Travel West
- After the path, a **city code** is added:
  - `N54` = New York
  - `MB9` = Miami
  - `L32` = Los Angeles
- If the city starts with **L**, its code must be added **twice**.
- All paths begin in **Chicago**.

---

✅ Example:  
The flight path to Los Angeles is: answer

---

## 💻 How to Run

1. **Node.js installed locally**

2. **Clone or download the repo**

3. **Run in terminal:**

```bash
node index.js