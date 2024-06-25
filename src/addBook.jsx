import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
	const [formData, setFormData] = useState({
		nazwa: "",
		autor: "",
		wydawnictwo: "",
		seria: "",
		gatunek: "",
		ilosc_stron: "",
		format: "",
		rok_wydania: "",
		nazwa_pliku: "",
		opis: "",
		o_autorze: "",
		ocena: "",
		recenzja: "",
		nazwa_uzytkownika: "",
		data_dodania: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`/api/ksiazka/${formData.nazwa_pliku}/dodaj-recenzje`,
				{
					ocena: formData.ocena,
					recenzja: formData.recenzja,
					nazwa_uzytkownika: formData.nazwa_uzytkownika,
				}
			);
			console.log("Book added successfully", response.data);
		} catch (error) {
			console.error("There was an error adding the book!", error);
		}
	};

	return (
		<div className="w-4/6 mx-auto mt-12 p-6 bg-orange-100 shadow-md rounded-md">
			<span>Dodaj książkę: </span>
			<form id="bookForm" onSubmit={handleSubmit} className="space-y-4">
				<div className="mt-10">
					<label
						htmlFor="nazwa"
						className="block text-sm font-medium text-gray-700"
					>
						Nazwa:
					</label>
					<input
						type="text"
						id="nazwa"
						name="nazwa"
						value={formData.nazwa}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="autor"
						className="block text-sm font-medium text-gray-700"
					>
						Autor:
					</label>
					<input
						type="text"
						id="autor"
						name="autor"
						value={formData.autor}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="wydawnictwo"
						className="block text-sm font-medium text-gray-700"
					>
						Wydawnictwo:
					</label>
					<input
						type="text"
						id="wydawnictwo"
						name="wydawnictwo"
						value={formData.wydawnictwo}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="seria"
						className="block text-sm font-medium text-gray-700"
					>
						Seria:
					</label>
					<input
						type="text"
						id="seria"
						name="seria"
						value={formData.seria}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="gatunek"
						className="block text-sm font-medium text-gray-700"
					>
						Gatunek:
					</label>
					<input
						type="text"
						id="gatunek"
						name="gatunek"
						value={formData.gatunek}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="ilosc_stron"
						className="block text-sm font-medium text-gray-700"
					>
						Ilość stron:
					</label>
					<input
						type="number"
						id="ilosc_stron"
						name="ilosc_stron"
						value={formData.ilosc_stron}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="format"
						className="block text-sm font-medium text-gray-700"
					>
						Format:
					</label>
					<input
						type="text"
						id="format"
						name="format"
						value={formData.format}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="rok_wydania"
						className="block text-sm font-medium text-gray-700"
					>
						Rok wydania:
					</label>
					<input
						type="number"
						id="rok_wydania"
						name="rok_wydania"
						value={formData.rok_wydania}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="nazwa_pliku"
						className="block text-sm font-medium text-gray-700"
					>
						Nazwa pliku:
					</label>
					<input
						type="text"
						id="nazwa_pliku"
						name="nazwa_pliku"
						value={formData.nazwa_pliku}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="opis"
						className="block text-sm font-medium text-gray-700"
					>
						Opis:
					</label>
					<textarea
						id="opis"
						name="opis"
						rows="4"
						value={formData.opis}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2  resize-none border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					></textarea>
				</div>

				<div>
					<label
						htmlFor="o_autorze"
						className="block text-sm font-medium text-gray-700"
					>
						O autorze:
					</label>
					<textarea
						id="o_autorze"
						name="o_autorze"
						rows="4"
						value={formData.o_autorze}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 resize-none border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					></textarea>
				</div>

				<div>
					<label
						htmlFor="ocena"
						className="block text-sm font-medium text-gray-700"
					>
						Ocena:
					</label>
					<input
						type="number"
						id="ocena"
						min="0"
						max="5"
						name="ocena"
						value={formData.ocena}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="recenzja"
						className="block text-sm font-medium text-gray-700"
					>
						Recenzja:
					</label>
					<textarea
						id="recenzja"
						name="recenzja"
						rows="4"
						value={formData.recenzja}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 resize-none border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					></textarea>
				</div>

				<div>
					<label
						htmlFor="nazwa_uzytkownika"
						className="block text-sm font-medium text-gray-700"
					>
						Nazwa użytkownika:
					</label>
					<input
						type="text"
						id="nazwa_uzytkownika"
						name="nazwa_uzytkownika"
						value={formData.nazwa_uzytkownika}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="data_dodania"
						className="block text-sm font-medium text-gray-700"
					>
						Data dodania komentarza:
					</label>
					<input
						type="date"
						id="data_dodania"
						name="data_dodania"
						value={formData.data_dodania}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="plik"
						className="block text-sm font-medium text-gray-700"
					>
						Wybierz plik:
					</label>
					<input
						type="file"
						id="plik"
						name="plik"
						accept=".pdf,.doc,.docx,.txt"
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
					<p className="mt-2 text-sm text-gray-500">
						Akceptowane formaty plików: .eub, .mobi, .pdf
					</p>
				</div>

				<button
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Dodaj książkę
				</button>
			</form>
		</div>
	);
};

export default AddBook;
