const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      menuList = document.querySelectorAll('.menu__list');

      
hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

close.addEventListener('click', ()=> {
    menu.classList.remove('active');
});

menu.addEventListener('click', (e)=> {
    menu.classList.remove('active');
});

menuList.forEach( () => {
    menuList.addEventListener('click', (e)=> {
        menu.classList.remove('active');
    });
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#contacts__form').fadeOut();
        $('#contacts__form').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
