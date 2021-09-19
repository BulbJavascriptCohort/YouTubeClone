function Header() {
	return (
		<section id="tag">
			<div className="container">
				<nav className="navbar navbar-light bg-light">
					<form className="form-inline">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</nav>
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-mdb-toggle="collapse"
							data-mdb-target="#navbarToggleExternalContent2"
							aria-controls="navbarToggleExternalContent2"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
				</nav>
				<div className="collapse" id="navbarToggleExternalContent2">
					<div className="bg-light shadow-3 p-4">
						<button className="btn btn-link btn-block border-bottom m-0">
							Link 1
						</button>
						<button className="btn btn-link btn-block border-bottom m-0">
							Link 2
						</button>
						<button className="btn btn-link btn-block m-0">Link 3</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
