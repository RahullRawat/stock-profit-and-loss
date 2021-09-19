// take input from user about price of one stock 10*10 = 100

// then take input about how much quantity user has buy

// take today price 20*10= 200
// {(gain/CP) × 100} %

// how much profit or loss in % and absolue value
const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const output = document.querySelector("#output-result");

showBtn.addEventListener("click", totalInitialPrice);

function totalInitialPrice() {
	const totalPrice = initialPrice.value * quantity.value;
	const todayTotalPrice = currentPrice.value * quantity.value;
	const absolueProfitOrLoss = todayTotalPrice - totalPrice;
	const percentageProfitOrLoss = (absolueProfitOrLoss / totalPrice) * 100;

	if (
		initialPrice.value === "" ||
		quantity.value === "" ||
		currentPrice.value === ""
	) {
		output.innerText = "Please fill all the fields";
	} else if (initialPrice.value === currentPrice.value) {
		output.innerText = "NO GAIN";
	} else {
		if (todayTotalPrice > totalPrice) {
			output.innerText =
				"Hey! the profit is Rs. " +
				absolueProfitOrLoss +
				" and the profit percentage is " +
				percentageProfitOrLoss.toFixed(2) +
				"% 😊";
			output.style.color = "green";
		} else {
			output.innerText =
				"Hey! the loss is Rs. " +
				absolueProfitOrLoss +
				" and the loss percentage is " +
				percentageProfitOrLoss.toFixed(2) +
				"% ☹️";
			output.style.color = "red";
		}
	}
}
