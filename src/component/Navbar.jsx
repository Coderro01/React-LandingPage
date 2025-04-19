const Navbar = function () {
	return (
		<nav className="container">
			<div className="navbar">
				<img
					src="/src/image/logo.png"
					alt="logo"
				/>
				<ul>
					<li href="#">Menu</li>
					<li href="#">Location</li>
					<li href="#">About</li>
					<li href="#">Contact</li>
				</ul>
				<button>Login</button>
			</div>
		</nav>
	);
};

export default Navbar;
