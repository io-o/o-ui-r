
## AutoComplete

Demo:

```tsx
import React from 'react';
import { AutoComplete } from 'dumi';

const testData = ['a', 'ab', 'c', 'ddd']
const fetchData = (query) => {
  return testData.filter(item => item.indexOf(query) > -1)
}

export default () => (
  <>
    <AutoComplete value="sss" fetchData={fetchData}></AutoComplete>
  </>
);
```