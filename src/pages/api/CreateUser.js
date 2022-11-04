import axios from "axios";
import { useState } from "react";
import { token, baseUrl } from "../../constants/app-constants";
const CreateUser = () => {
	const [userDetails, setUserDetails] = useState({ name: "", gender: "", email: "", status: "" });
	const createNewUser = () => {
		console.log(token);
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		if (userDetails.name != "" && userDetails.email != "") {
			axios.post(`${baseUrl}users`, userDetails);
		} else {
			alert("please fill all details");
		}
	};

	console.log(userDetails);
	return (
		<>
			<div class="mb-3 container">
				{/* Name */}
				<label for="exampleFormControlInput1" class="form-label">
					Name
				</label>
				<input
					type="text"
					class="form-control"
					id="exampleFormControlInput1"
					name="name"
					placeholder="name"
					onChange={(e) => {
						setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
					}}
				/>

				{/* Email */}
				<label for="exampleFormControlInput1" class="form-label">
					Email address
				</label>
				<input
					type="email"
					class="form-control"
					id="exampleFormControlInput1"
					name="email"
					placeholder="name@example.com"
					onChange={(e) => {
						setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
					}}
				/>

				{/* Gender */}
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="gender"
						id="exampleRadios1"
						value="male"
						onChange={(e) => {
							setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
						}}
					/>
					<label class="form-check-label" for="exampleRadios1">
						male
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="gender"
						id="female"
						value="female"
						onChange={(e) => {
							setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
						}}
					/>
					<label class="form-check-label" for="exampleRadios2">
						female
					</label>
				</div>

				{/* status */}
				<select
					class="form-select"
					aria-label="Default select example"
					name="status"
					onChange={(e) => {
						setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
					}}
				>
					<option value="active">Active</option>
					<option value="inactive">InActive</option>
				</select>

				<button
					className="btn btn-primary mt-4"
					onClick={() => {
						createNewUser();
					}}
				>
					Submit
				</button>
			</div>
		</>
	);
};

export default CreateUser;
