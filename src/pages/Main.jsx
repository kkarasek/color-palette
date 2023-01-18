import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import ModalElement from '../components/Modal';
import { Box } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../App.css';

const Home = () => {
	let { pageId } = useParams();
	pageId = parseInt(pageId);

	const [fetchedData, setFetchedData] = useState('');
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(pageId);
	const [isOpen, setIsOpen] = useState(false);
	const [modalParam, setModalParam] = useState('');
	const [error, setError] = useState('');
	const { data, total_pages } = fetchedData;

	const url = `https://reqres.in/api/products?per_page=5&page=${page}&id=${search}`;

	useEffect(() => {
		(async function () {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					setError('No id found. Please try another one.');
				} else {
					const results = await response.json();
					setFetchedData(results);
					setError('');
				}
			} catch (err) {
				setError(
					"There's a problem with internal server. Please try again later."
				);
			}
		})();
	}, [url]);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '50px',
					bgcolor: '#f9f9f9',
				}}
			>
				<SearchBar setSearch={setSearch} />
				<Table
					data={data}
					toggleModal={toggleModal}
					setModalParam={setModalParam}
					error={error}
				/>
				<Pagination totalPages={total_pages} setPage={setPage} page={page} />
				<ModalElement
					toggleModal={toggleModal}
					isOpen={isOpen}
					modalParam={modalParam}
				/>
			</Box>
		</>
	);
};

export default Home;
