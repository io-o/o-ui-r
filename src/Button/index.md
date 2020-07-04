
## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'dumi';

export default () => (
  <>
    <Button onClick={() => alert(1)}>default</Button>
    <Button type="primary">primary</Button>
    <Button size="lg">lg</Button>
  </>
);
```