import { message } from "antd";
import { useState, useEffect } from "react";
import { IColor } from "../types/car";
import request from "../utils/request";

export const useGetColors = () => {
  const [colors, setColors] = useState<IColor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getColors = async () => {
      try {
        const { data } = await request.get<IColor[]>("/colors");
        setColors(data);
        setLoading(false);
      } catch (e: any) {
        setLoading(false);
        message.error(e.message);
      }
    };
    getColors();
  }, []);
  return { colors, loading };
};
