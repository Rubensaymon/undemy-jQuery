
/* verificação de functionamento
$(document).ready(function(){
    $('button').click(function(){
        $('p').css("color","red")
        $('#sumir').hide();
    })
})
*/

// Executa uma função quando o objeto é clicado
// $('id').click(function(){});

// faz o objeto sumir
// $('id').hide();

// manipula o css do objeto
// $('id').css("propriedade","valor");

// forma reduzida
$(function () {
    // slide

    $('#dot01').click(function () {
        $('#div_img01').show();
        $('#div_img02').hide();
        $('#div_img03').hide();
    });
    $('#dot02').click(function () {
        $('#div_img02').show();
        $('#div_img01').hide();
        $('#div_img03').hide();
    });
    $('#dot03').click(function () {
        $('#div_img03').show();
        $('#div_img01').hide();
        $('#div_img02').hide();
    });

    //$('.div_img').css({width:'100%', height:'100%'});

    $('#sumir').click(function () {
        $('#primeiro').hide();
    })
    $('#surgir').click(function () {
        $('#primeiro').show();
    })
    $('#vermelho').click(function () {
        $('#segundo').css("color", "red");
    })
    $('#azul').click(function () {
        $('#segundo').css("color", "blue");
    })
    $('#desaparecer').click(function () {
        $('#terceiro').fadeOut('slow');
        $('#terceiro').delay(2000);
        $('#terceiro').fadeIn('fast');
    })
    $('#aparecer').click(function () {
        $('#terceiro').fadeIn(5000);
        $('#enviar').addClass('redd');
    })
    $('#enviar').click(function () {
        $('#mensagem')
            .css({
                color: 'green',
                border: '2px solid black',
                backgroundColor: 'gray'
            });
        $('#enviar').addClass('green').delay(3000);
        $('#enviar').removeClass('redd');
        $('#mensagem').text("mensagem enviada com sucesso").fadeOut(2000);
    })
});
