# eslint-config-lamb

LAMB standard eslint configuration to share target browsers with different applications.

## Use LAMB configuration
Install the dev dependency
```
npm install --save-dev git://github.com/LAMB-GoCoGroup/eslint-config-lamb.git
```
On the root of the project create a `.eslintrc.js` and extends the configuration
```
module.exports = {
  extends: [
    'eslint-config-lamb',
    ...
  ]
  ...
};
```