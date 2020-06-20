import { SimulationNodeDatum, SimulationLinkDatum } from "d3";

export namespace d3Types {
  export type d3Node = SimulationNodeDatum & {
    id: string,
    group: number
  };

  export type d3Link = SimulationLinkDatum<SimulationNodeDatum> & {
    source: string,
    target: string,
    value: number
  };

  export type d3Graph = {
    nodes: d3Node[],
    links: d3Link[]
  };
}
