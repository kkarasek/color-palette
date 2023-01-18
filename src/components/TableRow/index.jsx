import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const TableRowComponent = ({ data, toggleModal, setModalParam }) => {
	return (
		<TableRow
			key={data?.id}
			sx={{
				bgcolor: data?.color,
				'&:last-child td, &:last-child th': { border: 0 },
				cursor: 'pointer',
			}}
			onClick={(e) => {
				toggleModal();
				const rowId = e.currentTarget.firstChild.textContent;
				setModalParam(rowId);
			}}
		>
			<TableCell component="th" scope="row">
				{data?.id}
			</TableCell>
			<TableCell align="right">{data?.name}</TableCell>
			<TableCell align="right">{data?.year}</TableCell>
		</TableRow>
	);
};

export default TableRowComponent;
