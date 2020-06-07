export type Communities = Record<string, Community>;

export interface Community {
  id: number;
  name: string;
  city: string;
}
