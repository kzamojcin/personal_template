import $ from 'jquery';

class MobileMenu{
	constructor(){
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
	}
}

export default MobileMenu;


/*
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

This code throws an error because this.menuIcon object doesn't have a property named menuContent, thus it cannot access this.menuContent of menuIcon.

Upon click event "this" no longer refers to MobileMenu object, now it refers to menuIcon 

That is why we need to bind the "this" keyword back to MobileMenu object, which has menuContent property

*/