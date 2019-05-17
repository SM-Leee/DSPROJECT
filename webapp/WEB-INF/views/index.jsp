<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>프로젝트 진행</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/assets/css/default.css">
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
				<div data-href='currentassets'>현재 자산</div>
				<div data-href='byperiod'>기간별</div>
				<div data-href='documententry'>전표입력</div>
				<div data-href='index' class="selected">예시</div>
			</div>
		</div>

		<div class="contents">
<<<<<<< HEAD
			<div class='ds-ui-chart circle' id='circle2' data-standard='category' data-calc='sum' data-calc-detail='price count sum'></div>
			<div class='ds-ui-chart circle' id='circle1' data-set='dataSet'
				data-index-position='left'></div>
			<div class='ds-ui-chart circle' id='circle3' data-set='dataSet'
				data-index-position='top'></div>
			<div class='ds-ui-chart circle' id='circle4' data-set='dataSet'
				data-index-position='right'></div>
			<div class="ds-ui-chart bar" id="bar1" data-set="dataSet" data-x="title"
				data-y="120" data-dist-y="20" data-index-position="bottom"></div>
			<!-- <div class='chart circle' id='title5' data-set='dataSet'></div> -->

			<div class='ds-ui-chart radar' id='radar1' data-set='dataSet'
				data-max='100'></div>
			<div class='ds-ui-chart line' id='line1' data-set='dataSet' data-x="7"
				data-dist-x="1" data-y="4.5" data-dist-y="0.5"></div>
			<div class='ds-ui-chart bubble' id='bubble1' data-set='dataSet1'
				data-x="120" data-dist-x="20" data-y='120' data-dist-y="20"
				data-index-position="bottom"></div>
			<!-- <div class='chart radar' id='title4' data-set='dataSet' data-max='100'></div> -->
		</div>

		<div class="footer">
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5'>
					<p>수입</p>
					<p>200,200,000</p>
				</div>
				<div data-color='#E74D3A'>
					<p>지출</p>
					<p>200,200,000</p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5' data-direction='horizen'>
					<p>수입</p>
					<p>200,200,000</p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5'>
					<p>수입</p>
					<p>200,200,000</p>
				</div>
				<div data-color='#E74D3A'>
					<p>지출</p>
					<p>200,000</p>
				</div>
				<div data-color='#ABACB2'>
					<p>미지급</p>
					<p>322,432,000</p>
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
	/* category : plus, minus, etc */
	/* 회사 : A,B,C,D,E */
	/* 상품명 : tv, radio, pc, smartphone, teblet, monitor */
	const exampleData = [
		{no:1, company:'A', good:'tv', count: 5 , price: 300000, date:'2017-12-12' ,category : 'plus',desc:'' },
		{no:2, company:'A', good:'pc', count: 10 , price: 700000, date:'2018-10-19' ,category : 'etc',desc:'' },
		{no:3, company:'D', good:'pc', count: 13 , price: 700000, date:'2018-11-01' ,category : 'plus',desc:'' },
		
		];
	
	
=======
			<div class='chart circle' id='circle1' data-set='dataSet' data-index-position='right'></div>
			<!-- <div class='chart circle' id='title5' data-set='dataSet'></div> -->
			<div class='chart radar' id='radar1' data-set='dataSet'
				data-max='100'></div>
			<div class='chart line' id='line3' data-set='dataSet' data-max='100'
				data-min='0' data-dist='10'></div>
			<!-- <div class='chart radar' id='title4' data-set='dataSet' data-max='100'></div> -->
		</div>

		<div class="footer">
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5'>
					<p>수입</p>
					<p>200,200,000</p>
				</div>
				<div data-color='#E74D3A'>
					<p>지출</p>
					<p>200,200,000</p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5' data-direction='horizen'>
					<p>수입</p>
					<p>200,200,000</p>
				</div>
			</div>
			<div class="ds-ui-footerBox">
				<div data-color='#6498B5'>
					<p>수입</p>
					<p>200,200,000</p>
				</div>
				<div data-color='#E74D3A'>
					<p>지출</p>
					<p>200,000</p>
				</div>
				<div data-color='#ABACB2'>
					<p>미지급</p>
					<p>322,432,000</p>
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
	
	const dataSet = [
	    {title: 'index1',    data: 21,    color: 'blue'},
	    {title: 'index2',    data: 54,    color: 'skyblue'},
	    {title: 'index3',    data: 5,    color: 'olive'},
	    //{title: 'index4',    data: 65,     color: 'yellow'},
	    {title: 'index5',    data: 64,    color: 'gray'},
	    {title: 'index6',    data: 55,    color: 'orange'},
	    {title: 'index7',    data: 80,    color: 'purple'},
	    {title: 'index8',   data: 30,    color: 'green'},
	    //{title: 'index9',   data: 30,    color: 'black'}
	    // {title: 'index1',    data: 50,    color: 'red'},
	    // {title: 'index2',    data: 60,    color: 'green'},
	    // {title: 'index3',    data: 50,    color: 'blue'},
	    // {title: 'index4',    data: 90,    color: 'skyblue'},
	     {title: 'index9',    data: 70,    color: 'yellow'},
	    // {title: 'index6',    data: 80,     color: 'yellow'},
	    // {title: 'index7',    data: 63,    color: 'gray'},
	]
>>>>>>> refs/remotes/origin/master
	</script>
</body>
</html>