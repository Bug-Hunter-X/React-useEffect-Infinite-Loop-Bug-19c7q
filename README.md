# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected implementation.

## Bug Description

The `useEffect` hook's dependency array is used to specify when the effect should run.  If a value within the dependency array changes, the effect is executed.  In this case, the `count` variable is modified *inside* the effect itself. This triggers a re-render, causing the effect to run again, and so on, resulting in an infinite loop that freezes the browser.

## Solution

The solution involves properly managing the dependencies. If the effect doesn't need to depend on `count` (it's only used to set an initial value or a value that should only be set once), remove `count` from the dependency array. If `count` is dependent on other variables, use those as dependencies.