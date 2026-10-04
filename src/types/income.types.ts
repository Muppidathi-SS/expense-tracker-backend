export interface Income {
  guest_id: string;
  income_name: string;
  income_amount: number;
  income_date: string;
  income_time: string;
  category_id: number;
  payment_method_id: number;
  income_notes?: string;
}