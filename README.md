# eslint-config-lamb

LAMB standard eslint configuration to share target browsers with different applications.

## Use LAMB configuration
Add this package as a devDependencies of the project. On your `package.json` add
```
"eslint-config-lamb": "git://github.com/LAMB-GoCoGroup/eslint-config-lamb.git"
```
Install the dependency
```
npm install
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