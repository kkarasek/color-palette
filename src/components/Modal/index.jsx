import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { ModalSpan } from './styles';
import { ModalBox } from './styles';

const ModalElement = ({ toggleModal, isOpen, modalParam }) => {
	const [fetchedData, setFetchedData] = useState('');
	const [error, setError] = useState('');
	const { data } = fetchedData;

	const url = `https://reqres.in/api/products?id=${modalParam}`;

	useEffect(() => {
		(async function () {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					setError('No data found.');
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

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={isOpen}
				onClose={toggleModal}
				closeAfterTransition
				sx={{ backdropFilter: 'blur(2px)' }}
			>
				<Fade in={isOpen}>
					<ModalBox>
						{error ? (
							<Box
								sx={{
									textAlign: 'center',
									padding: '20px',
									color: 'red',
								}}
							>
								<Typography id="error-modal-description">{error}</Typography>
							</Box>
						) : (
							<>
								<Box
									sx={{
										height: '40%',
										bgcolor: data?.color,
										borderRadius: '20px 20px 0 0',
									}}
								/>
								<Box sx={{ padding: '20px 20px' }}>
									<Typography id="transition-modal-description">
										<ModalSpan>Name : </ModalSpan> {data?.name}
									</Typography>
									<Typography id="transition-modal-description" sx={{ mt: 1 }}>
										<ModalSpan>Id : </ModalSpan>
										{data?.id}
									</Typography>
									<Typography id="transition-modal-description" sx={{ mt: 1 }}>
										<ModalSpan>Year : </ModalSpan> {data?.year}
									</Typography>
									<Typography id="transition-modal-description" sx={{ mt: 1 }}>
										<ModalSpan>Color : </ModalSpan> {data?.color}
									</Typography>{' '}
									<Typography id="transition-modal-description" sx={{ mt: 1 }}>
										<ModalSpan>Pantone value : </ModalSpan>{' '}
										{data?.pantone_value}
									</Typography>
								</Box>
							</>
						)}
					</ModalBox>
				</Fade>
			</Modal>
		</div>
	);
};

export default ModalElement;
