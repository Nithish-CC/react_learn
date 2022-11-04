import React from "react";

export const SwCard = ({ id, title, body }) => {
	return (
		<div class="card" style={{ width: "18rem" }}>
			<div class="card-body">
				<p>user id : {id}</p>
				<h5 class="card-title">
					{title} <br />
					{body}
				</h5>
			</div>
		</div>
	);
};
