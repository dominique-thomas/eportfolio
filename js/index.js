let arr = ["about", "services", "portfolio", "contact"];
let scrollOffset = 460;

$(function () {
  $(document).scroll(function () {

    //Animate progress on enter
     let animProgressBars = true;
    if ($(this).scrollTop() >= Math.round($("#proficiencies").position().top - scrollOffset) && animProgressBars) {                        
        $("div.progress").find(".progress-bar").each(function(){
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
          $(".progress-bar").addClass("animated");
        });          
        animProgressBars = false;
    }

    //Animate fun fact div
   if ($(this).scrollTop() >= Math.round($("#portfolio").position().top - scrollOffset)) {
      counterInit();
    } 
  });

  var currentDate = new Date();
  var year = currentDate.getFullYear();
  $("#currentYear").html(year);

  AOS.init();
  generatePortfolio();
});

//Update navbar button color on click
$("a").on("click", function () {
  let id = $(this).attr("id");
  resetActiveBtns();
  $(this).addClass("active");
});

//Reset navbar button colors
const resetActiveBtns = function () {
  arr.forEach(element => {
    $(`#menu-${element}`).removeClass("active");
  });
};

//Generate the portfolio assets
const generatePortfolio = function () {
  let htmlStr = "";

  for (var i = 0; i < data.length; i++) {
    let id = data[i].id;
    let title = data[i].title;
    let year = data[i].year;
    let keywords = data[i].keywords;
    let featuredStar = "";

    htmlStr += `<div class="col-lg-4 col-md-6 portfolio-item" data-tags="${keywords}">
    ${featuredStar}
      <div class="portfolio-wrap">
        
        <a href="projects.html?id=${id}" title="${title}">
        <div class="portfolio-image-container">
          <img src="images/${id}_thumb.jpg" class="img-fluid" alt="${title}">
           <div class="overlay"></div>
        </div>
        <div class="portfolio-info">
        
        <h4>${title}</h4>
        <p>${year}</p>        
        
        </div>
      </div>
      </a>
      </div>`
  }

  $("#portfolioAssets").html(htmlStr);
}

//Contact form Submit button handler
$("#submitBtn").on("click", function () {
  var name = $("#name").val();
  var emailAddress = $("#emailAddress").val();
  var message = $("#message").val();

  var subject = encodeURIComponent("Portfolio");
  var body = encodeURIComponent("Name: " + name + "\nEmail: " + emailAddress + "\nMessage: " + message);

  var mailtoLink = "mailto:dominiquethomas@mailinator.com?subject=" + subject + "&body=" + body;
  window.open(mailtoLink, "_blank");
});

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(","),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  });
}

//Animates the Fun Fact section
const counterInit = function () {
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(",");
  $(".number").each(function () {
    var $this = $(this),
      num = $this.data("number");
    $this.animateNumber({
      number: num,
      numberStep: comma_separator_number_step
    }, 5000);
  });
}

//Filter functionality
$(".filter-option[data-filter='All']").trigger("click");

  $(".filter-option").click(function(event) {
    event.preventDefault(); 
    
    var filter = $(this).data("filter");

    $(".filter-option").removeClass("active");
    $(this).addClass("active");

    if (filter === "All") {
      $(".portfolio-item").fadeIn();
    } else {

      $(".portfolio-item").fadeOut();
      $(".portfolio-item").each(function() {
        var itemTags = $(this).data("tags").split(","); 
        if (itemTags.includes(filter)) {
          $(this).fadeIn();
        }
      });
    }

    $("#dropdownMenuButton").text("Filter by: " + (filter === "All" ?  "All" : filter));
    $(".dropdown-menu").removeClass("show");
  });

  $("#dropdownMenuButton").click(function(event) {
    event.stopPropagation();
    $(".dropdown-menu").toggleClass("show");
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown-menu").removeClass("show");
    }
  });

var scrolled = false;

$(window).on('scroll', function() {
  var portfolioSectionTop = $('#portfolio').offset().top; 
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  if (viewportBottom > portfolioSectionTop && !$('.portfolio-item').hasClass('fade-up')) {
    $('.portfolio-item').each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('fade-up');
      }
    });
  }
});