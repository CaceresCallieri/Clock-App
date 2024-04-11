import IconRefresh from '../assets/common/icon-refresh.svg?react'

import useFetchQuote from '../hooks/useFetchQuote'

const QuoteContainer = () => {
    const { quoteData, fetchQuote, loading, quoteDataError } = useFetchQuote()

    if (quoteDataError) {
        return <p>Error: {quoteDataError}</p>
    }

    return (
        <div className="quote-container">
            <div className="quote-and-button">
                <p className="quote">"{quoteData?.content}"</p>
                <button
                    onClick={fetchQuote}
                    className={`${loading ? 'loading' : ''}`}
                    disabled={loading}
                >
                    < IconRefresh />
                </button>
            </div>
            <h4 className="author">{quoteData?.author}</h4>
        </div>
    )
}

export default QuoteContainer