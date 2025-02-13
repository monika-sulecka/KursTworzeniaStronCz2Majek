document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	// Add overlay to navigation
	function addShadow() {
		if (window.scrollY >= 180) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	// after 'click' close the navbar
	allNavItems.forEach(item => item.addEventListener('click', ()=> {
		navList.classList.remove('show')
	}))

	window.addEventListener('scroll', addShadow)
})
