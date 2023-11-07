//Scratchpaper for Supression example for Amy


<h3> Expected Supression and Results: </h3>
					<h4>For "Program1"</h4>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Group Number</th>
								<th>Group Name</th>
								<th colSpan={4}></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>firstgen</td>
								<td colSpan={4}></td>
							</tr>
							<tr>
								<td>1</td>
								<td>Variable:</td>
								<td>0</td>
								<td>1</td>
								<td colSpan={2}></td>
							</tr>
							<tr>
								<td>1</td>
								<td>Supression:</td>
								<td>OK!</td>
								<td>OK!</td>
								<td colSpan={2}></td>
							</tr>
							<tr>
								<td>2</td>
								<td>race</td>
								<td colSpan={4}></td>
							</tr>
							<tr>
								<td>2</td>
								<td>Variable:</td>
								<td>white</td>
								<td>black</td>
								<td>asian</td>
								<td>other</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Supression:</td>
								<td>OK!</td>
								<td>OK!</td>
								<td>Cell size too small, likely surpressed!</td>
								<td>Cell size too small, likely surpressed!</td>
							</tr>
						</tbody>
					</Table>
					<h3>Suggestions</h3>
					<p>Because several groups in Porgram1 will be supressed due to small cell sizes, we recomend considering combining those groups in your final submission.</p>