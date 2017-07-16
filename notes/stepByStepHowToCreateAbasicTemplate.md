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

##### To be able to use it, whenever we install a gulp package we need to require it in our main gulp file, for this template it is gulpfile.js

3. create gulpfile.js in the root folder

Gulp has a method called task `gulp.task` and with those tasks a lot of magic happens

gulp.task ('name_of_the_task', 'what to do when the task is called' )

Gulp plugin **gulp-watch** lets us monitor specified files for changes and do something once the change occurs

'./app/assets/styles/**/*.css' selects all the folders inside styles folder and all files inside those folders which ends with '.css'. This doesn't really fit well in this section although it was worth noting, going to change location soon.

Square brackets after a name of the task create dependencies, so that task is not run until the dependant task is completed.

```
gulp.task('cssInject', ['styles'] function(){
	
});
```

Same as with CSS workflow ( below ) we want to maintain a well organized structure of our files, what we want to avoid is one huge gulp file that's becoming more and more complicated with each new line of code.

4. How to deal with errors in a bit more graceful way

By adding this line of code to our 'styles' task, we are able to prevent gulp from stopping our watch task and still get an info on an error that occurred.

```
.on('error', function(errorInfo){
	console.log(errorInfo.toString()); - logs details about our error
	this.emit('end'); - prevents gulp from stopping watch task
})
```

### no.4 setting a CSS workflow, and building our Css skeleton around BEM (Block Element Modifier) principle

1.

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

temp folder styles.css contains only `@import` commands to import all of partial css files

Once we have few more partial files, it is going to be easier to see how useful this workflow is.

2.

Added normalize to our main style.css file, it is an alternative to css resets it adjusts the styles for certain elements, to make your browser more consistent through the browsers.

Personal note: use it on all projects
Personal note: to center a DIV ( wdith 100% ta: center)

**BEM:** 

-- goes for modifier

__ goes for an element

__ element -- with modifier

,blocks should have single responsibility

,bem makes relationship between our css and our website crystal clear 

**REM font size:**

rem is simply a multiplication of default font size in pixels:

font size in rem is always related to the root of the page default font size ( html element )

most browsers default font size is 16px, so for example 1.5rem * 16px = 24px

Making our font size not hard coded this way, we also take care of users who have their browser default settings changed to their likings, like near-sighted or far-sighted people, I think it is safe to say that it becomes responsive in a way.

### no.5 setting up a Browsersync, let gulp use it to refresh the page for you

Browser sync is awesome!

With help from Gulp, Browser sync allows our computer to update our project on the fly, saving us a ton of time by eliminating trivial tasks like refreshing the page from our task list.

If thats not enough Browser sync allows us to simultaneously watch our website on variety of devices in the same network and on different browsers, all of that LIVE!

How cool is that ?! 


1. npm install browser-sync --save-dev
_(Do not forget to import this plugin into gulpfile.js)_

We dont need to import the whole browser-sync package, so just after browser-sync include .create() to import that method only.

Browser-sync creates and runs a small web server on our own computer.

.create() - "creates a Browsersync instance"

.init() - "Start the Browsersync service. This will launch a server, proxy or start the snippet mode depending on your use-case."

.stream() - "The stream method returns a transform stream and can act once or on many files."

[Browser Sync API](https://www.browsersync.io/docs/api) - Here is a link where you can dig deeper on those, and other methods of Browser Sync 


