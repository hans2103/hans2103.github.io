document.addEventListener("DOMContentLoaded", function() {

    /**
     * inject .svg images
     */
    var mySVGsToInject = document.querySelectorAll('img.inject-me');
    SVGInjector(mySVGsToInject);

});