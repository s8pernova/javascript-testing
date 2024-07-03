class Book {
	constructor(title, author, price, rating) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.rating = rating;
	}

	getDetails() {
		return `This book is called "${title}" by FAMOUS writer ${author}. That's why the book is so expensive. It's friggin' $${price} a copy!!! But at least the rating is ${rating}/5 stars.`;
	}

	applyDiscount(percentage) {
		this.price = this.price - this.price * (percentage / 100);
	}
}

const book = Book("How to eat an egg", "Aidan H.", 5000, 4);
console.log();
