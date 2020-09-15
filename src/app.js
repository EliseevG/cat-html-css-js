 // var circles = document.getElementsByClassName('circle');
var items = document.getElementsByClassName('item');
var active = document.getElementsByClassName('active')
var description = [`<p>Печень утки разварная с артишоками.</p> `, ` <p>Головы щучьи с чесноком да свежайшая сёмгушка.</p> `,` <p>Филе из цыплят с трюфелями в бульоне..</p> `];

for(i=0;i<items.length;i++){







items[i].onmouseover = function() {
if(!this.classList.contains("active")){
	this.classList.add("hover-bg")
	this.children[0].classList.add("hover-border")
	this.children[0].children[3].classList.add("hover-bg")
} 
else {
	this.classList.add("active-hover-border")
	this.children[0].children[3].classList.add("active-hover-bg")
	this.classList.remove("hover-border")
	this.children[0].children[3].classList.remove("hover-bg")
}
}



items[i].onmouseout = function() {
if(!this.classList.contains("active")){
	this.classList.remove("hover-border")
	this.children[0].children[3].classList.remove("hover-bg")
}
else {

	this.classList.remove("active-hover-border")
	this.children[0].children[3].classList.remove("active-hover-bg")
}
}




items[i].onclick = function() {
	
	
	if(this.classList.contains("active")){
		
		this.classList.remove("active")

	 	this.classList.remove("active-hover-border")
		this.children[0].children[3].classList.remove("active-hover-bg")
		this.parentElement.children[1].style.display = "block"
		this.parentElement.children[2].style.display = "none"
	 }else  {
	 	this.classList.add("active")
	 // 	this.classList.add("active-hover-border")
		// this.children[3].classList.add("active-hover-bg")
		this.classList.remove("hover-border")
		this.children[0].children[3].classList.remove("hover-bg")
		this.parentElement.children[2].style.display = "block"
		this.parentElement.children[1].style.display = "none"

	 }
	 
	

}
}




















