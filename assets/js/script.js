/* Плавная прокрутка */
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    // $( ".menu" ).hide();
    // $( ".cross" ).hide();
    // $( ".hamburger" ).show();
    elementClick = $($.attr(this, 'href'))
    destination = $(elementClick).offset().top;
    $page.animate({
        scrollTop: destination - 100
    }, 400);
    return false;
});

/* Модальное окно */
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const header = document.querySelector('header');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener("click", function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup_content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() { 
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

function bodyUnLock() {
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

/* Ajax запрос */
jQuery(document).ready(function () {
     
     $(".phone").mask("+7 (999) 999-99-99"); 
    
   
    jQuery('.send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
            $( ".popup_title" ).html('Спасибо');
            $( ".popup_subtitle" ).html('В скором времени мы вам позвоним');
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				form.html(data);
    				form.css('opacity','1');
                    //form.find('.status').html('форма отправлена успешно');
                    //$('#myModal').modal('show') // для бутстрапа
    			},
    			error:	 function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });


});

/* Адаптив */

$( document ).ready(function() {

    $('.adaptiv_link').click(function() {
        $( ".menu" ).hide();
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
    });

    $( ".cross" ).hide();
    $( ".menu" ).hide();

    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
    });
    });
    
});