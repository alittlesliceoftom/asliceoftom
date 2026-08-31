---
title: Insert By Time Period
date: 2024-01-01
---

## [insert\_by\_timeperiod](https://github.com/M-KOPA/insert_by_timeperiod)

An open source dbt project for backfilling and batch refresh of large data models — solving out-of-memory issues when rebuilding large database tables.

Built whilst at M-KOPA and open sourced this solves a similar problem to [microbatch](https://docs.getdbt.com/docs/build/incremental-microbatch), but has a few distinct benefits (for example it supports custom windows written in the code, crucial for efficient window function and separation of read filter from write filter), and some costs - the code is less elegant!

This was really useful at M-KOPA, in particular to manage costs on large tables that start to hit limits such as memory or timeouts. That always happens as companies end up building date x entity grids, so I think that techniques like IBTP are something companies should use more. 