import jwt, { JwtPayload } from "jwt-decode";

/**
 * Validation interface
 */
interface Validation {
  validateEmail(email: string): boolean;
  validatePassword(password: string): boolean;
  validateJwt(token: string): boolean;
  validateObject(data: any): boolean;
  validateIsEmpty(data: any): boolean;
}

/**
 * Validation set used to perform all forms of validations
 *  across simfiny components
 */
class ValidationSet implements Validation {
  /**
   * Validates email
   * @param email
   * @returns true if email
   */
  validateEmail(email: string): boolean {
    if (!this.validateStr(email)) {
      return false;
    }
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return expression.test(email);
  }

  /**
   * Validates password
   * @param password
   * @returns true if password
   */
  validatePassword(password: string): boolean {
    if (!this.validateStr(password)) {
      return false;
    }

    return true;
  }

  /**
   * Validates jwt token
   * @param token
   * @returns true if jwt
   */
  validateJwt(token: string): boolean {
    if (token === undefined || token === null || token === "") {
      return false;
    }

    // check if jwt oken is empty
    if (token.trim().length === 0) {
      return false;
    }

    const decodedToken: JwtPayload = jwt<JwtPayload>(token);
    if (this.validateObject(decodedToken)) {
      const currentTime = Date.now() / 1000;
      const exp: number | undefined = decodedToken.exp;
      return exp !== undefined ? exp > currentTime : false;
    }

    return false;
  }
  /**
   * Validates object
   * @param data
   * @returns true if object
   */
  validateObject(data: any): boolean {
    if (data === null || data === undefined || Object.keys(data).length === 0) {
      return false;
    }

    return true;
  }
  /**
   * Validates str
   * @param str
   * @returns true if str
   */
  validateStr(str: string): boolean {
    if (!this.validateObject(str)) {
      return false;
    }

    if (str.length === 0 || str.trim().length === 0) {
      return false;
    }

    return true;
  }

  validateIsEmpty(data: any): boolean {
    return Object.keys(data).length === 0;
  }
}

export const validations = new ValidationSet();
