import { useState, useEffect, useCallback } from "react"

const QUOTE_API_URL = 'https://api.quotable.io/random'

interface QuoteData {
    content: string
    author: string
}

function useFetchQuote() {
    const [quoteData, setQuoteData] = useState<QuoteData>()
    const [loading, setLoading] = useState<boolean>(false)
    const [quoteDataError, setQuoteDataError] = useState<string | null>(null)

    const fetchQuote = useCallback(() => {
        setLoading(true)
        fetch(QUOTE_API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch quote. Status: ' + response.status + response.statusText)
                }
                return response.json()
            })
            .then((data) => {
                const { content, author } = data
                setQuoteData({ content, author })
                setLoading(false)
            })
            .catch((error) => {
                setQuoteDataError(error.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetchQuote()
    }, [fetchQuote])

    return { quoteData, fetchQuote, loading, quoteDataError}
}

export default useFetchQuote