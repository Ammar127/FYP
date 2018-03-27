/*
Template Name: Opportunities A Mega Job Board Template
Author: ScriptsBundle
Version: 3.0
Designed and Development by: ScriptsBundle

====================================
[ CSS TABLE CONTENT ]
------------------------------------
    
	
	1.0 - Pre Loader
	2.0 - Counter Up
	3.0 - OUR CLIENTS CAROUSEL
	4.0 - TESTIMONIAL 1
	5.0 - TESTIMONIAL 2
	6.0 - ACCORDIAN
	7.0 - FOOTER REVEAL
	8.0 - SEACRH FIXED
	9.0 - MENU
	10.0 - SCROLL TO TOP
	11.0 - FILE UPLOADER
	
	
-------------------------------------
[ END CSS TABLE CONTENT ]
=====================================
*/
(function($) {
    "use strict";
	
    /*--- PRE LOADER JS ---*/

    window.onload = function() {
        document.getElementById('spinner').style.display = 'none';
    };


    /*--- Counter Up---*/

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

	/*--- OUR CLIENTS CAROUSEL---*/
	
    $(".clients-list").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 6,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 4],
        itemsTabletSmall: false,
        itemsMobile: [479, 2],
    });

	/*--- TESTIMONIAL 1---*/
	
    $("#owl-testimonial").owlCarousel({
        navigation: false, /* Show next and prev buttons*/
        slideSpeed: 600,
        paginationSpeed: 700,
        autoPlay: 5000,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        responsive: true,
        loop: true,
        items: 2

    });

/*--- TESTIMONIAL 2---*/

    $(".owl-testimonial-2").owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        loop: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1]
    });


    /*--- ACCORDIAN---*/

    $('.panel-heading').click(function(e) {
        $('.panel-heading').removeClass('tab-collapsed');
        var collapsCrnt = $(this).find('.collapse-controle').attr('aria-expanded');
        if (collapsCrnt != 'true') {
            $(this).addClass('tab-collapsed');
        }
    });


    /*--- FOOTER REVEAL---*/
	
    $('.fixed-footer.hbs').footerReveal({
        shadow: false,
        zIndex: -101
    });



   /* --- SEACRH FIXED---*/
	
    $(window).scroll(function() {

        var scrollTop = $(window).scrollTop();
        if (scrollTop > 300) {
            $(".search").addClass("navbar-fixed-top");

        } else if (scrollTop < 300) {
            $(".search").removeClass("navbar-fixed-top");
        }

    });

	$(".questions-skills").select2({
        placeholder: "Select Your Skills",
        allowClear: true,
        maximumSelectionLength: 3,
    });

    $(".questions-category").select2({
        placeholder: "Select Post Category",
        allowClear: true,
        maximumSelectionLength: 3,
    });

    $(".select-category ").select2({
        placeholder: "Select Job Category",
        allowClear: true,
        maximumSelectionLength: 3,
    });
    $(".select-location ").select2({
        placeholder: "Select Job Location",
        allowClear: true,
        maximumSelectionLength: 3,
    });

    $(".select-resume").select2({
        placeholder: "Select Job Resume",
        allowClear: true,
    });


    /*--- MENU---*/
	
	$('.mega-menu').megaMenu({
                // DESKTOP MODE SETTINGS
                logo_align          : 'left',    /* align the logo left or right. options (left) or (right)*/
                links_align         : 'left',    /* align the links left or right. options (left) or (right)*/
                socialBar_align     : 'left',    /*align the socialBar left or right. options (left) or (right)*/
                searchBar_align     : 'right',   /*align the search bar left or right. options (left) or (right)*/
                trigger             : 'hover',   /*show drop down using click or hover. options (hover) or (click)*/
                effect              : 'fade',    /*drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)*/
                effect_speed        : 400,       /*drop down show speed in milliseconds*/
                sibling             : true,      /*hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)*/
                outside_click_close : true,       /*hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)*/
                top_fixed           : false,     /*fixed the menu top of the screen. options (true) or (false)*/
                sticky_header       : false,     /*menu fixed on top when scroll down down. options (true) or (false)*/
                sticky_header_height: 200,      /* sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.*/
                menu_position       : 'horizontal',    /* change the menu position. options (horizontal), (vertical-left) or (vertical-right)*/
                full_width          : false,            /*make menu full width. options (true) or (false)*/
                /* MOBILE MODE SETTINGS*/
                mobile_settings     : {
                    collapse            : true,  /*collapse the menu on click. options (true) or (false)*/
                    sibling             : true,  /*hide the others showing drop downs when click on current drop down. options (true) or (false)*/
                    scrollBar           : true,  /*enable the scroll bar. options (true) or (false)*/
                    scrollBar_height    : 400,   /*scroll bar height in px value. this option works if the scrollBar option true.*/
                    top_fixed           : false, /*fixed menu top of the screen. options (true) or (false)*/
                    sticky_header       : false, /*menu fixed on top when scroll down down. options (true) or (false)*/
                    sticky_header_height: 200    /*sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.*/
                }
            });


    /*--- SCROLL TO TOP---*/
	
     $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });


        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });



    /*--- FILE UPLOADER---*/
	
    $('.image-preview-clear').click(function() {
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse");
    });
     /*Create the preview image*/
    $(".image-preview-input input:file").change(function() {
        var img = $('<img/>', {
            id: 'dynamic',
            width: 250,
            height: 200
        });
        var file = this.files[0];
        var reader = new FileReader();
        /*Set preview image into the popover data-content*/
        reader.onload = function(e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);
            img.attr('src', e.target.result);

        }
        reader.readAsDataURL(file);
    });
})(jQuery);




