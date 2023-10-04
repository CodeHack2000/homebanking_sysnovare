/**
 * Represents a response from authentication-related requests, which may include an authentication token or an error message
 *
 * @export
 * @interface AuthResponse
 */
export interface AuthResponse {
    token?: string;
    message?: string;
}