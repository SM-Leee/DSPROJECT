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
				<div data-href='currentassets' class="selected">현재 자산</div>
				<div data-href='byperiod'>기간별</div>
				<div data-href='documententry'>전표입력</div>
				<div data-href='index'>예시</div>
				<div>ggggg</div>
			</div>
		</div>

		<div class="contents">
			 <div class="ds-ui-data-table-options">
            <select class="ds-ui-dropdown-picker">
               <option value="">channels</option>
               <option value="Accounting">회계</option>
               <option value="Inventory">재고</option>
               <option value="Time&Attendance">근태</option>
            </select>
            <div class="ds-ui-input search" data-ds-placeholder="search..."></div>
         </div>

         <div 
            data-ds-binding="exampleData" 
            data-ds-column-header="company"
            data-ds-customizing="customize_Naming"
            data-ui-height="70%"
            id="data-table" 
            class="data-table">
         </div>
			
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

	<script type="text/javascript">
	const customize_Naming = 
	{ company : "회사명", good : "상품", count : "판매수량", price : "판매가", date : "판매일", category : "카테고리명", desc : "내역" };

const exampleData = 
    [ 
			{no : 1, company : 'A', good : 'tv', count : 5,   price : 300000,   date : '2017-12-01', category : 'plus', desc : ''},
		{no : 2, company : 'A', good : 'pc', count : 10, price : 700000, date : '2018-12-02', category : 'etc', desc : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/200px-ReceiptSwiss.jpg'},
		{no : 3, company : 'D', good : 'pc', count : 13, price : 700000, date : '2018-12-03', category : 'plus', desc : 'https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls'},
		{no : 4, company : 'B', good : 'smartphone', count : 3, price : 500000, date : '2018-12-04', category : 'etc', desc : ''},
		{no : 5, company : 'D', good : 'pc', count : 13, price : 400000, date : '2018-12-05', category : 'minus', desc : '' },
		{no : 6, company : 'C', good : 'tv', count : 10, price : 1800000, date : '2018-12-06', category : 'minus', desc : '' },
		{no : 7, company : 'C', good : 'radio', count : 12, price : 800000, date : '2018-12-07', category : 'etc', desc : '' },
		{no : 8, company : 'D', good : 'pc', count : 21, price : 50000, date : '2018-12-08', category : 'plus', desc : '' }, 
		{no : 9, company : 'C', good : 'pc', count : 4, price : 1500000, date : '2018-12-09', category : 'plus', desc : '' }, 
		{no : 10, company : 'A', good : 'pc', count : 3, price : 2500000, date : '2018-12-10', category : 'etc', desc : '' }, 
		{no : 11, company : 'A', good : 'pc', count : 10, price : 500000, date : '2018-12-11', category : 'etc', desc : '' }, 
		{no : 12, company : 'A', good : 'pc', count : 14, price : 400000, date : '2018-11-01', category : 'minus', desc : '' }, 
		{no : 13, company : 'A', good : 'pc', count : 12, price : 800000, date : '2018-11-01', category : 'minus', desc : '' }, 
		{no : 14, company : 'B', good : 'pc', count : 18, price : 400000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 15, company : 'B', good : 'pc', count : 11, price : 900000, date : '2018-11-01', category : 'plus', desc : '' },
		{no : 16, company : 'B', good : 'pc', count : 19, price : 200000, date : '2018-11-01', category : 'etc', desc : '' },
		{no : 17, company : 'B', good : 'pc', count : 8, price : 1100000, date : '2018-11-01', category : 'minus', desc : '' },
			{no : 18, company : 'B', good : 'pc', count : 5, price : 1300000, date : '2018-11-01', category : 'minus', desc : '' },
		{no : 19, company : 'C', good : 'pc', count : 7, price : 1500000, date : '2018-11-01', category : 'plus', desc : '' },
		{no : 20, company : 'C', good : 'pc', count : 14, price : 700000, date : '2018-11-01', category : 'plus', desc : '' },
		{no : 21, company : 'C', good : 'pc', count : 13, price : 500000, date : '2018-11-01', category : 'etc', desc : '' },
  		{no : 22, company : 'C', good : 'pc', count : 18, price : 400000, date : '2018-11-01', category : 'minus', desc : '' },
			{no : 23, company : 'C', good : 'pc', count : 3, price : 1900000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 24, company : 'D', good : 'pc', count : 17, price : 200000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 25, company : 'D', good : 'pc', count : 8, price : 1000000, date : '2018-11-01', category : 'etc', desc : '' }, 
			{no : 26, company : 'D', good : 'pc', count : 12, price : 500000, date : '2018-11-01', category : 'etc', desc : '' }, 
		{no : 27, company : 'D', good : 'pc', count : 13, price : 500000, date : '2018-11-01', category : 'etc', desc : '' }, 
		{no : 28, company : 'D', good : 'pc', count : 15, price : 700000, date : '2018-11-01', category : 'minus', desc : '' }, 
        {no : 29, company : 'A', good : 'pc', count : 9, price : 1000000, date : '2018-11-01', category : 'minus', desc : '' }, 
        {no : 30, company : 'A', good : 'pc', count : 12, price : 100000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 31, company : 'A', good : 'pc', count : 10, price : 600000, date : '2018-11-01', category : 'etc', desc : '' }, 
		{no : 32, company : 'B', good : 'pc', count : 14, price : 400000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 33, company : 'B', good : 'pc', count : 15, price : 900000, date : '2018-11-01', category : 'etc', desc : '' }, 
		{no : 34, company : 'B', good : 'pc', count : 15, price : 900000, date : '2018-11-01', category : 'etc', desc : '' }, 
		{no : 35, company : 'C', good : 'pc', count : 12, price : 700000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 36, company : 'C', good : 'pc', count : 13, price : 300000, date : '2018-11-01', category : 'minus', desc : '' }, 
		{no : 37, company : 'C', good : 'pc', count : 6, price : 1700000, date : '2018-11-01', category : 'etc', desc : '' }, 
		{no : 38, company : 'D', good : 'pc', count : 20, price : 300000, date : '2018-11-01', category : 'plus', desc : '' }, 
		{no : 39, company : 'D', good : 'pc', count : 13, price : 500000, date : '2018-11-01', category : 'minus', desc : '' }, 
		{no : 40, company : 'D', good : 'pc', count : 9, price : 1500000, date : '2018-11-01', category : 'etc', desc : '' }
	];

	</script>
</body>
</html>