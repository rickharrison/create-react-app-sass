# create-react-app-sass

Enhances [create-react-app](https://github.com/facebookincubator/create-react-app) to include support for [Sass](http://sass-lang.com/).

### Installation

```
npm install create-react-app-sass --save-dev
```

### Usage

Replace your `start` and `build` scripts in your `package.json`

```
"scripts": {
  "start": "react-scripts-with-sass start",
  "build": "react-scripts-with-sass build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},
```

Your `src` directory will automatically re-compile any `.scss` file into a `.css` file with the same name in the same location. Then you can `import` the `.css` file in your components the same way as before using `create-react-app`. You will also need to add `*.css` to your `.gitignore` file as they are now just a build artifact and your `.scss` is the true source.
