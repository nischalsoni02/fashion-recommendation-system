/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";

export interface AllDataProps {
  images: Array<any>;
  prompt: string;
}

export interface DataProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<DataProps["isLoading"]>>;
  imageRef: string;
  setImageRef: Dispatch<SetStateAction<DataProps["imageRef"]>>;
  allData: Array<AllDataProps>;
  setAllData: Dispatch<SetStateAction<DataProps["allData"]>>;
}

const DataContext = React.createContext<DataProps>({
  isLoading: true,
  setIsLoading: () => {},
  imageRef: "",
  setImageRef: () => {},
  allData: [{ images: [], prompt: "" }],
  setAllData: () => {},
});

export default DataContext;
