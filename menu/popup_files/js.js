$(function(){
		   
		   
    $('.datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
	  minDate: 0,
	  dateFormat: 'dd.mm.yy'
    });
	
	

	
	
});


jQuery(document).ready(function ($) {
    if($('input[type=radio][name=payment]:checked').val() == 'PayKeeper'){
        $('input[type=checkbox][name=payment_bn]').attr('hidden', false);
        $('#payment_bh').css('display','block');
    }
    else if($('input[type=radio][name=payment]:checked').val() == 'card'){
        $('input[type=checkbox][name=payment_bn]').attr('hidden', true);
        $('input[type=checkbox][name=payment_bn]').attr('checked', false);
        $('#payment_bh').css('display','none');
    }
    $('input[type=radio][name=payment]').change(function () {
       if(this.value == 'PayKeeper'){
           $('input[type=checkbox][name=payment_bn]').attr('hidden', false);
           $('#payment_bh').css('display','block');
       }
       else if(this.value == 'card'){
           $('input[type=checkbox][name=payment_bn]').attr('hidden', true);
           $('input[type=checkbox][name=payment_bn]').attr('checked', false);
           $('#payment_bh').css('display','none');
       }
    });
});



setTimeout(function() {
			$.ajax({  
                type: 'POST',  
                url: '/load/online.php',  
                cache: false,  
				timeout: 30000,
                success: function(html){                 
                   // $('#j_content').html(html);
                },
				error: function(){					
					//$('#j_content').html('');
					//alert('Сервер не отвечает, попробуйте снова. 4');  
				} 
            });
}, 55000);