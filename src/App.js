import { Dashboard } from 'components/Dashboard';
import dotenv from 'dotenv';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

dotenv.config();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
