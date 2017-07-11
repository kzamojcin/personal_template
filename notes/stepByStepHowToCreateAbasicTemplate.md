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

###### Whenever we install a gulp package, to be able to use it we need to require it in our main gulp file, for this template it is gulpfile.js

3. create gulpfile.js in the root folder

Gulp has a method called task `gulp.task` and with those tasks a majority of magic happens

Gulp plugin **gulp-watch** lets us monitor specified files for changes and do something once the change occurs

'./app/assets/styles/**/*.css' selects all the folders inside styles folder and all files inside those folders which ends with '.css'. This doesn't really fit well in this section although it was worth noting, going to change location soon.

### no.4 setting a CSS workflow

autoprefixer package - saving a ton of time, by automatically prefixing css properties
postCSS - one of the fastest preprocessor for CSS

We are going to use "pipe system" to be able to modify our files "on the go":

return gulp.src() - path to a source file 

return is included as gulp.src() is a asynchronous function
pipe() - applying modifier to the file, we can use many pipes in one task
gulp.dest() - destination path for the file

personal note: 
For now I'm going to use postCss, but I'm considering the use of Prepros for css files, as of Sass, there are some plugins for postcss in regards to Sass but those are not what I look for.
