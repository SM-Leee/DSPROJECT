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
				<div data-href='currentassets'>현재 자산</div>
				<div data-href='byperiod'>기간별</div>
				<div data-href='documententry' class="selected">전표입력</div>
				<div data-href='index'>예시</div>
			</div>
		</div>

		<div class="contents">
			<input type="text" id="date" data-ds-label="일  자">

			<div class="ds-ui-dropdown-picker-box">
				<label>분&nbsp;&nbsp;류</label> <select class="dropdown-picker">
					<option value="volvo">Volvo</option>
					<option value="assb">Saab</option>
					<option value="opel">Opel</option>
					<option value="audi">Audi</option>
				</select>
			</div>
			<div class="ds-ui-input" data-rows="2">
				<label>거래처</label>
			</div>

			<div class="ds-ui-input" data-rows="2">
				<label>상&nbsp;&nbsp;품</label>
			</div>
			<div class="ds-ui-input onlynumber">
				<label>수&nbsp;&nbsp;량</label>
			</div>
			<div class="ds-ui-input kwdnumber">
				<label>단&nbsp;&nbsp;가</label>
			</div>
			<div class="ds-ui-input kwdnumber">
				<label>공급가</label>
			</div>
			<div class="ds-ui-input kwdnumber">
				<label>VAT</label>
			</div>
			<div class="ds-ui-input" data-rows="2" data-column="2">
				<label>상세정보</label>
			</div>
			<div class="ds-ui-input" data-rows="2" data-column="2">
				<label>상세정보</label>
			</div>
			<div class="ds-ui-basicButton">추 가</div>
			<div class="ds-ui-basicButton fileupload"></div>
			<h1 class='h1'></h1>
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
	<script>
	
	
	
	</script>

</body>
</html>