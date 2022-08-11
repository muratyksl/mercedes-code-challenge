import React from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import { ICar } from "../types/car";
import { useGetCars } from "../hooks/useGetCars";

// {
//   "id": 1,
//   "carId": "dsasdasdsad",
//   "inStock": false,
//   "price": 50000,
//   "horsePower": 250,
//   "color": { "hexCode": "#000000", "name": "Black" }
// },

const columns: ColumnsType<ICar> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`${record.id}`}>{record.id}</Link>
      </Space>
    ),
  },
  {
    title: "Car ID",
    dataIndex: "carId",
    key: "carId",
  },
  {
    title: "In Stock",
    dataIndex: "inStock",
    key: "inStock",
    render: (_, record) => (
      <Tag color={record.inStock ? "green" : "volcano"}>
        {record.inStock ? "In Stock" : "Not Available"}
      </Tag>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Horse Power",
    dataIndex: "horsePower",
    key: "horsePower",
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    render: (_, record) => (
      <Tag color={record.color.hexCode}>{record.color.name}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`${record.id}`}>Update</Link>
      </Space>
    ),
  },
];

const CarTable = () => {
  const { cars, loading } = useGetCars();
  return (
    <div>
      <Table columns={columns} dataSource={cars} loading={loading} />
    </div>
  );
};

export default CarTable;
