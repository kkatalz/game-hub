export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    [key: string]: string;
  };
}
