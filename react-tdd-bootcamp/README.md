# Intro to testing en React JS

## Jest

- Globals methods
  In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them. However, if you prefer explicit imports, you can do import {describe, expect, test} from '@jest/globals'.

- Matchers
  Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers

- Testing asynchronous code
  It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this.

- Setup and Teardown
  Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.

- Mock functions
  Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

- Jest with React
  If you use the create-react-app command, you will have Jest ready to use.
  If you have an existing application you'll need to install a few packages to make everything work well together. You can review the Jest documentation in order to get the instructions.

## React Testing Library

- Queries
  Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the priority guide on the documentation for recommendations on how to make use of semantic queries to test your page in the most accessible way.

- Firing Events
  We are going to talk about fireEvent, but I recommend you to check the documentation about user-event that is a companion library for Testing Library that provides more advanced simulation of browser interactions than the built-in fireEvent method.

- Async Methods
  Several utilities are provided for dealing with asynchronous code. These can be useful to wait for an element to appear or disappear in response to an event, user action, timeout, or Promise. In the documentation you can review more details how testing disappearance because sometimes you need to test that an element is present and then disappears or vice versa.

The async methods return Promises, so be sure to use await or .then when calling them.
