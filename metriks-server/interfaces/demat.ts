import { IHoldings } from "./holdings";
export interface IDemat {
    userId: string;
    cookie?: string;
    holdings: [IHoldings];
    broker: string;
  }