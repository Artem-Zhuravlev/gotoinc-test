export interface RequestSchema {
  city_from: string;
  city_to: string;
  parcel_type?: string;
  dispatch_date: Date;
  parcel_description?: string;
}
