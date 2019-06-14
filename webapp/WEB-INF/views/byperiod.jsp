<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<script type="text/javascript"
	src="${pageContext.request.contextPath}/assets/js/ds-header-link.js"></script>
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
				<div data-href='currentassets'>현재 자산</div>
				<div data-href='byperiod' class="selected">기간별</div>
				<div data-href='documententry'>전표입력</div>
				<div data-href='index'>예시</div>
				<div>ggggg</div>
			</div>
		</div>

		<div class="contents">
			<div class='period-wrap'>
				<div class="periodpicker" data-ds-language="en"></div>
			</div>
			<!-- cardlist -->
			<div class='ds-ui-cardlistAll' data-mapping='exampleData'
				data-category='company' data-setting='true'
				data-icon='status modify remove'>
				<div data-detail='date'></div>
				<div data-detail='company'></div>
				<div data-detail='price'></div>
			</div>


		</div>
		<!-- 컬럼을 선택해서 필터링(standard) 할 수 있다. -->
		<!-- 동일한 value를 필터링 할 수 없음  -->
		<!-- count는 해당 standard 조건들의 총 개수를 나타낸다 -->
		<!-- add는 해당 standard 조건들의 총 합을 나타낸다 ex)개수, A회사에서 수입한 TV의 총 개수  -->
		<!-- mul은 'mul col1 col2' mul 두개의 컬럼을 선택해서 곱한다 ex)곱하기, A회사에서 수입된 tv의 금액(count*price)-->
		<div class="footer" data-mapping='exampleData'>
			<div class="ds-ui-footerBox">
				<div data-color='#00AAF0' data-direction='horizen'>
					<p>A 회사 총 수입 금액</p>
					<p data-standard='A plus' data-calc-detail='mul price count'></p>
				</div>
			</div>

			<div class="ds-ui-footerBox">
				<div data-color='#E74D3A'>
					<p>총 미지급 횟수</p>
					<p data-standard='etc' data-calc-detail='count'></p>
				</div>
				<div data-color='#00AAF0'>
					<p>A 회사 pc 수입 횟수</p>
					<p data-standard='A pc plus' data-calc-detail='count'></p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div>
					<p>B 회사 pc 수입 개수</p>
					<p data-standard='B pc plus' data-calc-detail='add'></p>
				</div>
			</div>
		</div>
		<div id='ds-ui-staticBtn' data-float='true'></div>
	</div>


	<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/ds.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/app.js"></script>
	<script>
		const exampleData = [
				{
					no : 1,
					company : 'A',
					good : 'tv',
					count : 5,
					price : 300000,
					date : '2017-12-12',
					category : 'plus',
					desc : '안녕하세요? 최기석입니다 반갑습니다 하이하이',
					img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'
				},
				{
					no : 2,
					company : 'A',
					good : 'pc',
					count : 10,
					price : 700000,
					date : '2018-10-19',
					category : 'etc',
					desc : '',
					img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'
				},
				{
					no : 3,
					company : 'D',
					good : 'pc',
					count : 13,
					price : 700000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'
				}, {
					no : 4,
					company : 'B',
					good : 'smartphone',
					count : 3,
					price : 500000,
					date : '2018-11-02',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 5,
					company : 'D',
					good : 'pc',
					count : 13,
					price : 400000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 6,
					company : 'C',
					good : 'tv',
					count : 10,
					price : 1800000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 7,
					company : 'C',
					good : 'radio',
					count : 12,
					price : 800000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 8,
					company : 'D',
					good : 'pc',
					count : 21,
					price : 50000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 9,
					company : 'C',
					good : 'pc',
					count : 4,
					price : 1500000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 10,
					company : 'A',
					good : 'pc',
					count : 3,
					price : 2500000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 11,
					company : 'A',
					good : 'pc',
					count : 10,
					price : 500000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 12,
					company : 'A',
					good : 'pc',
					count : 14,
					price : 400000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 13,
					company : 'A',
					good : 'pc',
					count : 12,
					price : 800000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 14,
					company : 'B',
					good : 'pc',
					count : 18,
					price : 400000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 15,
					company : 'B',
					good : 'pc',
					count : 11,
					price : 900000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 16,
					company : 'B',
					good : 'pc',
					count : 19,
					price : 200000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 17,
					company : 'B',
					good : 'pc',
					count : 8,
					price : 1100000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 18,
					company : 'B',
					good : 'pc',
					count : 5,
					price : 1300000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 19,
					company : 'C',
					good : 'pc',
					count : 7,
					price : 1500000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 20,
					company : 'C',
					good : 'pc',
					count : 14,
					price : 700000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 21,
					company : 'C',
					good : 'pc',
					count : 13,
					price : 500000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 22,
					company : 'C',
					good : 'pc',
					count : 18,
					price : 400000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 23,
					company : 'C',
					good : 'pc',
					count : 3,
					price : 1900000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 24,
					company : 'D',
					good : 'pc',
					count : 17,
					price : 200000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 25,
					company : 'D',
					good : 'pc',
					count : 8,
					price : 1000000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 26,
					company : 'D',
					good : 'pc',
					count : 12,
					price : 500000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 27,
					company : 'D',
					good : 'pc',
					count : 13,
					price : 500000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 28,
					company : 'D',
					good : 'pc',
					count : 15,
					price : 700000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 29,
					company : 'A',
					good : 'pc',
					count : 9,
					price : 1000000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 30,
					company : 'A',
					good : 'pc',
					count : 12,
					price : 100000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 31,
					company : 'A',
					good : 'pc',
					count : 10,
					price : 600000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 32,
					company : 'B',
					good : 'pc',
					count : 14,
					price : 400000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 33,
					company : 'B',
					good : 'pc',
					count : 15,
					price : 900000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 34,
					company : 'B',
					good : 'pc',
					count : 15,
					price : 900000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 35,
					company : 'C',
					good : 'pc',
					count : 12,
					price : 700000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 36,
					company : 'C',
					good : 'pc',
					count : 13,
					price : 300000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 37,
					company : 'C',
					good : 'pc',
					count : 6,
					price : 1700000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				}, {
					no : 38,
					company : 'D',
					good : 'pc',
					count : 20,
					price : 300000,
					date : '2018-11-01',
					category : 'plus',
					desc : '',
					img : ''
				}, {
					no : 39,
					company : 'D',
					good : 'pc',
					count : 13,
					price : 500000,
					date : '2018-11-01',
					category : 'minus',
					desc : '',
					img : ''
				}, {
					no : 40,
					company : 'D',
					good : 'pc',
					count : 9,
					price : 1500000,
					date : '2018-11-01',
					category : 'etc',
					desc : '',
					img : ''
				} ];
		const color_option = [ {
			category : 'A',
			color : 'orange'
		}, {
			category : 'B',
			color : 'skyblue'
		}, {
			category : 'C',
			color : 'green'
		}, {
			category : 'D',
			color : 'green'
		} ];
		const statusViewOption = [ {
			img : '이미지',
			col : 'header'
		}, {
			good : '상품',
			col : 2
		}, {
			company : '회사',
			col : 2
		}, {
			count : '개수',
			col : 2
		}, {
			price : '가격',
			col : 2
		}, {
			date : '일자',
			col : 2
		}, {
			category : '분류',
			col : 2
		}, {
			desc : '설명',
			col : 1
		} ]
	</script>

</body>
</html>