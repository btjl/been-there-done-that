export interface Place {
  id: number,
  name: string,
  description: string,
  position: [number, number]
}

export const places: Place[] = [
  {
    id: 1,
    name: 'Sembawang Hot Spring Park',
    description: 'Visited a hot spring in the lion city! It was very relaxing.',
    position: [1.4343, 103.8225],
  },

];
