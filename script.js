// jQuery plugin inspired by :
// http://stackoverflow.com/questions/918792/use-jquery-to-change-an-html-tag
// Thanks Orwellophile: http://stackoverflow.com/users/912236/orwellophile

/*$.extend({
    replaceTag: function (currentElem, newTagObj, keepProps) {
        var $currentElem = $(currentElem);
        var i, $newTag = $(newTagObj).clone();
        if (keepProps) {//{{{
            newTag = $newTag[0];
            newTag.className = currentElem.className;
            $.extend(newTag.classList, currentElem.classList);
            $.extend(newTag.attributes, currentElem.attributes);
        }//}}}
        $currentElem.wrapAll($newTag);
        $currentElem.contents().unwrap();
        // return node; (Error spotted by Frank van Luijn)
        return this; // Suggested by ColeLawrence
    }
});

$.fn.extend({
    replaceTag: function (newTagObj, keepProps) {
        // "return" suggested by ColeLawrence
        return this.each(function() {
            jQuery.replaceTag(this, newTagObj, keepProps);
        });
    }
});*/

var $clone;

function processImages(elem) {

    var src = $(elem).attr('src');
    
    $('#imageHolder').show();

    if (src) {
        $('#imageHolder').append('<img src="' + src + '"/>');
    }
}

function cleanhtml() {

	new Clipboard('.btn');

    $clone = $('#textbox').clone();

	$('#textbox').fadeOut(0);

    $('#textbox')
    .find('*')
    .each(function(index, elem) {

        if (this.nodeName === "IFRAME") {
            console.log('iFrame');
            $(this).replaceWith(function() {
                return $('<' + this.nodeName + '>');
            })
            $(this).append($(this).contents().find('*'));

            return;
        }

        else {

            if (this.nodeName === "IMG") {
                processImages(this);
            }

            $(elem).replaceWith(function () {

                if( this.nodeName == "IMG" ) {
                    var src = $(this).attr('src');
                    console.log(src);
                }

                return $('<' + this.nodeName + '>').append($(this).contents());
            });
        }
        
    });

	$('#textbox').fadeIn(1000);
	$('.btn').show();
};

function reset() {
    $('#textbox').html('');
    $('.btn').hide();
}

function unClean() {
    $('#textbox').html($clone);
}