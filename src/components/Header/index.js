function Header() {
	return (
		<section id="tag">
			<div className="container">
				<nav class="navbar navbar-light bg-light">
					<form class="form-inline">
						<input
							class="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</nav>
				<nav class="navbar navbar-light bg-light">
					<div class="container-fluid">
						<button
							class="navbar-toggler"
							type="button"
							data-mdb-toggle="collapse"
							data-mdb-target="#navbarToggleExternalContent2"
							aria-controls="navbarToggleExternalContent2"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i class="fas fa-bars"></i>
						</button>
					</div>
				</nav>
				<div class="collapse" id="navbarToggleExternalContent2">
					<div class="bg-light shadow-3 p-4">
						<button class="btn btn-link btn-block border-bottom m-0">
							Link 1
						</button>
						<button class="btn btn-link btn-block border-bottom m-0">
							Link 2
						</button>
						<button class="btn btn-link btn-block m-0">Link 3</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
