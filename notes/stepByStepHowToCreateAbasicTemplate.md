### no.1

Install node.js - [nodejs official website](https://nodejs.org/en/)
By doing so we are going to be able to use npm command, and much more

### no.2 creation of "ingredient" list for our website

npm init (creates a **package.json** file, it keeps track of all of the packages that the project uses.)

npm install <pkg> --save (afterwards to install a package and
save it as a dependency in the package.json file.)

1. npm init
2. npm install package --save

npm install (alone it will go through our package.json file and it will install all packages listed there - How cool is this ?!)

To find a package go to npmjs.com or simply type in google what you want to achieve and back it with "npm"

.gitignore file helps us with ignoring files that are not going to be used by final ver of the website 

### no.3 getting familiar with Gulp

Gulp is a build system, tool, task runner. Gulp = automation.

Gulp plugins help automate tasks.

1. npm install gulp-cli --global

Installs gulp globally on our computer, which means that we can run gulp line anywhere and it will be recognised

2. npm install gulp --save-dev 

Adds gulp to our specific project (ex. perosnal_template/website-blueprint/)
By saving it with -dev we put it into devDependencies, the difference between devDependencies and dependencies alone is:

dependecies - packages required by our website to run properly in web browser
devDependencies - development packages important for.. developer

##### Whenever we install a gulp package, to be able to use it we need to require it in our main gulp file, for this template it is gulpfile.js

3. create gulpfile.js in the root folder

Gulp has a method called task `gulp.task` and with those tasks a majority of magic happens

Gulp plugin **gulp-watch** lets us monitor specified files for changes and do something once the change occurs

'./app/assets/styles/**/*.css' selects all the folders inside styles folder and all files inside those folders which ends with '.css'. This doesn't really fit well in this section although it was worth noting, going to change location soon.

### no.4 setting a CSS workflow, and building our Css skeleton around BEM (Block Element Modifier) principle

autoprefixer package - saving a ton of time, by automatically prefixing css properties
postCSS - one of the fastest preprocessor for CSS

We are going to use "pipe system" to be able to modify our files "on the go":

return gulp.src() - path to a source file 

return is included as gulp.src() is a asynchronous function
pipe() - applying modifier to the file, we can use many pipes in one task
gulp.dest() - destination path for the file

```
personal note: 
For now I'm going to use postCss, but I'm considering the use of Prepros for css files, as of Sass, there are some plugins for postcss in regards to Sass but those are not what I'm looking for.
```

Well organized css file structure is very important.

In this project we create few _filename.css files, underscore "_" meaning is that it tells us that a file is not a stand-alone, it is imported in some other css file. 

Here we use styles.css as a destination file for all partial css ("_filename.css") files.

Dividing css structure that way helps us to stay organized. We don't have to work with a one huge file that is very hard to navigate through, instead we have small sections(files) of css responsible for specific parts of the website, which on the contrary are super easy to navigate through. 

In the end gulp imports all of the partial css files into one css file that our website uses, to achieve this we need a postcss plugin postcss-import.

Presented below is folders & files current structure.

styles.css contains only `@import` commands to import all of partial css files

```
│   index.html
│
├───assets
│   │
│   └───styles
│       │   styles.css
│       │
│       ├───base
│       │       _global.css
│       │
│       └───modules
│               _large-hero.css
│
└───temp
    └───styles
            styles.css
```

Once we have few more partial files, it is going to be more obvious how useful this workflow is.

2. ( 2? I guess ) 

Added normalize to our main style.css file, it is an alternative to css resets it adjusts the styles for certain elements, to make your browser more consistent through the browsers.

Personal note: use it on all projects
Personal note: to center a DIV ( wdith 100% ta: center)

BEM: -- for a class like large-hero--something goes for modifier
,blocks should have single responsibility
,bem makes relationship between our css and our website crystal clear 
