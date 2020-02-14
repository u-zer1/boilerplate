import React from 'react';

class DocumentTitle extends React.Component {
  componentDidMount() {
    this.updateTitle();
  }

  updateTitle = () => {
    document.title = this.props.title;
  };

  render() {
    const { children } = this.props;

    if (!children) {
      return null;
    }
    return children;
  }
}
export default DocumentTitle;