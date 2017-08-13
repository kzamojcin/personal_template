### no.1

Install node.js - [nodejs official website](https://nodejs.org/en/)
By doing so we are going to be able to use npm command, and much more

### no.2 Creation of "ingredient" list for our website

npm init (creates a **package.json** file, it keeps track of all of the packages that the project uses.)

npm install <pkg> --save (afterwards to install a package and
save it as a dependency in the package.json file.)

1. npm init
2. npm install package --save

npm install (alone it will go through our package.json file and it will install all packages listed there - How cool is this ?!)

To find a package go to npmjs.com or simply type in google what you want to achieve and back it with "npm"

.gitignore file helps us with ignoring files that are not going to be used by final ver of the website 

### no.3 Getting familiar with Gulp

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

### no.4 Setting a CSS workflow, and building our CSS skeleton around BEM (Block Element Modifier) principles

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

rem is simply a result of quotient of font-size we want to provide with default font size, in pixels:

font size in rem is always related to the root of the page default font size ( html element )

Most browsers default font size is 16px, so if we want to have an equivalent of for example 24px in rems, then 24px / 16px = 1.5rem

Making our font size not hard coded this way, we also take care of users who have their browser default settings changed to their likings, like near-sighted or far-sighted people, I think it is safe to say that it becomes responsive in a way.

**EM font size**

This sets the font size in relation to the font size of the element

3.

Whenever you use a float attribute, you take the element from the default/normal flow of the page, so it might be necessary to clear after float so elements do not collapse on each other.

Below, an example how to clear after our floated elements with the use of a mixin named clearfix.

```
@define-mixin clearfix{
	&::after{
		content: "";
		clear: both;
		display: table;
	}
}
```

4.

```
*{
	box-sizing: border-box;
}
```

Love it, cherish it, SPREAD IT :)

This bit of css changes the way browser calculates the "box model" for every element on the page ( * - apply to everything ) . 

Long story short, when you add border or/and padding to the element, browser recalculates the size of the element so it stays having the same dimensions but with that new padding/border. Without that css code browser by default enlarges the element by adding padding/border size to so called true width of the element.

There is a [Super Cool](https://www.youtube.com/watch?v=GvIP6QtCVSg&t=333s) youTube video by Travis Neilson explaining how the magic works in detail, so be sure to check it out.

5. Some extras

Line height - property that doesnt require a unit of measurement like px,rem etc.


### no.5 Setting up a Browsersync, let gulp use it to refresh the page for you

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

### no.6 About the responsivness of images

There are two ways to handle this:

1. One picture, different sizes

```
<img srcset="path/to/image/resolution-small.jpg 570w, path/to/image/resolution-medium.jpg 1200w, path/to/image/resolution-large.jpg 1920w" alt="Example image">
```

Note: 

We need to tell the browser the size of each img, so it is aware of img size before downloading it, that way it can choose which img to download. The important part here is that the browser chooses which img to display, based on dimensions of the user device.

Long story short, this method lets the browser choose the correct size of img by itself.

2. Same shot, different cropping & sizes

```
<picture>
	<source srcset="path/to/image/cropped-large.jpg" media="(min-width: 1200px)">
	<source srcset="path/to/image/cropped-medium.jpg" media="(min-width: 760px)">
	<img src="path/to/image/cropped-small.jpg" alt="Example image">
</picture>
```

This gives us control of the image, and how you want to show it at different sizes of the screen.

Note:

With this method, we always want to start with smallest img first.

3. Combination of both

```
<picture>    
	<source srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w" media="(min-width: 1380px)">
	<source srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w" media="(min-width: 990px)">
	<source srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w" media="(min-width: 640px)">
	<img class="large-hero__image" srcset="assets/images/hero--smaller.jpg 640w, assets/images/hero--smaller-hi-dpi.jpg 1280w" alt="Coastal view of ocean & mountains">
</picture>
```

By adding higher resolution of images to each media query we cover retina displays as well ( which are of higher pixel density )

4. A way to tell the browser at what width the img is going to be displayed, IF NOT full window width. For same & different cropping.

Telling the browser what size of our img is works well if the img is going to be displayed at 100% of window width.

In other cases we need to add an attribute called "sizes" and specify (max)width at which specific img is going to be displayed.
**Real fun thing is**, that we can use media queries inside of sizes attribute !

Below, in the "Same" example we can see a use of sizes attribute with media query.
It says that for screens with min-width 970px and higher, img is going to have a max width of 976px, for screens lower than that media query ( < 970px ) img is having 100vw ( 100% of viewpor twidth of the device ) 

```
Different

<picture>
  <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width:1020px)">
  <source sizes="320px" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width:800px)">
  <img srcset="assets/images/our-start-landscape.jpg, assets/images/our-start-landscape-hi-dpi.jpg" alt="Our founder, Jane Doe">
</picture>
```

```
Same

<img sizes="(min-width: 970px) 976px, 100vw" srcset="assets/images/first-trip-low-res-i.jpg 565w, assets/images/first-trip-i.jpg 976w, assets/images/first-trip-hi-dpi-i.jpg 1952w" alt="Couple walking down a street.">
```



