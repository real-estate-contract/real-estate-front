import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

const styles = {
	headerTitle: {
		marginTop: 6,
		marginLeft: 20,
		color: '#D99E73',
		textAlign: 'left',
		fontSize: '20px',
		fontWeight: 700,
		width: '100px',
	},

	mainStartBtn: {
		display: 'flex',
		width: '280px',
		padding: '18px',
		margin: '10px 20px',
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius: '25px',
		background: '#D99E73',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		color: '#fff',
		'&:hover': {
			background: '#ECCCB1',
		},
	},
	

	//로그인
	// 회원가입
	signupBtn: {
		color: '#5E4017',
		cursor: 'pointer',
		textDecorationLine: 'underline',
		background: '#fff',
		border: 'none',
		padding: '3px 5px 1px',
	},

	signupBtn_: {
		color: 'Black',
		cursor: 'pointer',
		background: '#fff',
		border: 'none',
		paddingTop: '7px',
	},

	startBtn: {
		display: 'flex',
		width: '260px',
		padding: '8px',
		margin: '10px 20px',
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius: '25px',
		background: '#D99E73', 
		fontSize: '20px',
		color: '#fff',
		'&:hover': {
			background: '#ECCCB1',
		},
	},

	emailcheckBtn: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 'px 10px',
		backgroundColor: '#88bde7',
		color: '#fff',
		'&:hover': {
			background: '#88BDE7',
		},
	},

	loginBtn: {
		borderRadius: '10px',
		padding: '11.5px 5.5px',
		display: 'flex',
		alignItems: 'center',
		border: '1px solid rgba(0, 0, 0, 0.2)',
	},


	//메인
	RegisStart : {
		width: '100%',
  		border: '2px solid #828282',
 		background: 'linear-gradient(to right, #ECCCB1, white)',/* 그라데이션 색상 설정 */
 		padding: '5px', /* 내부 여백 설정 */
  		borderRadius: '5px', /* 버튼을 둥글게 만듦 */
  		cursor: 'pointer', /* 커서 모양 설정 */
	},

	TransStart : {
		width: '50%', /* 버튼의 너비 */
 		height: '100%',
		border: '2px solid #828282',
		borderRadius: '5px',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
		color: '#fff',
		'&:hover': {
			background: 'rgba(236, 204, 177, 0.33);',
		},

	},
	
	// 매물등록
	Upload : {
		cursor: 'pointer',
    	fontWeight: 'bold',
    	marginLeft: '20px'
	},

	nextB : {
		display: 'flex',
		width: '120px',
		margin: '0px 20px 5px',
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius: '8px',
		background: '#5E4017', 
		fontSize: '14px',
		color: '#fff',
		'&:hover': {
			background: '#D99E73',
		},
	},

	nextB_ : {
		display: 'flex',
		width: '160px',
		margin: '0px 20px 5px',
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius: '8px',
		background: '#5E4017', 
		fontSize: '14px',
		color: '#fff',
		'&:hover': {
			background: '#D99E73',
		},
	}
}

export const StyledButton = styled(MuiButton)(({ theme }) => ({
	...(styles[theme] || {}),
}));