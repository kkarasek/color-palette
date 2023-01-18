import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableRowComponent from '../TableRow';
import { Typography } from '@mui/material';

const TableComponent = ({ data, toggleModal, setModalParam, error }) => {
	return (
		<TableContainer sx={{ width: '800px', boxShadow: 1 }} component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="table">
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Year</TableCell>
					</TableRow>
				</TableHead>
				{error ? (
					<TableBody>
						<TableRow>
							<TableCell>
								<Typography sx={{ color: 'red' }}>{error}</Typography>
							</TableCell>
						</TableRow>
					</TableBody>
				) : (
					<TableBody>
						{Array.isArray(data) ? (
							data.map((e) => (
								<TableRowComponent
									key={e.id}
									data={e}
									toggleModal={toggleModal}
									setModalParam={setModalParam}
								/>
							))
						) : (
							<TableRowComponent
								data={data}
								toggleModal={toggleModal}
								setModalParam={setModalParam}
							/>
						)}
					</TableBody>
				)}
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
