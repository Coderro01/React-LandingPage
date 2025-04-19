const Superman = function () {
	return (
		<main className="superman container">
			{/*here container is reuse/common class for navbar & superman for display*/}
			<div className="superman-container">
				<h1>YOUR FEET DESERVE THE BEST</h1>
				<p>
					YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
					SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
					SHOES.
				</p>

				{/* BUTTON */}
				<div className="superman-btn">
					<button>Shop Now</button>
					<button className="second-btn">Category</button>
				</div>

				<div className="shopping">
					<p>Also Available On</p>
				</div>

				{/* IMAGE */}
				<div className="superman-icon">
					<img
						src="/src/image/flipkart.png"
						alt="flipkart"
					/>
					<img
						src="/src/image/amazon.png"
						alt="amazon"
					/>
				</div>
			</div>
			<div className="superman-image">
				<img
					src={'/src/image/sueprman-image.png'}
					alt="Shoe"
				/>
			</div>
		</main>
	);
};

export default Superman;
