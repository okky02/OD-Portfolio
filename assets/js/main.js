/**
 * Template Name: Personal - v2.5.1
 * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

function refreshPage() {
  window.location.reload();
}

!(function ($) {
  "use strict";

  // Nav Menu
  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if (hash == "#header") {
          $("#header").removeClass("header-top");
          $("#rocket").show();
          $("section").removeClass("section-show");
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }
          return;
        }

        if (!$("#header").hasClass("header-top")) {
          $("#header").addClass("header-top");
          setTimeout(function () {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
            $("#rocket").hide();
          }, 350);
        } else {
          $("section").removeClass("section-show");
          $(hash).addClass("section-show");
          $("#rocket").hide();
        }

        // Fix Particle Position
        $("#particles-js").css({
          position: "fixed",
          top: "0",
          left: "0",
        });

        $("html, body").animate(
          {
            scrollTop: 0,
          },
          350
        );

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Animation Typed Js
  $(document).ready(function() {
    var typed = new Typed(".typed", {
      strings: ["Web Developer", "Student"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  });
  

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $("#header").addClass("header-top");
      $(".nav-menu .active, .mobile-nav .active").removeClass("active");
      $(".nav-menu, .mobile-nav")
        .find('a[href="' + initial_nav + '"]')
        .parent("li")
        .addClass("active");
      setTimeout(function () {
        $("section").removeClass("section-show");
        $(initial_nav).addClass("section-show");
        $("#rocket").hide();
      }, 350);
    }
  }

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Certificates Company Modal
  $(document).on("click", ".link-sertif-work", function () {
    var imgSrc = $(this).attr("data-img");
    var titleText = $(this).attr("data-title");
    $("#imageCertificatesCompany").attr("src", imgSrc);
    $("#labelCertificatesCompany").text(titleText);
  });

  // Certificates Modal
  $(document).on("click", ".certificate-item", function () {
    var imgSrcCertificates = $(this).attr("data-img");
    $("#imageCertificates").attr("src", imgSrcCertificates);
  });

  // Certificates Carousel
  $(".certificates-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Confirmation Contact Modal
  var targetUrl = "";

  $(document).on("click", ".social-link", function () {
    targetUrl = $(this).attr("href");
    var titleText = $(this).attr("data-title");
    $("#labelConfirmation").text(titleText);
  });

  $(document).on("click", "#yesButton", function () {
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  });

  // Animasi Form Contact
  $(".form-group input, .form-group textarea").on("focus", function () {
    $(".form-group input, .form-group textarea").removeClass("active");
    $(this).addClass("active");
  });

  $(".form-group input, .form-group textarea").on("blur", function () {
    $(this).removeClass("active");
  });

  // Scroll
  $(document).ready(function () {
    var scrollTopBtn = $("#scrollTopBtn");

    function toggleScrollTopBtn() {
      var scrollPosition = $(window).scrollTop();
      var headerHeight = $("#header").outerHeight();

      if (scrollPosition > headerHeight) {
        scrollTopBtn.fadeIn();
      } else {
        scrollTopBtn.fadeOut();
      }
    }

    $(window).on("scroll", function () {
      toggleScrollTopBtn();
    });

    scrollTopBtn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });

    toggleScrollTopBtn();
  });

})(jQuery);
