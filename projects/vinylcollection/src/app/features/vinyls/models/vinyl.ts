/**
 * Un vinyl géré dans la collection
 */
export interface Vinyl {
  label: string;
  releaseDate: Date;
}

export type Vinyls = Vinyl[];
