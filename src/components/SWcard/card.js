import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, token } from "../../constants/app-constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SwCard = ({ id, title, body, getUserData, setUsers }) => {
	const navigate = useNavigate();
	const deleteUser = (userId) => {
		console.log(token);
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		axios
			.delete(`${baseUrl}users/${userId}`)
			.then((res) => {
				if (res) {
					toast.success("User Deleted Successfully");
					setUsers([]); // to make screen loading
					setTimeout(() => {
						getUserData();
					}, 3000);
				}
			})
			.catch((e) => {
				toast.error("User Deletion Failed");
			});
	};
	return (
		<div class="card" style={{ width: "18rem" }}>
			<div class="card-body">
				<p>user id : {id}</p>
				<h5 class="card-title">
					{title} <br />
					{body}
				</h5>
				<button
					className="btn btn-primary"
					onClick={() => {
						navigate(`/api/update/${id}`);
					}}
				>
					Edit
				</button>
				<button
					className="btn btn-danger"
					onClick={() => {
						deleteUser(id);
					}}
				>
					Delete
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
		</div>
	);
};
