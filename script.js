// jQuery plugin inspired by :
// http://stackoverflow.com/questions/918792/use-jquery-to-change-an-html-tag
// Thanks Orwellophile: http://stackoverflow.com/users/912236/orwellophile

$.extend({
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
});

function cleanhtml() {

	new Clipboard('.btn');

	$('#textbox').fadeOut(0);

	$('#textbox span').each(function() {
		if( $(this).css('font-style') == 'italic') {

			$(this).replaceTag('<em>', false);
		}

		if( $(this).css('font-weight') > '400') {

			$(this).replaceTag('<strong>', false);
		}
	});
	
	$('#textbox *')
	.removeAttr('class style dir data id');

	$('#textbox').fadeIn(1000);
	$('.btn').show();
};