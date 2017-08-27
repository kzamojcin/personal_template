## On-going process of collecting steps

### self-note - be sure to write down and describe all npm packages installed 

### no.1

1. 

Install node.js - [nodejs official website](https://nodejs.org/en/)
By doing so we are going to be able to use npm command, and much more

2.

If we want to re-create our project on another machine then we need to go through few steps.

- first we need to run "npm init" in a folder where we are going to install our node modules 
- download all files from our repository and replace package.json with package.json from our repository and run "npm install"

### no.2 Creation of "ingredient" list for our website

npm init (creates a **package.json** file, it keeps track of all of the packages that the project uses.)

npm install <pkg> --save (to install a package and
save it as a dependency in the package.json file.)

1. npm init
2. npm install package --save

npm install (it will go through our package.json file and it will install all packages listed there - How cool is this ?!)

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
devDependencies - development packages important for.. developer ;)

##### To be able to use it, whenever we install a gulp package we need to require it in our main gulp file, for this template it is gulpfile.js

3. create gulpfile.js in the root folder

Gulp has a method called task `gulp.task` and with those tasks a lot of magic happens

gulp.task ('name_of_the_task', 'what to do when the task is called' )

Gulp plugin **gulp-watch** lets us monitor specified files for changes and do something once the change occurs

'./app/assets/styles/**/*.css' selects all the folders inside styles folder and all files inside those folders which ends with '.css'. This doesn't really fit well in this section although it was worth noting, going to change location soon.

Square brackets after a name of the task create dependency, so that task is not run until the dependant task is completed.

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

5. Extras

while writing a gulp task, within gulp.src we can use []  (['folder1/folder1','folder2/folder2']) to provide multiple paths.

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

In this project we create few _filename.css files, underscore "_" tells us that a file is not a 'stand-alone', it is imported in some other css file. 

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

styles folder styles.css contains only `@import` commands to import all of partial css files

temp folder styles.css is for browsers

Once we have few more partial files, it is going to be easier to see how useful this workflow is.

2.

Added normalize to our main style.css file, it is an alternative to css resets it adjusts the styles for certain elements, to make your browser more consistent through the browsers.

Personal note: use it on all projects
Personal note: to center a DIV ( width 100% ta: center)

**BEM:** 

-- goes for modifier

__ goes for an element

__ element -- with modifier

,blocks should have single responsibility

,bem makes relationship between our css and our website crystal clear 

**REM font size:**

rem is simply a result of quotient of font-size we want to provide with browser default font size in pixels:

font size in rem is always related to the root of the page default font size ( html element )

Most browsers default font size is 16px, so if we want to have an equivalent of lets say 24px in rems, then 24px / 16px = 1.5rem

Making our font size not hard coded, we also take care of users who have their browser default settings changed to their likings, like near-sighted or far-sighted people, I think it is safe to say that it becomes responsive.

**EM font size**

This sets the font size in relation to the font size of the element

3.

Whenever you use a float attribute, you take the element out from the default/normal flow of the page, so it might be necessary to clear after float so elements do not collapse on each other.

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

4. Love it, cherish it, SPREAD IT :)

```
*{
	box-sizing: border-box;
}
```

This bit of css changes the way browser calculates the "box model" for every element on the page ( * - apply to everything ) . 

Long story short, when you add border or/and padding to the element, browser recalculates the size of the element so it stays having the same dimensions but with that new padding/border. Without that bit of css browser by default enlarges the element by adding padding/border size to so called true width of the element.

