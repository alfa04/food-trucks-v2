import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import EReader from "./components/e-reader-frame/EReader";


const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <EReader/>
        </QueryClientProvider>
    )
}