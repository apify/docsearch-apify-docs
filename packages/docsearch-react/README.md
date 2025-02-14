# Watch out!

> This is a **fork of the DocSearch project**! It contains tweaks specific to the [Apify Docs](https://docs.apify.com/) search, so it's most likely not what you are looking for. If you want to use DocSearch on your website, please use the [original repository](https://github.com/algolia/docsearch).

---

# @docsearch/react

React package for [DocSearch](http://docsearch.algolia.com/), the best search experience for docs.

## Installation

```bash
yarn add @docsearch/react@3
# or
npm install @docsearch/react@3
```

If you don’t want to use a package manager, you can use a standalone endpoint:

```html
<script src="https://cdn.jsdelivr.net/npm/@docsearch/react@3"></script>
```

## Get started

DocSearch generates a fully accessible search box for you.

```jsx App.js
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

function App() {
  return (
    <DocSearch
      appId="YOUR_APP_ID"
      indexName="YOUR_INDEX_NAME"
      apiKey="YOUR_SEARCH_API_KEY"
    />
  );
}

export default App;
```

## Documentation

[Read documentation →](https://docsearch.algolia.com/docs/DocSearch-v3)
