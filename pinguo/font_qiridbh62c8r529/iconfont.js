;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-Hook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M333.425394 917.557736 0.020978 579.806315 0.020978 367.742479l333.404416 337.860914L919.337777 111.955838l104.635105 106.030895L333.425394 917.557736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daohanglangengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M964.155077 452.923077 571.076923 452.923077 571.076923 59.844923c0-32.630154-26.446769-59.076923-59.076923-59.076923s-59.076923 26.446769-59.076923 59.076923L452.923077 452.923077 59.844923 452.923077c-32.630154 0-59.076923 26.446769-59.076923 59.076923s26.446769 59.076923 59.076923 59.076923L452.923077 571.076923l0 393.078154c0 32.630154 26.446769 59.076923 59.076923 59.076923s59.076923-26.446769 59.076923-59.076923L571.076923 571.076923l393.078154 0c32.630154 0 59.076923-26.446769 59.076923-59.076923S996.785231 452.923077 964.155077 452.923077z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gougou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M858.914104 512.00921c0-191.128015-155.488307-346.615299-346.614276-346.615299s-346.614276 155.487284-346.614276 346.615299c0.01535 191.124945 155.509796 346.614276 346.629625 346.614276l0.029676 0C703.441147 858.623485 858.914104 703.134155 858.914104 512.00921zM896.89616 512.00921c0 212.068953-172.514075 384.594285-384.551306 384.594285l0-18.990516-0.029676 18.990516c-212.060767 0-384.596332-172.525332-384.611681-384.594285 0-212.069977 172.528402-384.595308 384.597355-384.595308C724.367759 127.413901 896.89616 299.939233 896.89616 512.00921zM697.744401 376.311645c7.41897 7.41897 7.41897 19.434631 0 26.853601L439.778118 661.131529 326.870606 548.226063c-7.41897-7.41897-7.41897-19.438725 0-26.856671 7.41897-7.41897 19.436678-7.41897 26.855648 0l86.051865 86.051865 231.110635-231.109612C678.307723 368.892675 690.325431 368.892675 697.744401 376.311645z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M149.952 149.952c-199.936 199.968-199.936 524.16 0 724.096 199.968 199.936 524.16 199.936 724.096 0 199.936-199.968 199.936-524.16 0-724.096-199.968-199.936-524.16-199.936-724.096 0z m696.16 196.928L422.528 770.464a41.12 41.12 0 0 1-57.984 0l-227.2-227.2a41.12 41.12 0 0 1 0-57.952 41.12 41.12 0 0 1 58.016 0l198.176 198.176L788.128 288.96a41.12 41.12 0 0 1 57.984 0 41.12 41.12 0 0 1 0 57.92z" fill="#37C4B1" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)