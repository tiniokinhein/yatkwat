import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'

// const LargeAds = () => (
//     <>
//         <StaticQuery

//             query={graphql`
//                 query {
//                     nodeAds(drupal_internal__nid: {
//                             eq: 425
//                         }) {
//                         title
//                         id
//                         field_ads_ads {
//                             value
//                             processed
//                         }
//                     }
//                 }
//             `} render={data => (
//                <>
//                     {/* <iframe 
//                         width="728" 
//                         height="90" 
//                         src={data.nodeAds.field_ads_ads.value} 
//                         title={data.nodeAds.field_ads_ads.title}
//                         id="5cfa6eec8012b"
//                         marginwidth="0" 
//                         marginheight="0" 
//                         vspace="0" 
//                         hspace="0" 
//                         allowtransparency="true" 
//                         allowfullscreen="true" 
//                         style={{border: 'medium none', padding: '0', margin: '0'}}
//                         frameborder="0"
//                         scrolling="no"
//                         data-cfasync="true" 
//                         type="text/javascript"
//                         sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-same-origin"
//                     ></iframe> */}

//                     <script data-cfasync="true" type="text/javascript" src={data.nodeAds.field_ads_ads.value} />

//                </> 
//             )}

//         />
//     </>
// )

const X = `
    <script id="myScript" data-cfasync="false" type="text/javascript" src="https://www.greatdexchange.com/a/display.php?r=2149187"></script> 
`

class LargeAds extends React.Component {

    componentDidMount() {
        const script = document.getElementById('myScript').innerHTML;
        window.eval(script);
    }

    render() {
        return(
            <div dangerouslySetInnerHTML={{__html: X}}></div>
        )
    }
}

export default LargeAds