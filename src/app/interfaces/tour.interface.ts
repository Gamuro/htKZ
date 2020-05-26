export interface Tour {
  currency: string;
  hotelName: string;
  price: number;
}
export interface DataTour {
  direction: string;
  tours: Tour[];
}
