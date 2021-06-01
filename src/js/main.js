// home page
//hero
$("#hero-title").visibility({
  onOnScreen: function () {
    $("#hero-title").transition({
      animation: "slide down in",
      duration: 1500
    });
  }
});
$("#hero-description").visibility({
  onOnScreen: function () {
    $("#hero-description").transition({
      animation: "slide up in",
      duration: 1500
    });
  }
});
$("#hero-main-btn").visibility({
  onOnScreen: function () {
    $('#hero-main-btn').transition({
      animation: "horizontal flip in",
      duration: 1500
    });
  }
});
$("#hero-sub-btn").visibility({
  onOnScreen: function () {
    $('#hero-sub-btn').transition({
      animation: "horizontal flip in",
      duration: 1500
    });
  }
});

//know section
$("#image-block__back").visibility({
  onOnScreen: function () {
    $("#image-block__back").transition({
      animation: "rotate in",
      duration: 1250
    });
  }
});
$("#image-block__front").visibility({
  onOnScreen: function () {
    $("#image-block__front").transition({
      animation: "slide right in",
      duration: 1250
    });
  }
});
$("#know-title").visibility({
  onOnScreen: function () {
    $("#know-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#content-block__items").visibility({
  onOnScreen: function () {
    $("#content-block__items").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
$("#content-block__btn").visibility({
  onOnScreen: function () {
    $("#content-block__btn").transition({
      animation: "horizontal flip in",
      duration: 1250
    });
  }
});
//classes
$("#most-popular-classes").visibility({
  onOnScreen: function () {
    $("#most-popular-classes .class-card__item").transition({
      animation: "slide up in",
      duration: 1250,
      interval  : 400
    });
  }
});
$("#popular-classes-title").visibility({
  onOnScreen: function () {
    $("#popular-classes-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
//video-block
$("#tutorial-video__title").visibility({
  onOnScreen: function () {
    $("#tutorial-video__title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#tutorial-video__container").visibility({
  onOnScreen: function () {
    $("#tutorial-video__container").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
//yoga begin
$("#yoga-image-block__bgr").visibility({
  onOnScreen: function () {
    $("#yoga-image-block__bgr").transition({
      animation: "rotate in",
      duration: 1250
    });
  }
});
$("#palette__item--1").visibility({
  onOnScreen: function () {
    $("#palette__item--1").transition({
      animation: "slide right in",
      duration: 1250
    });
  }
});
$("#palette__item--2").visibility({
  onOnScreen: function () {
    $("#palette__item--2").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
$("#palette__item--3").visibility({
  onOnScreen: function () {
    $("#palette__item--3").transition({
      animation: "slide left in",
      duration: 1250
    });
  }
});
$("#yoga-begin-title").visibility({
  onOnScreen: function () {
    $("#yoga-begin-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#yoga-begin-caption").visibility({
  onOnScreen: function () {
    $("#yoga-begin-caption").transition({
      animation: "slide down in",
      duration: 1750
    });
  }
});
$("#yoga-begin-list").visibility({
  onOnScreen: function () {
    $("#yoga-begin-list").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
$("#yoga-begin-btn").visibility({
  onOnScreen: function () {
    $("#yoga-begin-btn").transition({
      animation: "horizontal flip in",
      duration: 1250
    });
  }
});
//slider section
$("#home-slider-icon").visibility({
  onOnScreen: function () {
    $("#home-slider-icon").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#home-slider-title").visibility({
  onOnScreen: function () {
    $("#home-slider-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#home-slider-container").visibility({
  onOnScreen: function () {
    $("#home-slider-container").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
//trainer section
$("#trainer-title").visibility({
  onOnScreen: function () {
    $("#trainer-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#trainer-card-container").visibility({
  onOnScreen: function () {
    $("#trainer-card-container .trainer-card-item").transition({
      animation: "slide up in",
      duration: 1250,
      interval  : 400
    });
  }
});
//working hours
$("#work-hours-title").visibility({
  onOnScreen: function () {
    $("#work-hours-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#work-hours-caption").visibility({
  onOnScreen: function () {
    $("#work-hours-caption").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#work-hours-list").visibility({
  onOnScreen: function () {
    $("#work-hours-list").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
$("#work-hours-btn").visibility({
  onOnScreen: function () {
    $("#work-hours-btn").transition({
      animation: "slide right in",
      duration: 1250
    });
  }
});
// news from the blog
$("#blog-news-title").visibility({
  onOnScreen: function () {
    $("#blog-news-title").transition({
      animation: "slide down in",
      duration: 1250
    });
  }
});
$("#blog-news-container").visibility({
  onOnScreen: function () {
    $("#blog-news-container").transition({
      animation: "fly right in",
      duration: 1250
    });
  }
});
//bottom waves
$("#bottom-waves-icon").visibility({
  onOnScreen: function () {
    $("#bottom-waves-icon").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});
$("#bottom-waves-title").visibility({
  onOnScreen: function () {
    $("#bottom-waves-title").transition({
      animation: "slide up in",
      duration: 1250
    });
  }
});

//swiper slide activate
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});