document.querySelector('.burger_768').onclick=function(){
	document.querySelector('.change').classList.toggle('change_768');
	console.log('1');
};
let polis=document.querySelector('.polis');
let institut=document.querySelector('.institut');
polis.onclick=function(){
	polis.classList.add('selected');
	institut.classList.remove('selected')
};
institut.onclick=function(){
	institut.classList.add('selected');
	polis.classList.remove('selected')
};