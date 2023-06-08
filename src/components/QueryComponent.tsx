import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function QueryComponent() {
  return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}