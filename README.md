# vue-rjs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
```bash
{
    "eslint.autoFixOnSave": true,
"eslint.validate": [
  "javascript",{
    "language": "vue",
    "autoFix": true
  },"html",
  "vue"
],
    "vetur.format.defaultFormatter": {
        "html": "prettier",
        "css": "prettier",
        "postcss": "prettier",
        "scss": "prettier",
        "less": "prettier",
        "js": "prettier",
        "ts": "prettier",
        "stylus": "stylus-supremacy"
      },
    "editor.quickSuggestions": {
        "strings": true
    }
}
```