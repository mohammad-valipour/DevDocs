import jwt from 'jsonwebtoken';

export function createToken(userID: string) {
    return jwt.sign({userID}, process.env.JWT_SECRET!, {expiresIn: '7d'});
}

