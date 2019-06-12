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
				<div data-href='byperiod'>기간별</div>
				<div data-href='documententry' class="selected">전표입력</div>
				<div data-href='index'>예시</div>
				<div>ggggg</div>
			</div>
		</div>

		<div class="contents">
			<input type="text" id="date1" class="date" data-ds-label="일  자">
			<!-- dropdownList 방법1 -->
			<select class="ds-ui-dropdown-picker">
				<option value="volvo">Volvo</option>
				<option value="assb">Saab</option>
				<option value="opel">Opel</option>
				<option value="audi">Audi</option>
			</select>
			<!-- dropdownList 방법2 -->
			<select class="ds-ui-dropdown-picker" data-ds-label="목 차">
				<option value="volvo">Volvo</option>
				<option value="assb">Saab</option>
				<option value="opel">Opel</option>
				<option value="audi">Audi</option>
			</select>
			<!-- dropdownList 방법3 -->
			<select class="ds-ui-dropdown-picker" data-ds-label="목 차"
				data-ds-binding="exampleData" data-ds-item-binding="option2"
				data-ds-value-field="category" data-ds-text-field="transname">
			</select>

			<div class="ds-ui-input" data-ds-rows="2" data-ds-label="거래처"
				data-ds-binding='exampleData' data-ds-form="company"></div>


			<div class="ds-ui-input" data-ds-rows="2" data-ds-label="상품"
				data-ds-binding='exampleData' data-ds-form="good"></div>
			<div class="ds-ui-input onlynumber" data-ds-label="수량"
				data-ds-binding='exampleData' data-ds-form="count"></div>
			<div class="ds-ui-input kwdnumber" data-ds-label="단가"
				data-ds-binding='exampleData' data-ds-form="price"></div>
			<!-- <div class="ds-ui-input kwdnumber" data-ds-label="공급가"></div>
			<div class="ds-ui-input kwdnumber" data-ds-label="VAT"></div> -->
			<div class="ds-ui-input kwdnumber"></div>
			<div class="ds-ui-input" data-ds-rows="2"></div>
			<div class="ds-ui-input onlynumber"></div>
			<div class="ds-ui-input" data-ds-rows="2" data-ds-column="2"
				data-ds-binding='exampleData' data-ds-form="desc"
				data-ds-label="상세정보"></div>
			<div class="ds-ui-input" data-ds-rows="2" data-ds-column="2"
				data-ds-label="상세정보"></div>
			<div class="ds-ui-basicButton">추 가</div>
			<div class="ds-ui-basicButton fileupload"></div>
		</div>


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
		const exampleData = [ {
			no : 1,
			company : 'A',
			good : 'tv',
			count : 5,
			price : 300000,
			date : '2017-12-12',
			category : 'plus',
			desc : '^^'
		}, {
			no : 2,
			company : 'A',
			good : 'pc',
			count : 10,
			price : 700000,
			date : '2018-10-19',
			category : 'etc',
			desc : ''
		}, {
			no : 3,
			company : 'D',
			good : 'pc',
			count : 13,
			price : 700000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 4,
			company : 'B',
			good : 'smartphone',
			count : 3,
			price : 500000,
			date : '2018-11-02',
			category : 'etc',
			desc : ''
		}, {
			no : 5,
			company : 'D',
			good : 'pc',
			count : 13,
			price : 400000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 6,
			company : 'C',
			good : 'tv',
			count : 10,
			price : 1800000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 7,
			company : 'C',
			good : 'radio',
			count : 12,
			price : 800000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 8,
			company : 'D',
			good : 'pc',
			count : 21,
			price : 50000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 9,
			company : 'C',
			good : 'pc',
			count : 4,
			price : 1500000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 10,
			company : 'A',
			good : 'pc',
			count : 3,
			price : 2500000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 11,
			company : 'A',
			good : 'pc',
			count : 10,
			price : 500000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 12,
			company : 'A',
			good : 'pc',
			count : 14,
			price : 400000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 13,
			company : 'A',
			good : 'pc',
			count : 12,
			price : 800000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 14,
			company : 'B',
			good : 'pc',
			count : 18,
			price : 400000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 15,
			company : 'B',
			good : 'pc',
			count : 11,
			price : 900000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 16,
			company : 'B',
			good : 'pc',
			count : 19,
			price : 200000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 17,
			company : 'B',
			good : 'pc',
			count : 8,
			price : 1100000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 18,
			company : 'B',
			good : 'pc',
			count : 5,
			price : 1300000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 19,
			company : 'C',
			good : 'pc',
			count : 7,
			price : 1500000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 20,
			company : 'C',
			good : 'pc',
			count : 14,
			price : 700000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 21,
			company : 'C',
			good : 'pc',
			count : 13,
			price : 500000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 22,
			company : 'C',
			good : 'pc',
			count : 18,
			price : 400000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 23,
			company : 'C',
			good : 'pc',
			count : 3,
			price : 1900000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 24,
			company : 'D',
			good : 'pc',
			count : 17,
			price : 200000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 25,
			company : 'D',
			good : 'pc',
			count : 8,
			price : 1000000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 26,
			company : 'D',
			good : 'pc',
			count : 12,
			price : 500000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 27,
			company : 'D',
			good : 'pc',
			count : 13,
			price : 500000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 28,
			company : 'D',
			good : 'pc',
			count : 15,
			price : 700000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 29,
			company : 'A',
			good : 'pc',
			count : 9,
			price : 1000000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 30,
			company : 'A',
			good : 'pc',
			count : 12,
			price : 100000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 31,
			company : 'A',
			good : 'pc',
			count : 10,
			price : 600000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 32,
			company : 'B',
			good : 'pc',
			count : 14,
			price : 400000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 33,
			company : 'B',
			good : 'pc',
			count : 15,
			price : 900000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 34,
			company : 'B',
			good : 'pc',
			count : 15,
			price : 900000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 35,
			company : 'C',
			good : 'pc',
			count : 12,
			price : 700000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 36,
			company : 'C',
			good : 'pc',
			count : 13,
			price : 300000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 37,
			company : 'C',
			good : 'pc',
			count : 6,
			price : 1700000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		}, {
			no : 38,
			company : 'D',
			good : 'pc',
			count : 20,
			price : 300000,
			date : '2018-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 39,
			company : 'D',
			good : 'pc',
			count : 13,
			price : 500000,
			date : '2018-11-01',
			category : 'minus',
			desc : ''
		}, {
			no : 40,
			company : 'D',
			good : 'pc',
			count : 9,
			price : 1500000,
			date : '2018-11-01',
			category : 'etc',
			desc : ''
		} ];
		const option2 = [ {
			category : 'etc',
			transname : '미지급'
		}, {
			category : 'plus',
			transname : '수입'
		}, {
			category : 'minus',
			transname : '지출'
		} ];
	</script>

</body>
</html>