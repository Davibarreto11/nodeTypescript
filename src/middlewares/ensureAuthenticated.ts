import { type Request, type Response, type NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '../config/auth'

import AppError from '../errors/AppError'

// interface TokenPayload {
//   iat: number
//   exp: number
//   sub: string
// }

export default function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    verify(token, authConfig.jwt.secret)

    next()
  } catch (err) {
    throw new AppError('Invalid JWT token', 401)
  }
}
