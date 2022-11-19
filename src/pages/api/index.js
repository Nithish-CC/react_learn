import React, { useState, useEffect } from "react";
import axios from "axios";
import { SwCard } from "../../components/SWcard/card";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withDraw } from "../../Redux/Actions/counterAction";
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

	const [typedValue, setTypedValue] = useState(0);

	const dispatch = useDispatch();

	const callIncreament = () => {
		dispatch(deposit(typedValue));
	};

	const callDecreament = () => {
		dispatch(withDraw(typedValue));
	};

	const userAmountData = useSelector((state) => {
		return state.userBalance.userAmount;
	});

	const userTotalTransactions = useSelector((state) => state.userBalance.userTotalTransactions);

	console.log(userAmountData);

	useEffect(() => {
		console.log(userAmountData);
	}, [userAmountData]);

	return (
		<>
			<div className="row">
				<div>
					<hr />
					<input
						value={typedValue}
						type="text"
						onChange={(e) => {
							setTypedValue(Number(e.target.value));
						}}
					/>
					<Button onClick={() => callIncreament()}>+</Button>
					<Button onClick={() => callDecreament()}>-</Button>
					<hr />

					<button type="button" class="btn btn-primary position-relative">
						Balance Amount
						<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{userAmountData}
							<span class="visually-hidden">unread messages</span>
						</span>
					</button>

					{userTotalTransactions && userTotalTransactions > 0 ? (
						<>
							<h3>Maxmium Transactions Limit 100</h3>
							<div class="progress">
								<div
									class="progress-bar"
									role="progressbar"
									aria-label="Example with label"
									style={{ width: "25%" }}
									aria-valuenow={userTotalTransactions}
									aria-valuemin="0"
									aria-valuemax="100"
								>
									Transactions Remaining {100 - userTotalTransactions}
								</div>
							</div>
						</>
					) : null}
				</div>

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
