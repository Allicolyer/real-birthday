# Real Birthday

Real Birthday is the most accurate checker for valid birthdays. It fetches the birthday of the oldest person alive from Wikipedia to validate birthdays. Download our node [NPM package](https://www.npmjs.com/package/real-birthday).

## Documentation

This package can be used both client-side and server-side.

### Installation

Install using NPM or yarn

**NPM**:
`npm install --save real-birthday`

**Yarn**:
`yarn add real-birthday`

### Usage

Import isRealBirthday using ES6 import syntax

```
import isRealBirthday from "real-birthday";
```

or import isRealBirthday using CommonJS syntax

```
const isRealBirthday = require('real-birthday')
```

isRealBirthday accepts a Javascript Date object as an input and returns a boolean.

```
let bool = isRealBirthday(Date Object)
```

### Examples

1. Invalid input type - returns an `Error`

   ```
   isRealBirthday("January 1st 2015")
   ```

2. Invalid Date - returns an `Error`

   ```
   isRealBirthday(new Date("Hi"))
   ```

3. Valid Birthday, but very vague - returns `true`

   ```
   isRealBirthday(new Date("2015"))
   ```

4. Valid Birthday - returns `true`

   ```
   isRealBirthday(new Date("2015-01-04"))
   ```

5. Invalid Birthday, this person is clearly lying - returns `false`

   ```
   isRealBirthday(new Date("1815-01-04"))
   ```

### React Example

Try an example in React on CodePen!

[![Edit stupefied-wildflower-tu6mc](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/stupefied-wildflower-tu6mc?fontsize=14&hidenavigation=1&theme=dark)

## Created by

<table>
  <tr>
    <td align="center"><a href="https://github.com/michaelwlu"><img src="https://avatars1.githubusercontent.com/u/9114194?s=460&v=4" width="200px;" alt="Picture of Michael Lu"/><br /><b>Michael Lu</b></a></td>
    <td align="center"><a href="https://github.com/hwacha"><img src="https://avatars1.githubusercontent.com/u/6621013?s=460&v=4s" width="200px;" alt="Picture of Bill Marcy"/><br /><b>Bill Marcy</b></a></td>
    <td align="center"><a href="https://twitter.com/AlliColyer"><img src="https://avatars1.githubusercontent.com/u/11083917?s=460&v=4" width="200px;" alt="Picture of Allison Colyer"/><br /><b>Alli Colyer</b></a></td>
    <td align="center"><a href="https://github.com/achien"><img src="https://avatars3.githubusercontent.com/u/1211597?s=460&v=4" width="200px;" alt="Picture of Andrew Chien"/><br /><b>Andrew Chien</b></a></td>
  </tr>
</table>
