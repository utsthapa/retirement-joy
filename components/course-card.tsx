"use client";

import { Card, CardBody } from "@nextui-org/react";
import { IconType } from "react-icons";
import { IoBookOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { MdOutlineVideoLibrary } from "react-icons/md";
type ItemCountType = {
  count: number;
  name: string;
  icon: IconType;
};
export const CourseCard = () => {
  const itemCounts: Array<ItemCountType> = [
    {
      count: 5,
      name: "modules",
      icon: LuLayers,
    },
    {
      count: 10,
      name: "lessons",
      icon: IoBookOutline,
    },
    {
      count: 15,
      name: "videos",
      icon: MdOutlineVideoLibrary,
    },
  ];

  return (
    <Card className="max-w-[720px] w-full mx-auto p-4">
      <CardBody className="flex flex-col gap-3">
        <h4>Lorem, ipsum dolor.</h4>
        <div className="flex flex-row gap-2">
          {itemCounts.map((item, i) => (
            <ItemCount key={i} data={item} />
          ))}
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt
          praesentium odio ad perspiciatis exercitationem asperiores
          repellendus, voluptatem quod modi velit assumenda nostrum quas
          corrupti repellat deserunt laboriosam laudantium quo.
        </p>
        <LessonCard />
      </CardBody>
    </Card>
  );
};

const ItemCount = ({ data }: { data: ItemCountType }) => {
  return (
    <div className="flex flex-row gap-2 items-center text-gray-600">
      <data.icon size={20} />
      {data.count} {data.name}
    </div>
  );
};

const LessonCard = () => {
  const topics = [
    "Lorem ipsum dolor sit amet.",
    "Placeat doloribus sunt sit provident.",
    "Sequi pariatur illo distinctio excepturi!",
    "Dolor eveniet ipsam laborum magni?",
    "Fugit a deserunt sint ipsa!",
  ];

  return (
    <div className="border border-gray-400 rounded-md divide-y divide-gray-400">
      {topics.map((topic, i) => (
        <div key={i} className="px-6 py-4">
          <span className="font-semibold">{topic}</span>
        </div>
      ))}
    </div>
  );
};
