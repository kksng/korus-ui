import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: -1,
    };
  }

  render() {
    const { rating } = this.state;

    return (
      <L.Rating
        sizeRem={4}
        rating={rating}
        onRatingChange={(ratingValue) => {
          this.setState({
            rating: ratingValue,
          });
        }
        }
      />
    );
  }
}
