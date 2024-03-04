export interface RequestSchema {
  id?: string;
  city_from: string;
  city_to: string;
  parcel_type?: string;
  dispatch_date: string;
  parcel_description?: string;
}

export type RequestDeliverSchema = Pick<RequestSchema, 'city_from' | 'city_to' | 'dispatch_date'>;
