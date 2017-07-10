
### no.1 creation of "ingredient" list for our website

npm init (creates a **package.json** file, it keeps track of all of the packages that the project uses.)

npm install <pkg> --save (afterwards to install a package and
save it as a dependency in the package.json file.)

1. npm init
2. npm install package --save

npm install (alone it will go through our package.json file and it will install all packages listed there - How cool is this ?!)

To find a package go to npmjs.com or simply type in google what you want to achieve and back it with "npm"

.gitignore file helps us with ignoring files that are not going to be used by final ver of the website 

### no.2 getting familiar with Gulp

Gulp is a build system, tool, task runner. Gulp = automation.

Gulp plugins help automate tasks.

1. npm install gulp-cli --global

Installs gulp globally on our computer, which means that we can run gulp line anywhere and it will be recognised

2. npm install gulp --save-dev 

Adding gulp to our specific project (ex. perosnal_template/website-blueprint/)
By saving it with -dev we put it into devDependencies, the difference between devDependencies and dependencies alone is:

dependecies - website required to run in web browser
devDependencies - important for developer

3. create gulpfile.js in the root folder

Gulp has a method of task `gulp.task` and with those tasks is where a majority of magic happens

Gulp plugin **gulp-watch** lets us monitor specified files for changes and do something once the change happens

'./app/assets/styles/**/*.css' selects all the folders inside styles folder and all files inside those folders which ends with '.css'