document.querySelector('.burger_768').onclick=function(){
	document.querySelector('.change').classList.toggle('change_768');
	console.log('1');
};
let polis=document.querySelector('.polis');
let institut=document.querySelector('.institut');
let polis_selected=document.querySelector('.polis_selected');
let institut_selected=document.querySelector('.institut_selected');
polis.onclick=function(){
	polis.classList.add('selected');
	institut.classList.remove('selected')
	institut_selected.classList.add('disabled');
	polis_selected.classList.remove('disabled');
};
institut.onclick=function(){
	institut.classList.add('selected');
	polis.classList.remove('selected');
	polis_selected.classList.add('disabled');
	institut_selected.classList.remove('disabled');

};
