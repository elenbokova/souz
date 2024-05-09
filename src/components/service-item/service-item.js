import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import "./service-item.scss"

const ServiceItem = ({ img, title, description }) => {

  const data = useStaticQuery(graphql`
    query {
        allFile(filter: {relativePath: {}}) {
            nodes {
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
  `)

  const getImage = (img) => {
    const imageNode = data.allFile.nodes.find(({childrenImageSharp}) => {
      return childrenImageSharp && childrenImageSharp[0] && childrenImageSharp[0].gatsbyImageData.images.fallback.src.includes(img);
    });
  
    const gatsbyImageData = imageNode?.childrenImageSharp[0]?.gatsbyImageData;
    return gatsbyImageData || null;
  };

  let image = getImage(img)

  return (
    <li className="service-item">
      <div className="service-item__image">
        <GatsbyImage image={image} alt={title} />
      </div>
      <h3 className="service-item__title">{title}</h3>
      <ul className="service-item__list">
        {description.map((item, i) => (
          <li className="service-item__point" key={i}>{item}</li>
        ))}
      </ul>
    </li>
  )
}

export default ServiceItem;