/**
 * extract error message from server response 
 * @param error any
 * @param defaultMessage string
 */
export const extractErrorMessage = (error: any, defaultMessage = 'Please try again') => {
  if (typeof error === 'string') {
    return error
  } else {
    if (error && error.data && error.data.length) {
      return error.data[0].message;
    } else if (error && error.data && error.data.message) {
      return error.data.message
    } else if (error && error.message) {
      return error.message
    } else {
      return defaultMessage
    }
  }
}
