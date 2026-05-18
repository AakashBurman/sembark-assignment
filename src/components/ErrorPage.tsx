import type { ErrorPageProps } from "../types/components";

const ErrorPage = ({
  message = "Something went wrong.",
  onRetry,
}: ErrorPageProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 px-4 text-center">
      <div>
        <h1 className="text-7xl font-bold tracking-tight text-black">Oops!</h1>

        <p className="mt-4 max-w-md text-lg text-gray-600">{message}</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => globalThis.location.reload()}
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Refresh
          </button>

          {onRetry && (
            <button
              onClick={onRetry}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
