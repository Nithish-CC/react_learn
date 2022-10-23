import React, { Fragment, useState, useRef } from "react";

const Login = ({ value, desc }) => {
	const [mobInput, setMobInput] = useState("97917123131");
	const numberInput = useRef();
	setTimeout(() => {
		console.log(numberInput.current.value, "refff");
	}, 3000);
	return (
		<Fragment>
			<div className="row">
				<div className="col-md-6">
					<h4>Login</h4>
					<p>
						or <span style={{ color: "orange" }}>create an account</span>
					</p>
				</div>
				<div className="col-md-6">
					<img
						src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
						alt="swiggy login"
						style={{ width: "100px", height: "100px" }}
					/>
				</div>
			</div>
			<div className="mt-2">
				<label class="form-label">Name</label>
				<input
					type="text"
					class="form-control"
					ref={numberInput}
					value={mobInput}
					onChange={(event) => {
						console.log(event.target.value);
						setMobInput(event.target.value);
					}}
					placeholder="phone number"
				/>

				<button className="btn btn-warning w-100 mt-3 findFood">Login</button>
			</div>
		</Fragment>
	);
};

export default Login;
