# Github Note Taker

# Dependency
- redux
- react-redux
- redux-logger
- redux-saga

# Backend
- [Firebase](https://firebase.google.com/)

## Configure
from 
```
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```
to 
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

# Usage

```Bash
yarn install
react-native run-ios
```

PS. Andriod Environment not tested

