const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	const newArray = [];
	for(let i = 0, l = arr.length; i < l; i++) {
		let value = arr[i];
		switch (value) {
			case '--double-next':
				if(l > i + 1) newArray.push(arr[i + 1]);
				break;
			case '--double-prev':
				if(newArray.length) newArray.push(newArray[newArray.length - 1]);
				break;
			case '--discard-next':
				if(l > i + 1) {
					++i;
					if('--double-prev' === arr[i + 1] || '--discard-prev' === arr[i + 1]) ++i;
				}
				break;
			case '--discard-prev':
				if(newArray.length) newArray.pop();
				break;
			default:
				newArray.push(value);
		}
	}

	return newArray;
};
