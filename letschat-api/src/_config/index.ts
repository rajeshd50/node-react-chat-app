/**
 * hwt constants
 */
export const jwtConstants = {
  secret: 'LwqRm6Ac7ms7ogOkYbV0pzg3FY77hFFi',
  expiresIn: '30d'
};

/**
 * bcrypt salt rounds
 */
export const bcryptConstants = {
  salt: 4,
}

/**
 * server url
 */
export const serverUrl = 'http://localhost:4000/'
/**
 * file upload directory
 */
export const fileUploadDestination = 'uploads'

/**
 * socket events
 */
export const SOCKET_EVENTS = {
  MESSAGE: 'SOCKET_MESSAGE',
  FRIENDS: 'SOCKET_FRIENDS',
}