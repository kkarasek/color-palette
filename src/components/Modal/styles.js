import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const ModalBox = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 250px;
	height: 350px;
	background-color: #f9f9f9;
	border-radius: 20px;
	box-shadow: 24px;
`;

export const ModalSpan = styled.span`
	font-weight: bold;
`;
