import React from "react";

export default class Application extends React.Component {
  render() {
    const { name, ...rest } = this.props;
    return (
      <div>
        <div data-application-name={name} {...rest} />
      </div>
    );
  }
}
