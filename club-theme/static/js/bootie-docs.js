window.onload = function() {
  var headHeight  = $("nav").height();
  var mainHeight = $("main").height();
  var sideHeight = $("#sidebar").height();
  var footHeight  = $("footer").height();
  var totalHeight   = headHeight + mainHeight + footHeight;
  var w = $(window);

  if (sideHeight > 0 && sideHeight < mainHeight) {
    $(".doc-sidebar").css("height", mainHeight);
    var sideNode = $("#sidebar");
    var scrollStart = 0;
    var scrollStop  = headHeight + mainHeight - sideHeight;

    w.scroll(function() {
      if (w.scrollTop() <= scrollStart) {
        sideNode.css({"position": "fixed"});
      } else if (scrollStart < w.scrollTop() && w.scrollTop() < scrollStop) {
        sideNode.css({"position": "fixed", "top": headHeight + "px"});
      } else if (w.scrollTop() >= scrollStop) {
        var topNext
          = headHeight - (headHeight + sideHeight)
            * (w.scrollTop() - scrollStop) / (totalHeight - scrollStop);
        sideNode.css({
          "position": "fixed", "top": topNext + "px", "bottom": footHeight + "px"
        });
      }
    });
  } 
}