import $ from 'jquery';
class Modal {
	constructor(){
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events(){
		// open modal click
		this.openModalButton.click(this.openModal.bind(this));
		// x close click
		this.closeModalButton.click(this.closeModal.bind(this));
		//escape key
		$(document).keyup(this.keyPressHandler.bind(this));

	}
	openModal(){
		this.modal.addClass('modal--is-visible');
		return false;
	}

	closeModal(){
		this.modal.removeClass('modal--is-visible');		
	}
	keyPressHandler(e){
		if (e.keyCode == 27){
			this.closeModal();
		}
	}
}

export default Modal;