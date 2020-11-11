console.log("inpage Coming");

$(document).ready(function () {
  // set rotation of flash
  TweenMax.set("#newversion", { rotation: 15 })

  $("body").css("visibility", "visible")

  // hide content until after title animation
  $("#content-wrapper").css("display", "none")

  // lettering.js to split up letters for animation
  $("#title-line1").lettering()
  $("#title-line2").lettering()
  $("#title-line3").lettering()

  // TimelineLite for title animation, then start up superscrollorama when complete
  new TimelineLite({ onComplete: initScrollAnimations })
    .from($("#title-line1 span"), 0.4, {
      delay: 1,
      css: { right: "1000px" },
      ease: Back.easeOut,
    })
    .from($("#title-line2"), 0.4, {
      css: { top: "1000px", opacity: "0" },
      ease: Expo.easeOut,
    })
    .append([
      TweenMax.from($("#title-line3 .char1"), 0.25 + Math.random(), {
        css: { top: "-200px", right: "1000px" },
        ease: Elastic.easeOut,
      }),
      TweenMax.from($("#title-line3 .char2"), 0.25 + Math.random(), {
        css: { top: "300px", right: "1000px" },
        ease: Elastic.easeOut,
      }),
      TweenMax.from($("#title-line3 .char3"), 0.25 + Math.random(), {
        css: { top: "-400px", right: "1000px" },
        ease: Elastic.easeOut,
      }),
      TweenMax.from($("#title-line3 .char4"), 0.25 + Math.random(), {
        css: { top: "-200px", left: "1000px" },
        ease: Elastic.easeOut,
      }),
      TweenMax.from($("#title-line3 .char5"), 0.25 + Math.random(), {
        css: { top: "200px", left: "1000px" },
        ease: Elastic.easeOut,
      }),
    ])
    .from("#newversion", 0.4, { scale: 5, autoAlpha: 0, ease: Elastic.easeOut })
    .to($("#title-info"), 0.5, {
      css: { opacity: 0.99, "margin-top": 0 },
      delay: -1,
      ease: Quad.easeOut,
    })
    .to($("#download"), 0.25, { autoAlpha: 1 })

  function initScrollAnimations() {
    $("#content-wrapper").css("display", "block")
    var controller = $.superscrollorama()

    // title tweens
    $(".title-line span").each(function () {
      controller.addTween(
        10,
        TweenMax.to(this, 0.5, {
          css: {
            top: Math.random() * -200 - 600,
            left: Math.random() * 1000 - 500,
            rotation: Math.random() * 720 - 360,
            "font-size": Math.random() * 300 + 150,
          },
          ease: Quad.easeOut,
        }),
        200
      )
    })
    controller.addTween(
      10,
      TweenMax.to($("#title-line1"), 0.75, {
        css: { top: 600 },
        ease: Quad.easeOut,
      }),
      200
    )
    controller.addTween(
      10,
      TweenMax.to($("#title-line2"), 0.75, {
        css: { top: 200 },
        ease: Quad.easeOut,
      }),
      200
    )
    controller.addTween(
      10,
      TweenMax.to(
        $("#title-line3"),
        0.75,
        { css: { top: -100 }, ease: Quad.easeOut },
        200
      )
    )

    // showcase tweens
    controller.addTween(
      "#showcase h1",
      TweenMax.from($("#showcase h1"), 0.75, {
        css: { letterSpacing: 20, opacity: 0 },
        ease: Quad.easeOut,
      })
    )
    controller.addTween(
      "#showcase p",
      TweenMax.from($("#showcase p"), 1, {
        css: { opacity: 0 },
        ease: Quad.easeOut,
      })
    )
    $("#showcase .gallery figure")
      .css("position", "relative")
      .each(function () {
        controller.addTween(
          "#showcase .gallery",
          TweenMax.from($(this), 1, {
            delay: Math.random() * 0.2,
            css: {
              left: Math.random() * 200 - 100,
              top: Math.random() * 200 - 100,
              opacity: 0,
            },
            ease: Back.easeOut,
          })
        )
      })

    // hire tweens
    $("#hire h3")
      .lettering()
      .find("span")
      .css("position", "relative")
      .each(function () {
        controller.addTween(
          "#hire h3",
          TweenMax.from($(this), 0.25, {
            delay: Math.random() * 0.2,
            css: {
              left: Math.random() * 1200 - 600,
              top: Math.random() * 600 - 300,
              opacity: 0,
            },
            ease: Expo.easeOut,
          }),
          200
        )
      })
    controller.addTween(
      "#hire p",
      TweenMax.from($("#hire p"), 0.5, { css: { opacity: 0 } })
    )

    // individual element tween examples
    controller.addTween(
      "#fade-it",
      TweenMax.from($("#fade-it"), 0.5, { css: { opacity: 0 } })
    )
    controller.addTween(
      "#fly-it",
      TweenMax.from($("#fly-it"), 0.25, {
        css: { right: "1000px" },
        ease: Quad.easeInOut,
      })
    )
    controller.addTween(
      "#spin-it",
      TweenMax.from($("#spin-it"), 0.25, {
        css: { opacity: 0, rotation: 720 },
        ease: Quad.easeOut,
      })
    )
    controller.addTween(
      "#scale-it",
      TweenMax.fromTo(
        $("#scale-it"),
        0.25,
        {
          css: { opacity: 0, fontSize: "20px" },
          immediateRender: true,
          ease: Quad.easeInOut,
        },
        { css: { opacity: 1, fontSize: "240px" }, ease: Quad.easeInOut }
      )
    )
    controller.addTween(
      "#smush-it",
      TweenMax.fromTo(
        $("#smush-it"),
        0.25,
        {
          css: { opacity: 0, "letter-spacing": "30px" },
          immediateRender: true,
          ease: Quad.easeInOut,
        },
        { css: { opacity: 1, "letter-spacing": "-10px" }, ease: Quad.easeInOut }
      ),
      0,
      100
    ) // 100 px offset for better timing

    // set duration, in pixels scrolled, for pinned element
    var pinDur = 4000
    // create animation timeline for pinned element
    var pinAnimations = new TimelineLite()
    pinAnimations
      .append(
        TweenMax.from($("#pin-frame-pin h2"), 0.5, {
          css: { marginTop: 0 },
          ease: Quad.easeInOut,
        })
      )
      .append(
        [
          TweenMax.to($("#pin-frame-slide"), 1, { css: { marginLeft: 0 } }),
          TweenMax.to($("#pin-frame-pin"), 1, { css: { marginLeft: "100%" } }),
        ],
        0.5
      )
      .append(
        [
          TweenMax.to($("#pin-frame-wipe"), 0.5, { css: { top: 0 } }),
          TweenMax.from($("#pin-frame-wipe h2"), 0.5, {
            css: { marginTop: "-600px" },
          }),
        ],
        0.5
      )
      .append(
        TweenMax.from($("#pin-frame-bounce"), 5, {
          css: { marginTop: "-100%" },
          ease: Bounce.easeOut,
        }),
        0.5
      )
      .append(
        TweenMax.from($("#pin-frame-color"), 0.25, { css: { opacity: 0 } }),
        0.5
      )
      .append([
        TweenMax.to($("#pin-frame-color"), 0.25, {
          css: { backgroundColor: "blue" },
        }),
        TweenMax.to($("#pin-frame-color h2"), 0.25, {
          css: { color: "orange" },
        }),
      ])
      .append([
        TweenMax.to($("#pin-frame-color"), 0.25, {
          css: { backgroundColor: "green" },
        }),
        TweenMax.to($("#pin-frame-color h2"), 0.25, { css: { color: "red" } }),
      ])
      .append([
        TweenMax.to($("#pin-frame-color"), 0.25, {
          css: { backgroundColor: "yellow" },
        }),
        TweenMax.to($("#pin-frame-color h2"), 0.25, {
          css: { color: "purple" },
        }),
      ])
      .append([
        TweenMax.to($("#pin-frame-color"), 0.25, {
          css: { backgroundColor: "orange" },
        }),
        TweenMax.to($("#pin-frame-color h2"), 0.25, { css: { color: "blue" } }),
      ])
      .append([
        TweenMax.to($("#pin-frame-color"), 0.25, {
          css: { backgroundColor: "red" },
        }),
        TweenMax.to($("#pin-frame-color h2"), 0.25, {
          css: { color: "green" },
        }),
      ])
      .append([
        TweenMax.to($("#pin-frame-color"), 0.25, {
          css: { backgroundColor: "#222438" },
        }),
        TweenMax.to($("#pin-frame-color h2"), 0.25, {
          css: { color: "#FFB000" },
        }),
      ])
      .append(
        TweenMax.to($("#pin-frame-unpin"), 0.5, { css: { top: "100px" } })
      )

    // pin element, use onPin and onUnpin to adjust the height of the element
    controller.pin($("#examples-pin"), pinDur, {
      anim: pinAnimations,
      onPin: function () {
        $("#examples-pin").css("height", "100%")
      },
      onUnpin: function () {
        $("#examples-pin").css("height", "600px")
      },
    })
    controller.pin($("#examples-2"), 3000, {
      anim: new TimelineLite()
        .append(
          TweenMax.fromTo(
            $("#fling-it"),
            2,
            {
              css: { left: -1000, top: 500, rotation: -360 },
              immediateRender: true,
            },
            { css: { left: 2000, top: -600, rotation: 360 } }
          )
        )
        .append(
          TweenMax.fromTo(
            $("#move-it"),
            0.75,
            { css: { left: -200, top: 800 }, immediateRender: true },
            { css: { top: -200 } }
          ),
          -1.5 // offset for better timing
        )
        .append(TweenMax.to($("#move-it"), 0.5, { css: { left: 200 } }))
        .append(TweenMax.to($("#move-it"), 0.5, { css: { top: 0 } }))
        .append(TweenMax.to($("#move-it"), 0.5, { css: { left: 0 } })),
    })

    // parallax example, setting duration ties animation to scroll position
    // you can target a scroll position instead of an element (whose position can change)
    controller.addTween(
      "#examples-parallax",
      new TimelineLite().append([
        TweenMax.fromTo(
          $("#parallax-it-left"),
          1,
          { css: { top: 200 }, immediateRender: true },
          { css: { top: -600 } }
        ),
        TweenMax.fromTo(
          $("#parallax-it-right"),
          1,
          { css: { top: 500 }, immediateRender: true },
          { css: { top: -1250 } }
        ),
      ]),
      1000 // scroll duration of tween
    )

    $("#bring-it").lettering()
    controller.addTween(
      "#bring-it",
      new TimelineLite().append([
        TweenMax.from($("#bring-it .char1"), 1, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char2"), 0.6, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char3"), 1.1, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char4"), 0.7, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char5"), 0.9, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char6"), 1.2, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char7"), 0.6, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
        TweenMax.from($("#bring-it .char8"), 0.8, {
          css: { fontSize: 0 },
          immediateRender: true,
          ease: Elastic.easeOut,
        }),
      ]),
      1200,
      -100 // offset for better timing
    )
  }
})


var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-2821890-9']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
