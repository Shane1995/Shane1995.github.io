const testArray = []
const playArray = []
let timeLeft = 10

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

const start = () => {
	const countDownTimer = setInterval(() => {
		timeLeft--
		if (timeLeft >= 0) {
			timer = document.querySelector(
				'#time'
			).innerHTML = `${timeLeft} sec`
		} else {
			clearInterval(clearTimeout)
		}
	}, 1000)
	generateRandomArray()
	buildGrid(testArray)

	console.log(testArray)
	event.target.innerHTML = 'No Pressure'
	event.target.setAttribute('disabled', true)
	const buttons = document.querySelectorAll('.number').forEach(button => {
		button.addEventListener('click', event => {
			let value = event.target.innerHTML
			const isCorrect = addToArray(value)
			if (isCorrect) {
				event.target.setAttribute('disabled', true)
				event.target.style =
					'padding: 0;background-color: green; color: lightgreen;'
				if (playArray.length === testArray.length) {
					clearInterval(countDownTimer)
					document.querySelector(
						'#time'
					).innerHTML = `${timeLeft} sec`
				}
			}
		})
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
