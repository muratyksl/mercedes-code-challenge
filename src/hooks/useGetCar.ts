import { message } from "antd";
import { useState, useEffect } from "react";
import { ICar } from "../types/car";
import request from "../utils/request";

export const useGetCar = (id: string) => {
  const [car, setCar] = useState<ICar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCar = async () => {
      try {
        const { data } = await request.get<ICar>(`/cars/${id}`);
        setCar(data);
        setLoading(false);
      } catch (e: any) {
        setLoading(false);
        message.error(e.message);
      }
    };
    getCar();
  }, [id]);

  return { car, loading };
};
