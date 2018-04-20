// JavaScript Document

/*

	<div class="card">
                <div class="card-image">
                    <img  src="img/coa.png" class="card-img-top" >
                    
                </div><!-- card image -->
                
              <div class="card-content">
                    <span class="card-title">Computer Architecture</span>                    
<button style="visibility: hidden;" type="button" id="show" class="btn btn-custom pull-right" aria-label="Left Align">                        <i hidden="true" class="fa fa-ellipsis-v"></i>
                    </button>
              </div><!-- card content -->
                <div class="card-action">
                   <a href="https://drive.google.com/open?id=0B1ndzAxvkoMzYi1mRlNLbDlpSnc" target="_blank">Books</a>
                    <a href="https://drive.google.com/open?id=0B1ndzAxvkoMzSlRnRkpKMTZZMGc" target="_blank">Notes</a>  
                </div><!-- card actions -->
                <div class="card-reveal">
                    <span class="card-title">Card Title</span> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div><!-- card reveal -->
            </div>
            
         

*/


$(document).ready(function()
{
	$('footer a').click(function(){
		
		var link={fb:'http://facebook.com/Akshay7924',
				  insta:'https://instagram.com/mr.akin.o',
				  linkid:'"https://www.linkedin.com/in/akshay-kumar-a08098127',
				  email:'mailto:theakinapps@gmail.com'
				 };
		var socialName="";
		var href=this.href;
		switch(href)
			{
				case	link.fb:
					socialName="FB";
					break;
				case	link.insta:
					socialName="INSTA";
					break;
				case	link.linkid:
					socialName="LINKEDIN";
					break;
				case	link.email:
					socialName="EMAIL";
					break;
			}
		console.log(href+socialName);
		ga('send',{
			hitType: 'event',
  eventCategory: 'SocialButtons',
  eventAction: 'Click',
  eventLabel: socialName
		})
	});
	
	//start heart animation after 1s
	setTimeout(heartAnimation(),1000);
			   
});

	function heartAnimation()
	{
		var flag=true;
		setInterval(function(){
			var $icon=$('.heart-icon');
			$icon.css('opacity',flag?0.7:1);
			//$icon.css('width',flag?($icon.css('width')-10):($icon.css('width')+10));
			flag=!flag;
		},500);
	}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
 $("a").on('click', function(event) {

    if (this.hash !== "") {		//preventing default behaviour
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
