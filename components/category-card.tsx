"use client";

import { Card, CardBody } from "@nextui-org/react";
import moment from "moment";
import { IconType } from "react-icons";
import { LuLayers } from "react-icons/lu";
type ItemCountType = {
  count: number;
  name: string;
  icon: IconType;
};
type Blogs = any;
export const CategoryCard = ({ blogs }: { blogs: Array<Blogs> }) => {
  const itemCounts: Array<ItemCountType> = [
    {
      count: blogs.length,
      name: "blogs",
      icon: LuLayers,
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
        <BlogItemsCard blogs={blogs} />
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

const BlogItemsCard = ({ blogs }: { blogs: Array<Blogs> }) => {
  return (
    <ul className="border border-gray-400 rounded-md divide-y divide-gray-400">
      {blogs.map((blog) => (
        <li key={blog._id}>
          <a href={`/blog/${blog.slug.current}`}>
            <div className="flex flex-row px-6 py-4 gap-4 justify-between items-center cursor-pointer">
              <span className="font-semibold">{blog.title}</span>
              <span className="font-normal text-gray-500 text-sm">
                {moment(new Date(blog.publishedAt)).format("LL")}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
