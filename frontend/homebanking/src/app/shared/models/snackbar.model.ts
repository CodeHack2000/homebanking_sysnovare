/**
 * Represents a model for custom snack bar messages
 *
 * @export
 * @interface SnackbarModel
 */
export interface SnackbarModel {
    /**
     * The level of the message, indicating its severity
     * - Level 1: Success (positive)
     * - Level 2: Warning (neutral)
     * - Level 3: Error (negative)
     *
     * @type {number}
     * @memberof SnackbarModel
     */
    level: number;

    message: string;
}