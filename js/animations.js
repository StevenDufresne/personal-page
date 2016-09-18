var Animator = {
	start: function () {
		var self = this;

		$(window).scroll(function () {

		   $("[data-animate-trigger]").each(function () {
		      if (self.isInView(this) === true) {
		      	var $this = $(this).find("[data-animate]")
		          $this.addClass("animated " + $this.data("animate"))
		      }
		   });


		});

	},
	isInView: function (elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));	
	}
}
	

Animator.start();



	
