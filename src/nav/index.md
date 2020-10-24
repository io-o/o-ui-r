## Nav

Demo:

```tsx
import React from 'react';
import { Nav } from 'dumi';

const list = [
  {
    name: 'aaa',
  },
  {
    name: 'bbb',
  },
];
export default () => (
  <>
    <Nav list={list} activeIndex={0}></Nav>
  </>
);
```
