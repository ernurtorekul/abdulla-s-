export default function FormUI({ handleSubmit, type, valueData, handleChange, handleReset }) {
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				minLength="3"
				placeholder={type !== 'earnings' ? 'Expense name' : 'Earning name'}
				id="name"
				value={valueData.name}
				onChange={handleChange}
				required
			/>

			<input
				type="number"
				step="any"
				placeholder="€ price"
				id="price"
				value={valueData.price}
				onChange={handleChange}
				required
			/>
			
			<input
				type="date"
				id="date"
				value={valueData.date}
				onChange={handleChange}
				required
			/>

			<div>
				<button type="submit">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
					<span className="sr-only">Save</span>
				</button>

				<button type="reset" className="delete" onClick={handleReset}> Cancel</button>
			</div>
		</form>
	);
}