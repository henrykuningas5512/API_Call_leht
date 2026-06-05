type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="alert alert-danger text-center">{message}</div>;
}

export default ErrorMessage;
