const collection = document.querySelectorAll(".quotes-collection .quote-child")
const gallery = document.querySelectorAll(".gallery-collection .img-background")

const carousel = {
	state: {
		delay: 0,
		targets: [],
		current: 0
	},
	start(collection, delay = 6500) {
		this.state.delay = delay
		this.state.targets = Object.values(collection)
		return Object.create(this)
	},
	show() {
		let x = this.state.current
		let t = this.state.targets		
		let el = t[x]
		let l = t.length
		let next = x + 1 < l ? x + 1 : 0
		let prev = x - 1 < 0 ? l - 1 : x - 1

		if(t[prev].classList.contains("is-active")) t[prev].classList.toggle("is-active")
		setTimeout(() => el.classList.toggle("is-active"), 300)
		this.state.current = next
		setTimeout(() => this.show(), this.state.delay)
	}
}

const quotes = collection.length > 0 ? carousel.start(collection) : false
if(quotes) quotes.show()

if(gallery.length > 0) {
	const figures = Object.values(gallery)
	figures.forEach(el => {
		let src = el.dataset.src
		el.style.backgroundImage = `url(${src})`
	})
}

const about = document.querySelector('.has-circle')
if(about !== null) {
	const target = document.querySelector('.circle')
	const dimension = about.getBoundingClientRect()
	const diameter = Math.sqrt((dimension.width * dimension.width) + (dimension.height * dimension.height))
	target.style.width = `${diameter}px`
	target.style.height = `${diameter}px`
}