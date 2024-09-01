/* eslint-disable react/prop-types */


function CustomErrorBoundaryUI({error, resetErrorBoundary}) {
  return (
    <div className='w-screen h-screen grid place-content-center p-4'>
    <div role="alert" className="alert alert-error">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-info h-6 w-6 shrink-0">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>Error: {error?.message}</span>
    <div>
      <button onClick={resetErrorBoundary} className="btn btn-sm btn-warning">Accept</button>
    </div>
  </div>
  </div>
  )
}

export default CustomErrorBoundaryUI;
