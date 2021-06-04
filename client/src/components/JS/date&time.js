export default class JS {
	static dateTime = () => {
		const date = new Date();

		var hours = date.getHours();
		var mint = String(date.getMinutes());

		var ampm = hours < 12 ? "AM" : "PM";
		hours = hours > 12 ? hours - 12 : hours;

		// pad with zeros
		// hours = ("0", hours).slice(-2);
		// mint = ("0", mint).slice(-2);

		// day
		var days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		var dayName = days[date.getDay()];

		var t = setTimeout(this.dateTime, 500);

		const output = dayName + "," + hours + ":" + mint + " " + ampm;
		return output;
	};
}
