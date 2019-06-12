let ds_msgbox = [];
ds_msgbox.html = 
    "<div class='messageBox'>" +
        "<div class='overlay'></div>" +
        "<div class='messageView'>" +
            "<div class='message-wrap'>" +
                "<div class='message-header'>" +
                    "<div class='message-title'></div>" +
                "</div>" +
                "<div class='message-content'>" +
                    "<img class='message-img'>" +
                    "<div class='message-desc'><pre></pre></div>" +
                "</div>" +
                "<div class='message-footer'>" +
                    "<div class='set-wrap'>" +
                        "<a class='check'>확인</a>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>" +
    "</div>";
// msgbox - alert
ds_msgbox.alert = (msg, ico) => {
    $(ds_msgbox.html).appendTo('body');
    
    let msg_img = '';
    
    switch(ico) {
        case 'none':
            msg_img = '';
            break;
        case 'ico2':
            msg_img = '../assets/images/icon-warning.png';
            break;
        default :
            msg_img = '../assets/images/icon-check.png';
            break;
    }
    
    if(msg_img == '') $('.messageBox .message-img').remove();
    $('.messageBox .message-title').append("<span>확인</span");
    $('.messageBox .message-desc>pre').text(msg);
    $('.messageBox .message-img').attr('src', msg_img);
    

    $('.messageBox').children('.overlay').unbind('click').bind('click', (e) => {
        $('.messageBox').remove();
    });

    return ds_msgbox;
}

ds_msgbox.done = (fn) => {
    $('.messageBox .message-footer').find('.check').on('click', (e)=> {
        $('.messageBox').remove();
        return fn();;
    });
    return ds_msgbox;
};

// msgbox - confirm
ds_msgbox.confirm = (msg, ico) => {
    $(ds_msgbox.html).appendTo('body');

    let msg_img = '';
    
    switch(ico) {
        case 'ico2':
            msg_img = '../assets/images/icon-warning.png';
            break;
        default :
            msg_img = '../assets/images/icon-check.png';
            break;
            
    }
    
    if(msg_img == '') $('.messageBox .message-img').remove();
    else $('.messageBox .message-img').attr('src', msg_img);

    $('.messageBox .message-title').append("<span>선택</span");
    $('.messageBox .message-desc>pre').text(msg);
    $('.messageBox .message-footer a').remove();
    $('.messageBox .message-footer .set-wrap').append("<a class='yes'>예</a>");
    $('.messageBox .message-footer .set-wrap').append("<a class='no'>아니요</a>");
    
    $('.messageBox').children('.overlay').unbind('click').bind('click', (e) => {
        $('.messageBox').remove();
    });

    return ds_msgbox;
}
ds_msgbox.yes = (fn) => {
    $('.messageBox .message-footer').find('.yes').on('click', (e)=> {
        $('.messageBox').remove();
        return fn();
    });
    return ds_msgbox;
}
ds_msgbox.no = (fn) => {
    $('.messageBox .message-footer').find('.no').on('click', (e)=> {
        $('.messageBox').remove();
        return fn();;
    });
    return ds_msgbox;
}

// msgbox - confirm
ds_msgbox.error = (msg) => {
    $(ds_msgbox.html).appendTo('body');

    let msg_img = '../assets/images/icon-error.png';
    
    $('.messageBox .message-img').attr('src', msg_img);

    $('.messageBox .message-title').append("<span>오류</span");
    if(typeof msg == "object") {
        $('.messageBox .message-footer .set-wrap').append("<a class='detail'>자세히 ▼</a>");
        $('.messageBox .message-desc>pre').text(msg.message);
        $('.messageBox .message-content').after("<div class='error-content off'><pre class='error-desc'>" + msg.error + "</pre></div>");
        $('.messageBox .set-wrap').find('.detail').unbind('click').bind('click', (e) => {
            let $msgWindow = $('.messageBox .messageView');
            if($msgWindow.find('.error-content').is('.off')) {
                $msgWindow.attr('style', 'height:43%');
                $msgWindow.find('.error-content').removeClass('off');
            } else {
                $msgWindow.removeAttr('style');
                $msgWindow.find('.error-content').addClass('off');
            }
        });
    } else{
        $('.messageBox .message-desc>pre').text(msg);
    }

    $('.messageBox').children('.overlay').unbind('click').bind('click', (e) => {
        $('.messageBox').remove();
    });

    return ds_msgbox;
}

function messageBox() {

    //alert
    $('#btn-basic').on('click', (e)=>{
        ds_msgbox.alert('메세지입니다.\n샘플메세지입니다.').done(function() {
            alert('done');
        });
    });
    $('#btn-basic2').on('click', (e)=>{
        ds_msgbox.alert('메세지입니다.\n샘플메세지입니다.','none').done(function() {
            alert('done');
        });
    });
    $('#btn-basic3').on('click', (e)=>{
        ds_msgbox.alert('메세지입니다.\n샘플메세지입니다.','ico2').done(function() {
            alert('done');
        });
    });

    //confirm
    $('#btn-basic4').on('click', (e)=>{
        ds_msgbox.confirm('변경된 사항이 있습니다.\n저장하시겠습니까?')
        .yes(function() {
            alert('yes');
        }).no(function() {
            alert('no');
        });
    });
    $('#btn-basic5').on('click', (e)=>{
        ds_msgbox.confirm('변경된 사항이 있습니다.\n저장하시겠습니까?','ico2')
        .yes(function() {
            alert('yes');
        }).no(function() {
            alert('no');
        });
    });

    //error
    $('#btn-basic6').on('click', (e)=>{
        ds_msgbox.error('거래처는 필수입력 사항입니다.')
        .done(function() {
            alert('done');
        });
    });
    $('#btn-basic7').on('click', (e)=>{
        ds_msgbox.error({
            'message' : 'Error가 발생되었습니다.',
            'error' : 'systme.invaildCaseException : [A]ds common.forms.help.'
        })
        .done(function() {
            alert('done');
        });
    });
}