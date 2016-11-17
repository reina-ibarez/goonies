$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
