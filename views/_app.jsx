// This is the custom app we will be using to initialize pages. By using a custom app
// instead of the traditional 'App', we can:
// - Persist layouts between page changes by wrapping the page component,thereby providing a consistent structure for rendering the children
// - Keeping state when navigating pages, because the state maintained by this component is sort of "global".
// - Inject additional data into pages by passing them as props to the page component
// - Import global stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";

const App = (props) => {
  // Destructuring the props object received from the server.
  // children represents the page component that will be passed when you navigate to a
  // route; rest signifies all the other props passed to the page component.
  const { children, ...rest } = props;

  const PageComponent = children;

  // Render the page component and pass in its props
  return <PageComponent {...rest} />;
};
export default App;
