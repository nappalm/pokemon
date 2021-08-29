import { Router, Location } from '@reach/router';
import { Home } from 'pages';

const Pages = () => (
  <Location>
    {({ location }) => {
      window.scrollTo(0, 0);
      return (
        <Router location={location}>
          <Home path="/" />
        </Router>
      );
    }}
  </Location>
);

export default Pages;
