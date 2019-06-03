<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.servletContext.contextPath}/assets/css/default.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/assets/css/dscomponent.css">
<link rel="stylesheet"
	href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
	crossorigin="anonymous">
</head>
<body class="body">
	<div class="App">
		<div class="header">
			<div id="ds-ui-menu">
				<div>Toggle Menu</div>
				<div>회계관리</div>
				<div>전표관리</div>
				<div>금융</div>
			</div>
			<div id="ds-ui-title">회계관리</div>
		</div>
		<div class="navigator">
			<div id="ds-ui-subtopic">
				<div data-href='currentassets' class="selected">현재 자산</div>
				<div data-href='byperiod'>기간별</div>
				<div data-href='documententry'>전표입력</div>
				<div data-href='index'>예시</div>
				<div>ggggg</div>
			</div>
		</div>

		<div class="contents"></div>

		<div class="footer">
			<!-- data-direction의 default direction은 vertical이다 -->
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5' data-direction='horizen'>
					<p>A 회사 pc 총 수입 개수</p>
					<p data-standard='A tv plus' data-calc-detail='count '></p>
				</div>
				<div data-color='#E74D3A'>
					<p>총 수출 개수</p>
					<p data-standard='etc' data-calc-detail='count'></p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5' data-direction='horizen'>
					<p>A 회사 총 수입 개수</p>
					<p data-standard='A plus' data-calc-detail='count'></p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5' data-direction='vertical'>
					<p>C 회사 수출 금액</p>
					<p data-standard='D plus' data-calc-detail='add count'></p>
				</div>
				<div data-color='#E74D3A'>
					<p>총 수출 금액</p>
					<p data-standard='minus' data-calc-detail='mul price count'></p>
				</div>
				<div data-color='#ABACB2'>
					<p>총 수입 금액</p>
					<p data-standard='plus' data-calc-detail='mul price count'></p>
				</div>
			</div>
		</div>
		<div id='ds-ui-staticBtn'></div>
		<div id='ds-ui-staticShowBtn'></div>
	</div>

	<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/ds.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/app.js"></script>

	<script type="text/javascript">
	const exampleData = [ 
		{no : 1, company : 'A', good : 'tv', count : 5,	price : 300000,	date : '2017-12-12', category : 'plus', desc : '안녕하세요? 최기석입니다 반갑습니다 하이하이', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'
},
		{no : 2, company : 'A', good : 'pc', count : 10, price : 700000, date : '2018-10-19', category : 'etc', desc : '', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'
},
		{no : 3, company : 'D', good : 'pc', count : 13, price : 700000, date : '2018-11-01', category : 'plus', desc : '', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'
},
		{no : 4, company : 'B', good : 'smartphone', count : 3, price : 500000, date : '2018-11-02', category : 'etc', desc : '', img: ''},
		{no : 5, company : 'D',
		good : 'pc',
		count : 13,
		price : 400000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 6,
		company : 'C',
		good : 'tv',
		count : 10,
		price : 1800000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 7,
		company : 'C',
		good : 'radio',
		count : 12,
		price : 800000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 8,
		company : 'D',
		good : 'pc',
		count : 21,
		price : 50000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 9,
		company : 'C',
		good : 'pc',
		count : 4,
		price : 1500000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 10,
		company : 'A',
		good : 'pc',
		count : 3,
		price : 2500000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 11,
		company : 'A',
		good : 'pc',
		count : 10,
		price : 500000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 12,
		company : 'A',
		good : 'pc',
		count : 14,
		price : 400000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 13,
		company : 'A',
		good : 'pc',
		count : 12,
		price : 800000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 14,
		company : 'B',
		good : 'pc',
		count : 18,
		price : 400000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 15,
		company : 'B',
		good : 'pc',
		count : 11,
		price : 900000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 16,
		company : 'B',
		good : 'pc',
		count : 19,
		price : 200000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 17,
		company : 'B',
		good : 'pc',
		count : 8,
		price : 1100000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 18,
		company : 'B',
		good : 'pc',
		count : 5,
		price : 1300000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 19,
		company : 'C',
		good : 'pc',
		count : 7,
		price : 1500000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 20,
		company : 'C',
		good : 'pc',
		count : 14,
		price : 700000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 21,
		company : 'C',
		good : 'pc',
		count : 13,
		price : 500000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 22,
		company : 'C',
		good : 'pc',
		count : 18,
		price : 400000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 23,
		company : 'C',
		good : 'pc',
		count : 3,
		price : 1900000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 24,
		company : 'D',
		good : 'pc',
		count : 17,
		price : 200000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 25,
		company : 'D',
		good : 'pc',
		count : 8,
		price : 1000000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 26,
		company : 'D',
		good : 'pc',
		count : 12,
		price : 500000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 27,
		company : 'D',
		good : 'pc',
		count : 13,
		price : 500000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 28,
		company : 'D',
		good : 'pc',
		count : 15,
		price : 700000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 29,
		company : 'A',
		good : 'pc',
		count : 9,
		price : 1000000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 30,
		company : 'A',
		good : 'pc',
		count : 12,
		price : 100000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 31,
		company : 'A',
		good : 'pc',
		count : 10,
		price : 600000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 32,
		company : 'B',
		good : 'pc',
		count : 14,
		price : 400000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 33,
		company : 'B',
		good : 'pc',
		count : 15,
		price : 900000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 34,
		company : 'B',
		good : 'pc',
		count : 15,
		price : 900000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 35,
		company : 'C',
		good : 'pc',
		count : 12,
		price : 700000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 36,
		company : 'C',
		good : 'pc',
		count : 13,
		price : 300000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 37,
		company : 'C',
		good : 'pc',
		count : 6,
		price : 1700000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	}, {
		no : 38,
		company : 'D',
		good : 'pc',
		count : 20,
		price : 300000,
		date : '2018-11-01',
		category : 'plus',
		desc : '',
		img: ''
	}, {
		no : 39,
		company : 'D',
		good : 'pc',
		count : 13,
		price : 500000,
		date : '2018-11-01',
		category : 'minus',
		desc : '',
		img: ''
	}, {
		no : 40,
		company : 'D',
		good : 'pc',
		count : 9,
		price : 1500000,
		date : '2018-11-01',
		category : 'etc',
		desc : '',
		img: ''
	} ];
	</script>
</body>
</html>