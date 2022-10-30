const menuIcon = document.querySelector('.menu__icon')
const menuLink = document.querySelectorAll('.header__list-item')

const openMenu = () => {
	document.body.classList.toggle('open-menu')
}

menuIcon.addEventListener('click', openMenu)
const body = document.body

const closeMenu = () => {
	body.classList.remove('open-menu')
}

menuLink.forEach(el => {

	el.addEventListener('click', closeMenu)
})

new Swiper('.review__slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});