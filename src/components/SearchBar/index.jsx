import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearch }) => {
	const [value, setValue] = useState('');

	return (
		<Paper
			component="form"
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: 400,
				marginTop: '40px',
				boxShadow: 3,
			}}
		>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search for id"
				inputProps={{ 'aria-label': 'search' }}
				value={value}
				onChange={(e) => {
					const result = e.target.value.replace(/\D/g, '');
					setSearch(result);
					setValue(result);
				}}
			/>
		</Paper>
	);
};

export default SearchBar;
