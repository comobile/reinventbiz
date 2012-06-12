$(function(){



   $("#mktForm_1074").validate({
		rules: {
			Email: {
				required: true,
				email: true
			},
			FirstName: { notEqual: "First name *" },
			LastName: { notEqual: "Last name *" },
            Title: { notEqual: "Title *" },
            Company: { notEqual: "Organization or affiliation *" },
            UserComments__c: { notEqual: "Why do you want to participate in the event? (250 words max.)" }
        }
   });

    jQuery.validator.addMethod("notEqual", function(value, element, param) {
      return this.optional(element) || value != param;
    }, "Please specify a different (non-default) value");

   $('input').each(function(){
    $(this).focus(function(){
        if ($(this).val() == $(this)[0].title){
            $(this).removeClass("defaultTextActive");
            $(this).val("");
        }
    });
    $(this).blur(function(){
        if ($(this).val() == ""){
            $(this).addClass("defaultTextActive");
            $(this).val($(this)[0].title);
        }
    });
   });
   $('textarea').each(function(){
    $(this).focus(function(){
        if ($(this).val() == $(this)[0].title){
            $(this).val("");
        }
    });
    $(this).blur(function(){
        if ($(this).val() == ""){
            $(this).val($(this)[0].title);
        }
    });
   });

   $('.allergies').change(function() {
        if($(this).val() == 'Yes'){
            $('#explain').slideDown();
        } else {
            $('#explain').slideUp();
        }
    });
});
