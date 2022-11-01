const nameInput = document.querySelector('.cardholder')
const cardUser = document.querySelector('.card-user')
const cardNumberInput = document.querySelector('.user-card-number')
const cardNumber = document.querySelector('.card-number')
const cardCvc = document.querySelector('.cvc')
const cvcInput = document.querySelector('.cvc-input')
const monthInput = document.querySelector('.expdateMM')
const monthCard = document.querySelector('.card-date__month')
const yearInput = document.querySelector('.expdateYY')
const yearCard = document.querySelector('.card-date__year')
const projectConfirmed = document.querySelector('.project__confirmed')

const confirmButton = document.querySelector('.confirm-button')

const error = document.querySelector('.error')

const changeCardName = () => {
	cardUser.innerHTML = nameInput.value
	if (nameInput.value === '') {
		cardUser.innerHTML = 'Jan Kowalski'
	}
}

const changeCvcNumber = () => {
	cardCvc.innerHTML = cvcInput.value
	if (cvcInput.value === '') {
		cardCvc.innerHTML = '000'
	}
}

const changeCardNumber = () => {
	cardNumber.innerHTML = cardNumberInput.value.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '')
	if (cardNumberInput.value === '') {
		cardNumber.innerHTML = '0000 0000 0000 0000'
	}
}

const changeCardMonth = () => {
	monthCard.innerHTML = monthInput.value
	if (monthInput.value === '') {
		monthCard.innerHTML = '00'
	}
}
const changeCardYear = () => {
	yearCard.innerHTML = yearInput.value
	if (yearInput.value === '') {
		yearCard.innerHTML = '00'
	}
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			error.classList.add('error-active')
			el.classList.add('error-input')
		} else {
			error.classList.remove('error-active')
			clearError(input)
			checkErrors()
		}
	})
}

const clearError = input => {
	input.forEach(el => {
		if (el.value !== '') {
			el.classList.remove('error-input')
		}
	})
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('input')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error-input')) {
			errorCount++
			console.log(errorCount)
		}
	})

	if (errorCount === 0) {
		projectConfirmed.classList.add('confirmed-visible')
	}
}
addEventListener('keyup', changeCardName)
addEventListener('keyup', changeCvcNumber)
addEventListener('keyup', changeCardNumber)
addEventListener('keyup', changeCardMonth)
addEventListener('keyup', changeCardYear)

confirmButton.addEventListener('click', e => {
	e.preventDefault()
	checkForm([nameInput, cardNumberInput, monthInput, yearInput, cvcInput])
})
