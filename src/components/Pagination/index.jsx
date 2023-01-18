import React from 'react';
// import { Pagination} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';

const PaginationComponent = ({ totalPages, setPage, page }) => {
	// const location = useLocation();
	// const query = new URLSearchParams(location.search);
	// console.log(query);
	// const pageP = parseInt(query.get('page') || '1', 10);

	// correct router integration to be fixed
	return (
		<Pagination
			page={page}
			count={totalPages}
			onChange={(e, v) => {
				setPage(v);
				console.log('page changed to ' + page);
				console.log('page value changed to ' + v);
			}}
			renderItem={(item) => (
				<PaginationItem component={Link} to={`/page/${page}`} {...item} />
			)}
		/>
	);
	// return (
	// 	<>
	// 		<Pagination count={totalPages} onChange={(e, v) => setPage(v)} />
	// 	</>
	// );
};

export default PaginationComponent;
