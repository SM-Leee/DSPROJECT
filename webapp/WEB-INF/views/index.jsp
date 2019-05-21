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
			<div class='ds-ui-chart circle' id='circle2' data-binding='exampleData' data-standard='category' data-standard-transfer-naming = 'chartOption' data-calc='sum' data-calc-detail='mul price count'></div>
			<div class='ds-ui-chart circle' id='circle1' data-binding='exampleData' data-standard='company' data-calc-detail='price' data-index-position='left'></div>
			<div class='ds-ui-chart circle' id='circle3' data-binding='exampleData' data-standard='category' data-calc-detail='mul price count' data-index-position='top'></div>
			<div class='ds-ui-chart circle' id='circle4' data-binding='exampleData' data-standard='company' data-calc-detail='price' data-index-position='right'></div>
			
			<div class="ds-ui-chart bar" id="bar1" data-set="dataSet" data-x="title"
				data-y="120" data-dist-y="20" data-index-position="bottom"></div>
			<!-- <div class='chart circle' id='title5' data-set='dataSet'></div> -->

			<div class='ds-ui-chart radar' id='radar1' data-set='exData'
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
	const exampleData =  
		[
			{no:1, company:'A', good:'tv', count: 5 , price: 300000, date:'2017-12-12' ,category : 'plus',desc:'' },
			{no:2, company:'A', good:'pc', count: 10 , price: 700000, date:'2018-10-19' ,category : 'etc',desc:'' },
			{no:3, company:'D', good:'pc', count: 13 , price: 700000, date:'2018-11-01' ,category : 'plus',desc:'' },
			{no:4, company:'B', good:'smartphone', count: 3 , price: 500000, date:'2018-11-02' ,category : 'etc',desc:'' },
			{no:5, company:'D', good:'pc', count: 13 , price: 4000, date:'2018-11-01' ,category : 'minus',desc:'' },
			{no:6, company:'C', good:'pc', count: 13 , price: 1800000, date:'2018-11-01' ,category : 'minus',desc:'' },
			{no:7, company:'C', good:'pc', count: 13 , price: 800000, date:'2018-11-01' ,category : 'etc',desc:'' },
			{no:8, company:'D', good:'pc', count: 13 , price: 50000, date:'2018-11-01' ,category : 'plus',desc:'' },
			{no:9, company:'C', good:'pc', count: 13 , price: 1500000, date:'2018-11-01' ,category : 'etc',desc:'' },
		];
	const chartOption = 
		[
			{etc : '미지급'},
			{plus : '수입'},
			{minus : '지출'}
		];
	
	</script>
</body>
</html>