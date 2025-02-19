import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export function PaginationDemo(props: { width?: number }) {
  return (
    <Pagination
      className={
        props.width
          ? `w-[${props.width}px] flex items-center justify-start`
          : ""
      }
    >
      <PaginationContent className="gap-3 mt-8">
        <PaginationItem>
          <PaginationLink
            className="text-orangeLike hover:text-white hover:bg-orangeLike outline outline-[1px] outline-gray-100 rounded-none"
            href="#"
          >
            <RiArrowLeftDoubleFill />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="text-orangeLike hover:text-white hover:bg-orangeLike outline outline-[1px] outline-gray-100 rounded-none"
            href="#"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="bg-orangeLike text-white rounded-none hover:text-orangeLike hover:bg-white"
            href="#"
            isActive
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="text-orangeLike hover:text-white hover:bg-orangeLike outline outline-[1px] outline-gray-100 rounded-none"
            href="#"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className="text-orangeLike hover:text-white hover:bg-orangeLike outline outline-[1px] outline-gray-100 rounded-none"
            href="#"
          >
            <RiArrowRightDoubleFill />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
