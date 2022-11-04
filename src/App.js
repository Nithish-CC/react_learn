import { Button, Offcanvas } from "bootstrap";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";

function App() {
	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => console.log(response.json()));
	}, []);

	const { cityarea } = useParams();
	console.log(cityarea);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [loginClicked, setLoginClicked] = useState(false);
	const [signUpClicked, setSignUpClicked] = useState(false);

	const titleChange = ["Hungry", "Late night at office ?", "Gave a good meal"];

	//useEffect

	// useEffect(() => {
	// 	console.log("Call at each time");
	// });

	// useEffect(() => {
	// 	console.log("Hi , Iam Call at only one time");
	// }, []);

	const [counter, setCounter] = useState(0);

	//Two way binding with props

	useEffect(() => {
		console.log(counter, "::::: value");
		if (titleChange && titleChange.length - 1 > counter) {
			setTimeout(() => {
				setCounter(counter + 1);
			}, 3000);
			console.log(counter, "*********** settimeout value");
		} else {
			setTimeout(() => {
				setCounter(0);
			}, 3000);
		}
	}, [counter]);

	return (
		<div className="row container-fluid">
			<div className="col-md-6">
				<div className="row mt-5">
					<div className="col-md-4">
						<img
							src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1280px-Swiggy_logo.svg.png"
							alt="swiggy_logo"
							style={{ width: "100%", height: "60px" }}
						/>
					</div>
					<div className="col-md-8 text-align-right" style={{ alignSelf: "center" }}>
						{/* <button type="button" className="btn btn-warning ms-2">
							Sign up
						</button> */}
						{/* <Button variant="primary" onClick={handleShow} className="me-2">
							SignUp
						</Button>
						<Button variant="primary" onClick={handleShow} className="me-2">
							Login
						</Button> */}

						{/* <Offcanvas show={show} onHide={handleClose}>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Offcanvas</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
							</Offcanvas.Body>
						</Offcanvas> */}

						<button
							class="btn btn-primary"
							type="button"
							onClick={() => {
								setCounter(counter + 1);
							}}
						>
							counter
						</button>

						<button
							class="btn btn-primary"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasRight"
							aria-controls="offcanvasRight"
							onClick={() => {
								setLoginClicked(true);
							}}
						>
							Login
						</button>

						<button
							class="btn btn-warning"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasRight"
							aria-controls="offcanvasRight"
							onClick={() => setSignUpClicked(true)}
						>
							Sign Up
						</button>

						<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
							<div class="offcanvas-header">
								<h5 class="offcanvas-title" id="offcanvasRightLabel">
									Offcanvas right
								</h5>
								<button
									type="button"
									class="btn-close"
									onClick={() => {
										setSignUpClicked(false);
										setLoginClicked(false);
									}}
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div class="offcanvas-body">
								{loginClicked && (
									<Login
										setSignUpClicked={setSignUpClicked}
										setLoginClicked={setLoginClicked}
										value={"From Canvas Login"}
										desc="Know where your order is at all times, from the restaurant to your doorstep"
									/>
								)}

								{signUpClicked && (
									<Login setLoginClicked={setLoginClicked} setSignUpClicked={setSignUpClicked} value={"From Canvas Signup"} desc="" />
								)}
							</div>
						</div>
					</div>
				</div>

				{/* open Canvas */}

				<div className="mt-5">
					{titleChange &&
						titleChange.length &&
						titleChange.map((values, index) => {
							return (
								index === counter && (
									<h1>
										{values} {cityarea}
									</h1>
								)
							);
						})}

					<h4 className="h2Heading">Order food from favourite restaurants near you.</h4>
					<div className="input-group input-group-lg mt-5">
						<input type="text" className="form-control" placeholder="Enter your delivery location" />
						<button className="btn btn-light location_btn" type="button">
							* Locate Me
						</button>
						<button className="btn findFood" type="button">
							Button
						</button>
					</div>
					<div className="mt-5">
						<h6>POPULAR CITIES IN INDIA</h6>
					</div>
					<div className="mt-2">
						<span>
							<a className="odd" href="#">
								Ahmedabad
							</a>
						</span>
						<span>
							<a className="even" href="#">
								Bangalore
							</a>
						</span>
						<span>
							<a className="odd" href="#">
								Chennai
							</a>
						</span>
					</div>
				</div>
			</div>
			<div
				className="col-md-6 landingPage"
				style={{ backgroundImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" }}
			></div>
		</div>
	);
}

export default App;
