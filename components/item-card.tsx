"use client";
import { Card, CardBody } from "@nextui-org/react";
import { BiData } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";

import { CardType } from "@/types";
export const CardLists: Array<CardType> = [
  { icon: FaRegFileAlt, title: "Product Management" },
  { icon: IoPeopleOutline, title: "Engineering Management" },
  { icon: FaCode, title: "Software Engineering" },
  { icon: BiData, title: "Data Engineering" },
  { icon: HiOutlinePresentationChartBar, title: "Data Science" },
];

export const CardsList = () => {
  return (
    <div className="flex flex-row gap-6 flex-wrap justify-center">
      {CardLists.map((card, i) => (
        <SingleCard key={i} data={card} />
      ))}
    </div>
  );
};

const SingleCard = ({ data }: { data: CardType }) => {
  return (
    <Card className="w-[150px] py-3">
      <CardBody className="flex flex-col gap-4 items-center">
        <data.icon color="#6829d9" size={40} />
        <p className="text-center font-semibold">{data.title}</p>
      </CardBody>
    </Card>
  );
};
