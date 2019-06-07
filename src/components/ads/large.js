import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const LargeAds = () => (
    <>
        <StaticQuery

            query={graphql`
                query {
                    nodeAds(drupal_internal__nid: {
                            eq: 425
                        }) {
                        title
                        id
                        field_ads_ads {
                            value
                            processed
                        }
                    }
                }
            `} render={data => (
               <>
                    <iframe width="728" height="90" src={data.nodeAds.field_ads_ads.value} title={data.nodeAds.field_ads_ads.title}></iframe>
               </> 
            )}

        />
    </>
)

export default LargeAds