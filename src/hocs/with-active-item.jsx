import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this.itemEnterHandler = this.itemEnterHandler.bind(this);
      this.itemLeaveHandler = this.itemLeaveHandler.bind(this);
    }

    itemEnterHandler() {
      this.setState({
        isActive: true
      })
    }

    itemLeaveHandler() {
      this.setState({
        isActive: false
      })
    }

    render() {
      return <Component
        {...this.props}
        isActive={this.state.isActive}
        activeItem={this.state.activeItem}
        onEnter={this.itemEnterHandler}
        onLeave={this.itemLeaveHandler}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
}

export default withActiveItem;
