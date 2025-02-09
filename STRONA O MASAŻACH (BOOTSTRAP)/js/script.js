document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	// Add overlay to navigation
	function addShadow() {
		if (window.scrollY >= 180) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	window.addEventListener('scroll', addShadow)
})
