export interface Expense {
  guest_id: string;
  expense_name: string;
  expense_amount: number;
  expense_date: string;
  expense_time: string;
  category_id: number;
  payment_method_id: number;
  expense_notes?: string;
}