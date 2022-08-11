import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Spin,
  Switch,
} from "antd";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useGetCar } from "../hooks/useGetCar";
import { useGetColors } from "../hooks/useGetColors";
import { ICar } from "../types/car";
import { ColorBox, SelectOptionContainer, StyledCard } from "./carForm.styled";
import request from "../utils/request";

const updateCar = async (car: ICar) => {
  try {
    await request.put(`/cars/${car.id}`, car);
  } catch (e) {
    console.log(e);
    message.error("Something went wrong");
  }
};

const CarForm = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const { car, loading } = useGetCar(params.id || "");
  const { colors } = useGetColors();

  const onFinish = (values: ICar) => {
    console.log("Received values of form: ", values);
    updateCar(values).then(() => {
      message.success("Car updated successfully");
      navigate("/");
    });
  };

  if (loading) {
    return <Spin />;
  }
  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <StyledCard>
      <Form
        form={form}
        initialValues={car}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item label="id" name="id">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Car ID" name="carId">
          <Input disabled />
        </Form.Item>
        <Form.Item label="In Stock" name="inStock">
          <Switch />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Horse Power" name="horsePower">
          <InputNumber min={100} max={550} />
        </Form.Item>
        <Form.Item label="Color" name="color">
          <Select>
            {colors.map((color) => (
              <Select.Option key={color.hexCode}>
                <SelectOptionContainer>
                  <ColorBox color={color.hexCode} />
                  <span>{color.name}</span>
                </SelectOptionContainer>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link to="/">
            <Button type="link">Cancel</Button>
          </Link>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};

export default CarForm;
