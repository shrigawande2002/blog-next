import "server-only";
import { SignJWT } from "jose";
import { cookies } from 'next/headers'
const secrateKey = process.env.SESSION_SECRATE;
const encodedKey = new TextEncoder().encode(secrateKey);

export async function encrypt(payload) {
    return new SignJWT(payload).
        setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(encodedKey);  
    
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ["HS256"] });
        return payload;
        
    } catch (err) {
        console.log("Failed to decrypt session", err);
    }
    
}

export async function createSession(userID) {

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({ userID, expiresAt });
    const cookiesStore = await cookies(); 
    
    cookiesStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/"
    });
    
}