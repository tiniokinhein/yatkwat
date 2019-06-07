import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const LargeAds = ({index}) => (
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
                        }
                    }
                }
            `} render={data => (
               <>
                    <p key={data.nodeAds.id} dangerouslySetInnerHTML={{__html: data.nodeAds.field_ads_ads.value}}/>
               </> 
            )}

        />
    </>
)

export default LargeAds