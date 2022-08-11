import { useEffect, useState } from "react";
import { message } from "antd";

import { ICar } from "../types/car";
import request from "../utils/request";

export const useGetCars = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const { data } = await request.get<ICar[]>("/cars");
        setCars(data);
        setLoading(false);
      } catch (e: any) {
        setLoading(false);
        message.error(e.message);
      }
    };
    getCars();
  }, []);

  return { cars, loading };
};
