import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
        
        <script data-cfasync="false" type="text/javascript" src="https://www.greatdexchange.com/a/display.php?r=2149187"></script>


        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents} 
        { /* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */ } 
        <script src = "https://code.jquery.com/jquery-3.3.1.slim.min.js" />
        <script dangerouslySetInnerHTML = {
            {
                __html: `
                    (function ($) {
                      'use strict';

                      var $window = $(window);

                      // :: Sticky Active Code
                      $window.on('scroll', function () {
                        if ($window.scrollTop() > 50) {
                          $('.header-area').addClass('sticky');
                        } else {
                          $('.header-area').removeClass('sticky');
                        }
                      });

                    })(jQuery);
                `,
            }
        }/> 
      </body> 
    </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}