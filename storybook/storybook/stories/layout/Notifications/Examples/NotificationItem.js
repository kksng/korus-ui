import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 1,
        icon: 'success',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        delay: 30,
        color: 'danger',
      }],
    };
  }

  handleClose = (id) => {
    const { items } = this.state;
    this.setState({ items: items.filter((item, index) => index !== id) });
  };

  render() {
    const { items } = this.state;

    return (
      <L.Div className="snackbar-container">
        <L.Notifications items={items} onClose={this.handleClose} />
      </L.Div>
    );
  }
}
