# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# To Make project with vite use following commands
  npm create vite@latest
## Enter projecte name 
## Select frame work / library i.e. React
## Select supported language i.e. javascript
## Move to newly created project directory (cd projectname)
## Run Command "npm i" or "npm insall"
## To view commands, check file "package.json" in script section, you can run any script by nmp start "scriptname" i.e. nmp start dev



# to add tailwind css in existing vite project (Go To for all frameworks, etc https://tailwindcss.com/docs/installation/framework-guides)


## select your project type and follow guide
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## replace content of tailwind.config.js with fillowing
** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## Add following on top of index.css file
@tailwind base;
@tailwind components;
@tailwind utilities;
// if you see warnings in vs code on above lines, it will work dont worry, to remove warnings
//1- Go to the settings of vs code
//2- Search for unknown, and change its setting to "ignore"
## Use command to start once

npm run dev


## you can get components ui from devui.io