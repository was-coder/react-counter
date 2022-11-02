import React from "react";
import { Helmet } from "react-helmet-async";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <Helmet>
            <title>Error Boundary</title>
            <meta
              name="description"
              content="This shows the error boundary of the counter application"
            />
          </Helmet>

          <div className="container error-boundary">
            <h2>Something went wrong.</h2>
            <h3 className="h3-bug">
              Note: Bug is bugging you... check details below
            </h3>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
