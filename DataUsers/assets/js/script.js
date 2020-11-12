import modalControl from './modal.js';

const modal = modalControl();

let $open = document.querySelector('.add-user');
let $close = document.querySelectorAll('.close');

$open.addEventListener('click', function(){
	modal.toggle('open');
});

for(let $btn of $close){
	$btn.addEventListener('click', function(){
		modal.toggle('close');
	});
}