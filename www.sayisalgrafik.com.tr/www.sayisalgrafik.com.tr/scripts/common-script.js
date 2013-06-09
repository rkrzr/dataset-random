$(document).ready(function () {


    $('.landing-detail a.devam').click(function () {
        $('.landing-detail a.devam').parent().css('height', '80');
        $('.landing-detail a.devam').css('display', 'block');
        $(this).css('display', 'none');
        $(this).parent().css('height','auto');

    });



    $('.tumunu-ac').click(function () {

        $('.accordionContent').css('display', 'block');

    });

    $('.tumunu-ac').click(function () {

        $('.accordionContent2').css('display', 'block');

    });



    $("ul.dropdown li").hover(function () {

        $(this).addClass("hover");
        $('ul:first', this).css('visibility', 'visible');

    }, function () {

        $(this).removeClass("hover");
        $('ul:first', this).css('visibility', 'hidden');

    });

    $("ul.dropdown li ul li:has(ul)").find("a:first").append("");






    //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
    $('.accordionButton').click(function () {

        //REMOVE THE ON CLASS FROM ALL BUTTONS
        $('.accordionButton').removeClass('on');

        //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        $('.accordionContent').slideUp('normal');

        //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
        if ($(this).next().is(':hidden') == true) {

            //ADD THE ON CLASS TO THE BUTTON
            $(this).addClass('on');

            //OPEN THE SLIDE
            $(this).next().slideDown('normal');
        }

    });


    /*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/

    //ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
    $('.accordionButton').mouseover(function () {
        $(this).addClass('over');

        //ON MOUSEOUT REMOVE THE OVER CLASS
    }).mouseout(function () {
        $(this).removeClass('over');
    });

    /*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/


    /********************************************************************************************************************
    CLOSES ALL S ON PAGE LOAD
    ********************************************************************************************************************/
    $('.accordionContent').hide();

    $('.video-play-button').click(function () {
        $('.video-play-button').css('display', 'block');
        $(this).hide();
    });


    //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
    $('.accordionButton2').click(function () {

        //REMOVE THE ON CLASS FROM ALL BUTTONS
        $('.accordionButton2').removeClass('on');

        //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        $('.accordionContent2').slideUp('normal');

        //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
        if ($(this).next().is(':hidden') == true) {

            //ADD THE ON CLASS TO THE BUTTON
            $(this).addClass('on');

            //OPEN THE SLIDE
            $(this).next().slideDown('normal');
        }

    });


    /*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/

    //ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
    $('.accordionButton2').mouseover(function () {
        $(this).addClass('over');

        //ON MOUSEOUT REMOVE THE OVER CLASS
    }).mouseout(function () {
        $(this).removeClass('over');
    });

    /*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/


    /********************************************************************************************************************
    CLOSES ALL S ON PAGE LOAD
    ********************************************************************************************************************/
    $('.accordionContent2').hide();

});


 

