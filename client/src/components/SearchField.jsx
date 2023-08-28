const SearchField = ({
	labelName,
	type,
	name,
	placeholder,
	value,
	handleChange,
}) => {
	return (
		<div>
			<input
				type={type}
				id={name}
				name={name}
				className='bg-grey-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};
export default SearchField;
