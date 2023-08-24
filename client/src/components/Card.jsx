const Card = ({ _id, name, price, category }) => {
	return (
		<div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'><p>card</p>
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md"></div>
    </div>
	);
};
export default Card;
