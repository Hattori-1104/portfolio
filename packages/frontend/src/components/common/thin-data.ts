export class ThinDate {
	public readonly year: number
	public readonly month: number
	public readonly day: number
	public readonly _tag = "ThinDate"

	constructor(year: number, month: number, day: number) {
		this.year = year
		this.month = month
		this.day = day
	}

	toString() {
		return `${this.year}/${this.month}/${this.day}`
	}
}
