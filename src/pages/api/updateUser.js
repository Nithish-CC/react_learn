import React from "react";
import { useParams } from "react-router-dom";
import { baseUrl, token } from "../../constants/app-constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateUser = () => {
	const { userId } = useParams();
	console.log(userId);
	const [userDetails, setUserDetails] = React.useState({ name: "", gender: "", email: "", status: "" });

	React.useEffect(() => {
		if (userId != "") {
			axios.get(`${baseUrl}users/${userId}`).then((res) => {
				console.log(res.data);
				setUserDetails(res.data);
			});
		}
	}, [userId]);

	//Create User

	const updateUser = () => {
		console.log(token);
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		if (userDetails.name != "" && userDetails.email != "") {
			//Delete is used to delete specific key from object
			delete userDetails.gender;
			axios
				.put(`${baseUrl}users/${userId}`, {})
				.then((res) => {
					if (res?.data && res?.data?.id != "") {
						toast.success("User Updated Successfully");
					}
				})
				.catch((e) => {
					toast.error("User Updated Failed");
				});
		} else {
			alert("please fill all details");
		}
	};

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
					value={userDetails.name}
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
					value={userDetails.email}
					placeholder="name@example.com"
					onChange={(e) => {
						setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
					}}
				/>

				{/* status */}
				<select
					class="form-select"
					aria-label="Default select example"
					name="status"
					value={userDetails.status}
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
						updateUser();
					}}
				>
					update user
				</button>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default UpdateUser;
