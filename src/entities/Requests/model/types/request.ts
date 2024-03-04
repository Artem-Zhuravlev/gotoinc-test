export interface RequestSchema {
  id?: string;
  city_from: string;
  city_to: string;
  parcel_type?: string;
  dispatch_date: string;
  parcel_description?: string;
}

export type DeliverSchema = Pick<RequestSchema, 'city_from' | 'city_to' | 'dispatch_date'>;

export interface RequestDeliverSchema extends DeliverSchema {
  userId?: number;
}
