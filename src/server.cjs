const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
	.connect(
		"mongodb+srv://talerzyk:kbhp8Ve7@cluster0.ldazmux.mongodb.net/droga_ksiazka",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("Succes connect to Database"))
	.catch((err) => console.error("Could not connect to Database", err));

const ReviewSchema = new mongoose.Schema({
	ocena: {
		type: Number,
	},
	recenzja: {
		type: String,
	},
	nazwa_uzytkownika: {
		type: String,
	},
	data_dodania: {
		type: Date,
	},
});

const BookSchema = new mongoose.Schema({
	nazwa: {
		type: String,
	},
	autor: {
		type: String,
	},
	wydawnictwo: {
		type: String,
	},
	seria: {
		type: String,
	},
	gatunek: {
		type: String,
	},
	ilosc_stron: {
		type: Number,
	},
	format: {
		type: String,
	},
	rok_wydania: {
		type: Number,
	},
	nazwa_pliku: {
		type: String,
	},
	opis: {
		type: String,
	},
	opinie: [ReviewSchema],
});

const Books = mongoose.model("books", BookSchema);

app.get(`/api/ksiazka/:nazwa_pliku`, async (req, res) => {
	try {
		const book = await Books.findOne({ nazwa_pliku: req.params.nazwa_pliku });
		if (book) {
			res.json(book);
		} else {
			res.status(404).send("Book not found");
		}
	} catch (err) {
		res.status(500).send(err);
	}
});

app.get("/api/ksiazki", async (req, res) => {
	try {
		const books = await Books.find();
		res.json(books);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.post(`/api/ksiazka/:nazwa_pliku/dodaj-recenzje`, async (req, res) => {
	try {
		const { ocena, recenzja, nazwa_uzytkownika } = req.body;
		const book = await Books.findOneAndUpdate(
			{ nazwa_pliku: req.params.nazwa_pliku },
			{
				$push: {
					opinie: {
						ocena,
						recenzja,
						nazwa_uzytkownika,
						data_dodania: new Date(),
					},
				},
			},
			{ new: true }
		);
		res.json(book);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.listen(PORT, () => {
	console.log("Server running on 127.0.0.1:${PORT}");
});
