# Markdown Preview
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Live Demo
[Markdown Preview Demo](https://ramybenaroya.github.io/markdown-preview)

## Start Server
- `npm i`
- `npm start`
- Open [http://localhost:3000](http://localhost:3000)

## Tech stack
- Create React App
- React (with hooks)
- MobX
- MobX React Lite
- Marked
- Github Markdown CSS

## Components Layout
```
--------- <App> ---------
| <Editor/> | <Preview/> |
--------- </App> --------
```

## Performance
- In this project I did my best to avoid unnecessary re-renders as possible.
- I added `console.log("<Component> Render")` in each component
- As you can see in the console, only `<Preview/>` is being rendered upon the textarea change.