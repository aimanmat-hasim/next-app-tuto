'use client';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <div>
      <p>An unexpected error has occured.</p>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  )
}

export default ErrorPage
