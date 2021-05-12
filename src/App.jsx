import React, { useEffect, useState } from 'react';

import AppNavigation from './navigation';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [accessToken, setToken] = useState(null);

  useEffect(() => {
    setToken('null');
    setLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return <AppNavigation token={accessToken} />;
}

export default App;
