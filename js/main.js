const testArray = []
const playArray = []
let timeLeft = 10
let numbersRemaining = 12

const start = () => {
	const countDownTimer = setInterval(() => {
		timeLeft = timeLeft - 0.01

		let time = timeLeft.toFixed(2)

		if (timeLeft >= 0) {
			timer = document.querySelector('#time').innerHTML = `${time} sec`
		} else {
			timer = document.querySelector('#time').innerHTML = `00.00 sec`
			disableButtons()
			clearInterval(clearTimeout)
		}
	}, 10)
	generateRandomArray()
	buildGrid(testArray)
	event.target.innerHTML = 'No Pressure'
	event.target.setAttribute('disabled', true)
	if (timeLeft >= 0) {
		const buttons = document.querySelectorAll('.number').forEach(button => {
			button.addEventListener('click', event => {
				let value = event.target.innerHTML
				const isCorrect = addToArray(value)
				if (isCorrect) {
					numbersRemaining--
					document.getElementById(
						'numbers-remaining'
					).innerHTML = numbersRemaining
					event.target.setAttribute('disabled', true)
					event.target.style =
						'padding: 0;background-color: green; color: lightgreen;'
					if (playArray.length === testArray.length) {
						clearInterval(countDownTimer)
						let time = timeLeft
						time.toFixed(2)
						document.querySelector(
							'#time'
						).innerHTML = `${time} sec`
					}
				}
			})
		})
	} else {
		clearInterval(countDownTimer)
	}
}

const disableButtons = () => {
	const buttons = document.querySelectorAll('.number').forEach(button => {
		button.setAttribute('disabled', true)
		button.style = 'background-color: red'
	})
}

const addToArray = value => {
	if (playArray.includes(value)) {
		console.log('It does')
		return false
	} else if (playArray.length == value) {
		playArray.push(value)
		console.log(playArray)
		return true
	}
}

const generateRandomArray = () => {
	value = Math.floor(Math.random() * 12)

	if (testArray.length == 12) {
		return testArray
	} else if (testArray.includes(value)) {
		generateRandomArray()
	} else {
		testArray.push(value)
		generateRandomArray()
	}
}
const buildGrid = testArray => {
	const buttons = document
		.querySelectorAll('.number')
		.forEach((button, index) => {
			button.innerHTML = testArray[index]
		})
}

const reset = () => {
	location.reload()
}
