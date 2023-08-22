const SearchField = ({
	labelName,
	type,
	search,
	product,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<div>
			<input
				type={type}
				id={search}
				name={product}
				className='bg-grey-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};
export default SearchField;