There is a [Super Cool](https://www.youtube.com/watch?v=GvIP6QtCVSg&t=333s) youTube video by Travis Neilson explaining how the magic works in detail, so be sure to check it out.

5. Some extras

**Line height** - property that doesnt require a unit of measurement like px,rem etc.

**Padding** - It is a good practice to give a container element at least 1px of bottom padding, if it is 0 elements that are inside have nothing to push against, thus margin flows out of the container 

**Position relative** - Surrounding elements are not aware of the change in position of our element, as far as they are concerned the element still sits in its original position.
To counteract this we can add negative 80px to our bottom margin, when moving element 80px upwards. So elements would be aware of the change, and move as well those 80px upwards.

**flexbox** - with use of flexbox we can even heights of our elements

**Position absolute** - by default it shrink-wraps so it uses as little space as it can or in other words as much as it needs.

**z-index** - to be respected by our browser needs to be used in conjuction with position: relative.


### no.5 Setting up a Browsersync, let gulp use it to refresh the page for you

**Browser sync is awesome!**

With help from Gulp, Browsersync allows our computer to update our project on the fly, saving us a ton of time by eliminating trivial tasks like refreshing the page from our task list.

If thats not enough Browsersync allows us to simultaneously watch our website on variety of devices in the same network and on different browsers, all of that LIVE!

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

By adding higher resolution of images to each media query we cover retina type of  displays as well ( which are of higher pixel density )

4. A way to tell the browser at what width the img is going to be displayed, IF NOT full window width. For same & different cropping.

Telling the browser what size of our img is works well if the img is going to be displayed at 100% of window width.

In other cases we need to add an attribute called "sizes" and specify (max)width at which specific img is going to be displayed.
**Real fun thing is**, that we can use media queries inside of sizes attribute !

Below, in the "Same" example we can see a use of sizes attribute with media query.
It says that for screens with min-width 970px and higher, img is going to have a max width of 976px, for screens lower than that media query ( < 970px ) img is having 100vw ( 100% of viewport width of the device ) 

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

### no.7 Creating an svg icon sprite and basic commands for gulp-svg-sprite commands

To read more about gulp-svg-sprite go to its github page

We create a sprite of icons to boost loading speed of our page, by accumulating all icons in one image.

Gulp is going to get all of our icons and convert them into that one image.

1. Add sprites.js file to gulp>tasks folder
2. Install gulp-svg-sprite
3. Create gulp.task 
4. Create a config object for gulp-svg-sprite plugin
5. gulp-svg-sprite uses a moustache template system "{{#shapes}}some code{{/shapes}}" anything included inside that code is going to be looped through for each icon

Example:

```
{{#shapes}}
	.icon--{{base}} {
		width:;
		height:;
	}
{{/shapes}}
```

Outputs:

```
.icon--facebook {
		width:;
		height:;
	}
	.icon--fire {
		width:;
		height:;
	}
	.icon--globe {
		width:;
		height:;
	}
```

So base argument reads the name of each icon file and puts it in place.
**OK, that is impressive !**

{{{sprite}}} - goes into svg folder (created by plugin) and reads sprite file
{{#first}}{{/first}} - code runs only once

6. Once we have our sprite and CSS file related to that sprite, we need to include it in our main style.css file so we can make use of it.

Example of sprite in use:

```
<span class="icon icon--star section-title__icon"></span>
```

7. There is a few new npm plugins included in this process, be sure to check sprites.js for them. 

### no.9 Webpack - allows to split up our js into multiple files

1. Install webpack npm install webpack -g (globally)
2. Add webpack.config.js file into root of our folder

note - when we require a file, the code from that file is immediately executed.

Required variable is always an object.


To be able to use certain parts of js from another file in our main js file, first we need to export those parts from within that file.
Webpack is expecting a file to contain an object "exports = {}", this is what is returned by required call.

```
exports.exampleProperty = "Super magical example value";
exports.exampleFunction = function(){
	alert("Swishhhhh..");
}
```
Above, thats the way to export properties and methods.

Below, to create a module we transform exports object into an object we have created inside our file.... sth like this..
```
module.exports = Person;
```


3. Setting webpack so it refreshes webrowser automatically on change of .js files

Personal note - webpack does have an ability to watch our files and even spin out its own webpack dev server // not going to use in this project as we already use gulp&browsersync

Integration of webpack into our gulp automation: 

**If we want to run webpack programmaticaly within our gulp task, we need to install webpack LOCALLY** - super important

To make our webpack code "error-proof" we can make use of two attributes that webpack provides ( err & stats ):

```
webpack(require('../../webpack.config.js'), function(err,stats){
		if(err){
			console.log(err.toString());

		}
		console.log(stats.toString());
		callback();
	});
```
toString() method translates data into readable human information

### no.10 BABEL - excited ?.. I am! 

> Tomorrow's JavaScript today - Brad Schiff

Babel to JavaScript is what PostCSS,SASS,LESS is to CSS, it allows us to use ultra modern JS syntax within our files even if that syntax is not yet used by web browsers, it is going to translate it into standard syntax (like ES6 -> ES5 JS) that web browsers can understand.
That's the kind of magic we love :)

1. To install Babel we need to actually install 3 packages

babel-core, babel-loader (helps to integrate babel with webpack), babel-preset-2015

2. Integration of Babel into Webpack

```
module:{
	loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			},
			test: /\.js$/,
			exclude: /node_modules/
		}
	]
}
```
Included this code into webpack.config.js

test - apply babel-loader only to JS files
exclude - omit files in node_modules folder

ES6 makes inheritance a piece of cake, example:

```
class Adult extends Person{
	payTaxes(){
		console.log( this.name + " zero taxes to pay.");
	}
}

var jane = new Adult('Jane', 'Orange');
```

In this example, Jane now has access to an Adult class, while still having access to Person class.

### no.11 JavaScript ES6

With ES6 we can transform our code significantly.

This code (importing a module):
```
var Person = require('./modules/Person');
```
gets transformed into this:
```
import Person from './modules/Person';
```


This code (creating a module/class/function & exporting):
```
function Person(fullName, favColor){
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function(){
		console.log("Hello " + fullName + " your fav color is " + favColor + ".");
	}
}

module.exports = Person;
```
gets transformed into this:
```
class Person{

	constructor(fullName, favColor){
		this.name = fullName;
		this.favoriteColor = favColor;		
	}
	greet(){
		console.log("Hello " + fullName + " your fav color is " + favColor + ".");
	}
}

export default Person;
```




```
class MobileMenu{
	constructor(){
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu);			//Error
		this.menuIcon.click(this.toggleTheMenu.bind(this)); //Valid
	}

	toggleTheMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
	}
}
```

This code throws an error because this.menuIcon object doesn't have a property named menuContent, thus it cannot access this.menuContent of menuIcon.

Upon click event "this" no longer refers to MobileMenu object, now it refers to menuIcon 

That is why we need to bind the "this" keyword back to MobileMenu object, which has menuContent property

### no.12 lets.......... Reveal on scroll


1. Install waypoints \o/

npm install waypoints --save

2. Import waypoints into our JS file

Waypoints package doesn't have a main file so we have to be quite specific and manually type the path to a file we are interested in.

3. Make use of this nice package

```
createWaypoints(){
	this.itemsToReveal.each(function(){
		var currentItem = this;
		new Waypoint({
			element: currentItem,
			handler: function(){
				$(currentItem).addClass("reveal-item--is-visible");
			},
			offset:'90%'
		});
	});
}
//this.itemsToReveal = $('.feature-item');
```
For each item with a class of feature-item the code is going to run a Waypoints() class.

Handler function can receive a "direction" attribute like "down/up" 

```
handler: function(direction){
	if(direction == "down"){
		that.siteHeader.addClass("site-header--dark");
	}else{
		that.siteHeader.removeClass("site-header--dark");
	}
}
```

### no.13 ...and smoooth it out.

1. npm install jquery-smooth-scroll
2. select all the elements you want to scroll to

this.headerLinks = $('.primary-nav a');

3. apply smoothScroll() method to them

this.headerLinks.smoothScroll();

### no.14 lazy load

Because we dont want for our users to waste their data plan!

In other words, we want to load things when they are in the view, not to burst through all of them simply on entering the website.

1. npm install lazysizes --save

And.. ba dum tss.. most of the work is done 

To include lazysizes to our project we create a file named Vendor.js next to App.js

Vendor.js holds packages/plugins that do not require any configuration or setup, we just include them in our webflow and we are ready to make use of its functions.

Vendor JS files need to be included at the start of the page not like most JS files at the end.

In few words, we just add class of 'lazyload' to the img we want to lazyload, although we need to change the "src/srcset" att to a custom one like "data-srcset", as otherwise browsers seeing src attribute will download it in a blink of a blind cowboy eye (sic !) no matter if lazyload is ready or not.

class of lazyload transforms into class of lazyloaded upon scrolling, so we can make use of that in our CSS. 

personal note:
Quite a trick right ? .. yeah... kind of.. nope.. be more aware of the surroundings ! then you`ll notice things like this on your own.

### Browser support - IMPORTANT.. duh :D

### no.15 taking care of responsive images
Picturefill - allows older browsers to understand responsive images

1. npm install picturefill --save

Picturefill is another package that quallifies into Vendor.js

2. add picturefill into Vendor.js

Pufff... that's what I call higher level magic, as this is all ! Picfill will take care of our images now

### no.16 taking care of SVG sprites

We are going to use Gulp to create a PNG copy of SVG sprite, and only send the PNG ver to browsers that dont support SVG

1. npm install gulp-svg2png --save-dev

Make use of svg2png in our gulp tasks file for sprites

2. npm install gulp-modernizr --save-dev

3. create & configure modernizr.js in gulp task folder

4. add modernizr.js from gulp/tasks to gulpfile.js - this creates another instance of modernizr.js in app/temp/scripts/

5. add modernizr.js from app/temp/scripts/ to Vendor.js

6. We need to modify sprite.css & sprites.js, and thats it ( quite complicated actually )

### no.17 flexbox for older browsers

This on another hand is super easy, once we have modernizr in our tool-set, as we only need to add .flexbox preeceding the css classes that are using flexbox, and yeah thats it :)

### no.18 removing artifacts from our sprite file

To remove artifacts we just need to add some spacing between our icons:

```
var config = {
	shape:{
		spacing:{
			padding:1
		}
	},
	mode: {
```	

### no.19 preping for deplo_Y

The goal of this steps is to make our website as small as possible to load as fast as possible

1. Make new folder named 'dist'(distributable) in our root folder

app folder 

source code, multiple files, highly organized

dist folder

public copy, minimal files, compressed(img,css,js)

2. create new gulp task, 'build'
3. npm install gulp-imagemin --save-dev
4. npm install gulp-usemin --save-dev
5. npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
6. adding a special task for some extra files that might happen later on along the way  to be copied over to our dist folder
7. adding local preview with browsersync to our dist ver of website


### no.20 publishing our website on github server

1. first of all gitHub pages expects our 'dist' folder to be named 'docs'
2. second, we need to correct our paths for usemin in index.html and for our background images. 
3. push our site to github
4. go to repo settings -> github pages -> and for the source select master branch/docs folder

### no.21 git merge conflicts

1. Run the 'git pull' command often
2. Communicate with your team
3. Standarize white space settings in text-editor
4. Think of 'git merge' as a two-way street

> List by Brad Schiff
