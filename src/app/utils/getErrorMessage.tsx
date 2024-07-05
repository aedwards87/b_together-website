const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof SyntaxError) {
    message = 'Something went wrong, please try again.';
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = JSON.stringify(error);
  } else {
    message = 'Something went wrong' + JSON.stringify(error) + error;
  }

  return message;
};

export default getErrorMessage;