var count  = 0;
    var count2 = 0;
    var count3 = 0
	var count4 = 0;
	var count5 = 0;
    var projTitle = [];
    var projTech = [];
    var projDesc = [];

  
		
		
		function clearAlert(x){
        $("#" + x).html("");
    }
	
		function addSkill(){

        count3++;

        var skill = $("#skillName").val();
        var rate = $("#skillRating").val();

        if(skill == ""){
            $("#skillName").focus();
            $("#skillNameAlert").html("Please enter skill name");
            return false;
        }
        if(rate == ""){
            $("#skillRating").focus();
            $("#skillRatingAlert").html("Please rate your expertise level of this skill set out of 10");
            return false;
        }
        if(rate > 10){
            $("#skillRating").focus();
            $("#skillRatingAlert").html("Please rate your expertise level out of <strong>10</strong>");
            return false;
        }


        var html = "<div class='col-md-4' id='s"+count3+"'><p><b>"+ skill +"</b><span class='pull-right' style='color: red; cursor:pointer;' onclick='removeThisSkill(&#39;"+count3+"&#39;)'><strong>X</strong></span><input type='text' name='skillSet_Name[]' value='"+ skill +"' hidden='' ><input type='text' name='skillSet_Rate[]' value='"+ rate+"' hidden='' > </p><div class='progress'><div class='progress-bar progress-bar-striped' role='progressbar' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100' style='width:"+(rate * 10)+"%'> <span class='sr-only'>80% Complete (success)</span></div></div></div>";
        $("#addskillSet").append(html);

        $("#skillName").val("");
        $("#skillRating").val("");
    }
		function removeThisSkill(x){
			$("#s"+x).remove();
		}
		
		function addProject(){
			count++;
			var title = $("#proj_title").val();
			var tech = $("#proj_technolgies").val();
			var desc  = CKEDITOR.instances.projectDesc.getData();
			
			if(title == ""){
				$("#proj_title").focus();
				$("#projTitleAlert").html("Please provide a suitable project name.");
				return false;
			}
			if(tech == ""){
				$("#proj_technolgies").focus();
				$("#projTechAlert").html("Please mention the technologies used in this project.");
				return false;
			}
			if(desc == "<p>Brief Project Description...</p>"){
				$("#projectDesc").focus();
				$("#projDescAlert").html("Explain your project briefly");
				return false;
			}
	
			projTitle.push(title);
			projTech.push(tech);
			projDesc.push(desc);
	
			var html = "<li id='d" + count + "'><u><h2>" + title + "</h2></u><span class='pull-right' style='color: red; cursor:pointer;' onclick='removeThisProject(&#39;" + title + "&#39;, &#39;" + count + "&#39;)'><strong>X</strong></span><h5><strong>" + tech + "</strong></h5><div class='text-justify'>" + desc + "</div></li>";
	
			$("#addedProjects").append(html);
	
			$("#proj_title").val("");
			$("#proj_technolgies").val("");
			CKEDITOR.instances.projectDesc.setData("Brief Project Description...");
			
	
			//alert(projTitle.length + "\n" + projTech.length + "\n" + projDesc.length);
		}
		function removeThisProject(x, y){

			$("#d" + y).remove();
			var index = projTitle.indexOf(x);
			projTitle.splice(index, 1);
			projTech.splice(index, 1);
			projDesc.splice(index, 1);
		}
		
		function addExperience(){

			count2++;
	
			var company = $("#companyName").val();
			var designation = $("#designation").val();
			var startDate = $("#joinDate").val()
			var endDate = $("#leaveDate").val();
	
			if(company == ""){
				$("#companyName").focus();
				$("#companyNameAlert").html("Please provide company name.");
				return false;
			}
			if(designation == ""){
				$("#designation").focus();
				$("#designationAlert").html("Please mention your job title / designatoin.");
				return false;
			}
			if(startDate == ""){
				$("#joinDate").focus();
				$("#joinDateAlert").html("Please provide joining date.");
				return false;

			}
			if(endDate == ""){
				$("#leaveDate").focus();
				$("#endDateAlert").html("Please provide resignation date.");
				return false;
			}
	
			var html = "<tr id='e"+count2+"'><td>"+ company +"<input type='text' value='" + company + "' hidden='' name='exp_comapny[]'></td><td>" + designation + " <input type='text' value='" + designation + "' hidden='' name='exp_designation[]'> </td><td>" + startDate + " <input type='text' value='" + startDate + "' hidden='' name='exp_startDate[]'></td><td>"+ endDate +" <input type='text' value='" + endDate + "' hidden='' name='exp_endDate[]'> </td><td><i onclick='removeThisExperience(&#39;"+count2+"&#39;)' style='color: red; cursor: pointer;' title='Delete' class='fa fa-trash' aria-hidden='true'></i><td></tr>";
	
			$("#insertExperience").append(html);
			$("#experienceBlock").show();
			
			$("#companyName").val("");
			$("#designation").val("");
			$("#joinDate").val("");
			$("#leaveDate").val("");
		}
		function removeThisExperience(x){
	
			$("#e" + x).remove();
	
		}
		
		function addAchievement(){

			count4++;
	
			var achievement = $("#achievementTitle").val();
	
			if(achievement == ""){
				$("#achievementTitle").focus();
				$("#achievementAlert").html("Please write some achievement.");
				return false;
			}
			
	
			var html = "<tr id='ach"+count4+"'><td>"+ achievement  +"<input type='text' value='" + achievement  + "' hidden='' name='ach_dest[]'></td><td><i onclick='removeThisAchievement(&#39;"+count4+"&#39;)' style='color: red; cursor: pointer;' title='Delete' class='fa fa-trash' aria-hidden='true'></i><td></tr>";
	
			$("#insertAchievement").append(html);
			$("#achievementBlock").show();
			
			$("#achievementTitle").val("");
		}
		function removeThisAchievement(x){
	
			$("#ach" + x).remove();
	
		}
		
		function addProCertifications(){

			count5++;
	
			var certification = $("#proCertification").val();
	
			if( certification == ""){
				$("#proCertification").focus();
				$("#proCertificationAlert").html("Please mention your Certification.");
				return false;
			}
			
	
			var html = "<tr id='proC"+count5+"'><td>"+ certification  +"<input type='text' value='" + certification  + "' hidden='' name='pro_c[]'></td><td><i onclick='removeThisProCertifications(&#39;"+count5+"&#39;)' style='color: red; cursor: pointer;' title='Delete' class='fa fa-trash' aria-hidden='true'></i><td></tr>";
	
			$("#insertProC").append(html);
			$("#proCBlock").show();
			
			$("#proCertification").val("");
		}
		function removeThisProCertifications(x){
	
			$("#proC" + x).remove();
	
		}