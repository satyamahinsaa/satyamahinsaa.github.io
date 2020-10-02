// Pada saat event di klik
$('.page-scroll').on('click', function (e) {

    // Ambil isi dari href
    var tujuan = $(this).attr('href');
    // Tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

    e.preventDeafult();
});