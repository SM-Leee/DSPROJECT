<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>프로젝트 진행</title>
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
				<div data-href='documententry'>전표입력</div>
				<div data-href='index' class="selected">예시</div>
				<div>ggggg</div>
			</div>
		</div>

		<div class="contents">

			<!--CircleChart 
					적은 요의 비율 표시(양유형)
			필수 옵션 : data-binding  --- binding 해줄 dataTable
					data-standard : 차트에 비교할 기준 
					data-calc-detail : 차트에 비교해서 띄워줄 데이터
					( 만약 차트에 비교될 데이터를 계산해서 넣고 싶은경우 mul price count (값과 갯수를 곱하여라) 이렇게 표시해주면된다 )
			보조 옵션 : data-calc : 총합 / 평균 어떻게 비교할 껀지의 옵션 ( default값 : sum ) 
					 data-index-position : 범례의 위치를 설정 ( default값 : bottom )
					 data-transfer-naming : table 안에 이름을 한글로 변경하거나 원하고 싶은 단어로 변경하고 싶을때 쓰는 옵션 -->
			<div class='ds-ui-chart circle' id='circle5'
				data-ds-binding='exampleData' data-ds-standard='company'
				data-ds-calc-detail='price'></div>
			<div class='ds-ui-chart circle' id='circle2'
				data-ds-binding='exampleData' data-ds-standard='category'
				data-ds-transfer-naming='chartOption2' data-ds-calc='avg'
				data-ds-calc-detail='mul price count'></div>
				
			<div class='ds-ui-chart circle' id='circle1'
				data-ds-binding='exampleData' data-ds-standard='company'
				data-ds-calc-detail='price' data-ds-index-position='left'></div>
			<div class='ds-ui-chart circle' id='circle3'
				data-ds-binding='exampleData' data-ds-standard='category'
				data-ds-transfer-naming='chartOption2'
				data-ds-calc-detail='mul price count' data-ds-index-position='top'></div>
			<div class='ds-ui-chart circle' id='circle4'
				data-ds-binding='exampleData' data-ds-standard='company'
				data-ds-calc-detail='price' data-ds-index-position='right'></div>

			<!--BarChart 
				요소의 크기 표시 ( 양 유형 )
			필수 옵션 : data-binding  --- binding 해줄 dataTable
					data-standard : 차트에 비교할 기준 
					data-calc-detail : 차트에 비교해서 띄워줄 데이터 
					( 만약 차트에 비교될 데이터를 계산해서 넣고 싶은경우 mul price count (값과 갯수를 곱하여라) 이렇게 표시해주면된다 ) 
			보조 옵션 : data-x : 새로운 기준을 잡아 data-standard들을 비교 ( x축 과 관련이 많음 )
					 data-calc : 총합 / 평균 어떻게 비교할 껀지의 옵션 ( default값 : sum ) 
					 data-index-position : 범례의 위치를 설정 ( default값 : bottom )
					 data-transfer-naming : table 안에 이름을 한글로 변경하거나 원하고 싶은 단어로 변경하고 싶을때 쓰는 옵션 -->
			<div class="ds-ui-chart bar" id="bar2" data-ds-binding='exampleData'
				data-ds-standard='category' data-ds-calc-detail='mul price count'></div>
			<div class="ds-ui-chart bar" id="bar1" data-ds-binding='exampleData'
				data-ds-x='company' data-ds-standard='category'
				data-ds-transfer-naming='chartOption2'
				data-ds-calc-detail='mul price count'></div>
			<div class="ds-ui-chart bar" id="bar3" data-ds-binding='exampleData'
				data-ds-x='category' data-ds-standard='company'
				data-ds-transfer-naming='chartOption2'
				data-ds-calc-detail='mul price count' data-ds-index-position="bottom"></div>
			<div class="ds-ui-chart bar" id="bar2" data-ds-binding='exampleData'
				data-ds-standard='category' data-ds-transfer-naming='chartOption2'
				data-ds-calc-detail='mul price count' data-ds-index-position="bottom"></div>

			<!--RadarChart 
				표준값에 대한 차이를 다각도로 제시 ( 분포유형)
				많은 데이터를 넣는 것을 기준으로 잡았음
			필수 옵션 : data-binding  --- binding 해줄 dataTable
					data-standard : 차트에 비교할 기준 
					data-calc-detail : 차트에 비교해서 띄워줄 데이터 
					( 만약 차트에 비교될 데이터를 계산해서 넣고 싶은경우 mul price count (값과 갯수를 곱하여라) 이렇게 표시해주면된다 ) 
					data-x : 새로운 기준을 잡아 data-standard들을 비교 ( x축 과 관련이 많음 )
			보조 옵션 : data-max : 기준점의 최고값 ( default값 : 1 ) 
					 data-calc : 총합 / 평균 어떻게 비교할 껀지의 옵션 ( default값 : sum ) 
					 data-index-position : 범례의 위치를 설정 ( default값 : bottom )
					 data-transfer-naming : table 안에 이름을 한글로 변경하거나 원하고 싶은 단어로 변경하고 싶을때 쓰는 옵션 -->

			<div class='ds-ui-chart radar' id='radar1' data-ds-binding='exampleData'
				data-ds-standard='category' data-ds-calc-detail='mul price count'
				data-ds-x='company' data-ds-transfer-naming='chartOption2'></div>
				<div class='ds-ui-chart radar' id='radar2' data-ds-binding='exampleData'
				data-ds-standard='category' data-ds-calc-detail='mul price count'
				data-ds-x='company' data-ds-transfer-naming='chartOption2'></div>

			<!-- LineChart
				시간 축에 따라 총량 변화 표시
				라인 차트에서는 범례가 필요가 없음.
				기준이 1개이고, 시간에 따라 변화를 나타낸다 / ex) A회사에서 기간별(년도별 / 월도 / 일별)에 따라 (갯수의총합, 총합, 수입, 지출, 미지급)의 변화들을 볼수 있따.
				x축은 기간별 / y축은 그 해당하는 값들을 나타낸다. 
				
				data-calc-detail=''
				data-calc-detail-standard = 'count'

				data-calc-detail='mul price count'
				category의 수입만 추출해 해시오
				data-calc-detail-standard= 'category plus'
				
				년도별 : year
				 몇년에 분기별
				분기별 : 2018 quarter
				 몇년의 월별
				월별 : 2018 month
				몇년 몇월의 일별
				일별 : day
				mul price count
			 -->


			<div class='ds-ui-chart line' id='line2' data-ds-binding='exampleData'
				data-ds-standard='company' data-ds-substandard='category' data-ds-x='date'
				data-ds-transfer-naming='chartOption2' data-ds-calc-detail='count'></div>
			<div class='ds-ui-chart line' id='line1' data-ds-binding='exampleData'
				data-ds-standard='company' data-ds-substandard='category' data-ds-x='date'
				data-ds-calc-detail='mul price count'></div>

			<!-- 버튼 클릭시 입력된 데이터가 넘어왔을때 binding 하나
						 입력된 데이터가 안넘어 왔을때 하나 총 두개를 만들어라 -->
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
		/* category : plus, minus, etc */
		/* 회사 : A,B,C,D,E */
		/* 상품명 : tv, radio, pc, smartphone, teblet, monitor */
		const exampleData = [ 
			{no : 1, company : 'A', good : 'tv', count : 5,	price : 300000,	date : '2016-12-12', category : 'plus', desc : ''},
			{no : 2, company : 'A', good : 'pc', count : 10, price : 700000, date : '2017-01-12', category : 'etc', desc : ''},
			{no : 3, company : 'D', good : 'pc', count : 13, price : 700000, date : '2015-02-01', category : 'plus', desc : ''},
			{no : 4, company : 'B', good : 'smartphone', count : 3, price : 500000, date : '2018-11-02', category : 'etc', desc : ''},
			{no : 5, company : 'D',
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
			date : '2019-11-01',
			category : 'plus',
			desc : ''
		}, {
			no : 12,
			company : 'A',
			good : 'pc',
			count : 14,
			price : 400000,
			date : '2018-03-01',
			category : 'plus',
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
		const chartOption2 = [ {
			category : 'etc',
			transname : '미지급'
		}, {
			category : 'plus',
			transname : '수입'
		}, {
			category : 'minus',
			transname : '지출'
		} ];
		const tableOption = [{
            img: '이미지'
        },
        {
            good: '상품'
        },
        {
            company: '회사'
        },
        {
            count: '개수'
        },
        {
            price: '가격'
        },
        {
            date: '일자'
        },
        {
            category: '분류'
        },
        {
            desc: '설명'
        }
    ];
	</script>
</body>
</html>