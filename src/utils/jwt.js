import { sign as signLib, verify as verifyLib } from 'jsonwebtoken';

export async function verify(token, secret) {
  return new Promise((resolve, reject) => {
    verifyLib(token, secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
}

export async function sign(payload, secret) {
  return new Promise((resolve, reject) => {
    signLib(payload, secret, {
    }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
