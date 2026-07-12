## Engineering Insight #001

Never change code before understanding the business requirement.

Example:

Removing a UI component temporarily is different from permanently removing a feature.

Temporary changes may only require hiding the UI.

Permanent changes usually require removing unused code.


## Engineering Insight #002

A file should be responsible for one thing.
Questions to ask:
- What is this file responsible for?
- What should this file NOT be responsible for?
- If I delete this file, what else breaks?
- Does another file depend on it unnecessarily?


## Engineering Insight #003

Independent components are easier to maintain.
Benefits
- Easier debugging
- Failure isolation
- Better scalability
- Easier testing
- Easier replacement

## Engineering Insight #004

A useEffect should not blindly update the state it depends on.

Reason:

State change
    ↓
Component re-renders
    ↓
Dependency changes
    ↓
Effect runs again

This can create a feedback loop (infinite render loop).
