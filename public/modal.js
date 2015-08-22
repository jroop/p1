
/*
 Using the module closure pattern to enclose the javascript
 and not pollute the global namespace with needless vars

 This function is used to open and close the nav menu
 */
(function() {
  var id = 'menu';

  var elm = function(){
    return document.getElementById(id);
  }

  //had to add this as the css would not override what javascript did.
  window.onresize = function(){
    window.matchMedia("(min-width: 800px)").matches ? show() : hide();
  }

  var hide = function() {
    var e = elm();
    e.style.display = 'transition: display 0.5s ease';
    e.style.display = 'none';
  }

  var show = function() {
    var e = elm();
    e.style.display = 'transition: display 0.5s ease';
    e.style.display = 'flex';
  }

  window.Modal = {
    hide: hide,
    show: show
  };

})();