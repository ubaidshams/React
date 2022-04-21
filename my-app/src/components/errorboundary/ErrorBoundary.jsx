import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: "red" }}>Something went wrong!!!!....</h1>;
    } else {
      return this.props.children;
    }
  }
}
