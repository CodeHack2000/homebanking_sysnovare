/**
 * Represents a model for funds-related actions in API solicitations
 *
 * @export
 * @interface FundsActionModel
 */
export interface FundsActionModel {
    /**
     * The amount associated with the funds action (e.g., when adding or withdrawing funds)
     * It is optional and used when specifying a numeric value for the action
     *
     * @type {number}
     * @memberof FundsActionModel
     */
    amount?: number;

    /**
     * A message that can be used to provide additional information or an error message
     * related to the funds action. It is optional and used for error scenarios
     *
     * @type {string}
     * @memberof FundsActionModel
     */
    message?: string;
};