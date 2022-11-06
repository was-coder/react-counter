import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="alert-div">
      <h2>Something went wrong.</h2>
      <h3 className="h3-bug">Note: Bug is bugging you...</h3>
      <pre>{error.message}</pre>
      <button className="btn error-btn" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

function Bomb({ value }) {
  if (value === "error") {
    throw new Error("💥 THERE IS AN ERROR HERE 💥");
  }

  if (value !== "error") {
    return `Please type error in the text field not ${value}`;
  }
  return null;
}

function ErrorApp() {
  const [value, setValue] = React.useState("");
  const usernameRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Error Boundary</title>
        <meta
          name="description"
          content="This test the error boundary of the counter application"
        />
        <link rel="canonical" href="/error" />
      </Helmet>
      <div className="container">
        <label>
          {`Error Message: `}
          <input
            placeholder={`Type "error"`}
            value={value}
            className="error-input"
            onChange={(e) => setValue(e.target.value)}
            ref={usernameRef}
          />
        </label>
        <div>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              setValue("");
              usernameRef.current.focus();
            }}
            resetKeys={[value]}
          >
            <Bomb value={value} />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default ErrorApp;

// export default ErrorBoundary;

// import { Helmet } from "react-helmet-async";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null, errorInfo: null };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       error: error,
//       errorInfo: errorInfo,
//     });
//     // You can also log error messages to an error reporting service here
//   }

//   render() {
//     if (this.state.errorInfo) {
//       return (
//         <>

// {
/* <div className="container error-boundary">
            >
//               {this.state.error && this.state.error.toString()}
//               <br />
//               {this.state.errorInfo.componentStack}
//             </details> */
// }
//           </div>
//         </>
//       );
//     }
//     return this.props.children;
//   }
// }
