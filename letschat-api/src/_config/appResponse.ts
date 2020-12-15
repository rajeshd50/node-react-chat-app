/**
 * generate a response object
 * @param isSuccess boolean
 * @param data data to send
 * @param message string
 * @param status http status
 */
export const AppResponse = (isSuccess: boolean = true, data: any, message: string, status: number = 200) => {
  return {
    statusCode: status,
    message,
    success: isSuccess,
    data,
  }
}