import React, { useState, useEffect } from "react";
import axios from "axios";
import { SwCard } from "../../components/SWcard/card";
const ApiCalls = () => {
	const [users, setUsers] = useState([]);

	const getUserData = () => {
		axios.get("https://gorest.co.in/public/v2/users").then((res) => {
			console.log(res.data);
			//res && res.hasOwnProperty("data") && res.data
			console.log(res && res.hasOwnProperty("data"));
			if (res && res?.data && res?.data.length) {
				setUsers(res?.data);
			}
		});
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<>
			<div className="row">
				{users && users.length ? (
					<div className="row">
						{users.map((values) => {
							{
								console.log(values.title, values.body);
							}
							return (
								<div className="col-md-4">
									<SwCard
										id={values.id}
										title={`Name : ${values.name}`}
										body={`Email : ${values.email}`}
										getUserData={getUserData}
										setUsers={setUsers}
									/>
								</div>
							);
						})}
					</div>
				) : (
					<div class="spinner-grow" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				)}
			</div>
		</>
	);
};

export default ApiCalls;
