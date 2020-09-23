# react-rrule

> Implementation of rrule in React

[![NPM](https://img.shields.io/npm/v/react-rrule.svg)](https://www.npmjs.com/package/react-rrule) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-rrule
```

## Usage

```jsx
import React from 'react'

import ReactRRule from 'react-rrule'

const YourComponent = () => {
  return <ReactRRule onChange={(val) => console.log(val)} />
}
```

`onChange` will return an object that contains RRule Object, PSQL RRule Object, RRule string and RRule text.

## License

MIT © [thesanjeevsharma](https://github.com/thesanjeevsharma)
