$(document).ready(function () {
    $('.cart-quantity-input').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.cart-quantity-input').val(parseInt($('.cart-quantity-input').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.cart-quantity-input').val(parseInt($('.cart-quantity-input').val()) - 1);
        if ($('.cart-quantity-input').val() == 0) {
            $('.cart-quantity-input').val(1);
        }
    });
});
