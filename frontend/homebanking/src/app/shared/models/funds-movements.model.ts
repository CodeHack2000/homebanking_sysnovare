/**
 * Represents a model for funds movements returned by the "get funds movements" solicitation
 *
 * @export
 * @interface FundsMovementsModel
 */
export interface FundsMovementsModel {
    email: string;
    amount: number;
    balance: number;
    newBalance: number;
    date: string;
};