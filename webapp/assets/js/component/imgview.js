// 해당 elment에 data-imgurl이 있다면
const imgview = () => {
    let img = $('img');
    img.click(function () {
        let imgUrl = $(this).data('imgurl');
        showImg(viewImgHTML, imgUrl)
    })
}
var viewImgHTML =
    "<div class='imgViewBox'>" +
    "<div class='overlay'></div>" +
    "<div class='imgView'>" +
    "</div>" +
    "</div>";

const showImg = (html, imgUrl) => {
    $('.App').append(html);
    $('.imgView').append(
        "<img src='" + imgUrl + "'>"
    )
    closeStatusView($('.imgView'))
}