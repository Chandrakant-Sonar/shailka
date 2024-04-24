import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';

import slide_image_1 from '../../data/amazonwebservices-original-wordmark.svg';
import slide_image_2 from '../../data/argocd-original-wordmark.svg';
import slide_image_3 from '../../data/azure-original-wordmark.svg';
import slide_image_4 from '../../data/docker-original-wordmark.svg';
import slide_image_5 from '../../data/elixir-original-wordmark.svg';
import slide_image_6 from '../../data/go-original-wordmark.svg';
import slide_image_7 from '../../data/googlecloud-original-wordmark.svg';
import slide_image_8 from '../../data/java-original-wordmark.svg';
import slide_image_9 from '../../data/javascript-original.svg';
import slide_image_10 from '../../data/nextjs-original-wordmark.svg';
import slide_image_11 from '../../data/nodejs-original-wordmark.svg';
import slide_image_12 from '../../data/python-original-wordmark.svg';
import slide_image_13 from '../../data/polygon-original.svg';
import slide_image_14 from '../../data/react-original-wordmark.svg';
import slide_image_15 from '../../data/rust-plain.svg';
import slide_image_16 from '../../data/terraform-original-wordmark.svg';

class MyCarousel extends React.Component {
  state = {
    images: [
      slide_image_1, slide_image_2, slide_image_3, slide_image_4, 
      slide_image_5, slide_image_6, slide_image_7, slide_image_8, 
      slide_image_9, slide_image_10, slide_image_11, slide_image_12, 
      slide_image_13, slide_image_14, slide_image_15, slide_image_16
    ]
  }

  render() {
    return (
      <Carousel autoPlay infiniteLoop>
        {this.state.images.map((post, index) => (
          <div key={index}>
            <img src={post} />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default MyCarousel;
