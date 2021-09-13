import { Dashboard } from 'components/Dashboard';
import dotenv from 'dotenv';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
// import { theme } from '@tops/global_config'
import theme from 'borrarConTopsComp/theme';

const queryClient = new QueryClient();

dotenv.config();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Dashboard />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
