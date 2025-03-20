"use client";

import {Select, SelectItem} from "@heroui/react";
import {useRouter} from "next/navigation";

export default function SelectData({pathname, type, search}) {
    const router = useRouter();
  return (
      <>
        {pathname === "/book-categories" ?
            (
                <Select
                  className="max-w-xs"
                  placeholder="Select a Category"
                  aria-label="sth"
                  onChange = {(e) =>
                        {
                            search ? router.replace(`/book-categories?search=${search}&query=${e.target.value}`) : router.replace(`/book-categories?query=${e.target.value}`)
                        }
                    }
                  >
                    {type.map((category) => (
                        <SelectItem key={category.id}>{category.book_cate_name}</SelectItem>
                    ))}
                </Select>
            ) : (
                <Select
                  className="max-w-xs"
                  placeholder="Select a Category"
                  label=""
                  onChange = {(e) =>
                      {
                        search ?  router.replace(`/old-school-cartoons?search=${search}&genre=${e.target.value}`)  : router.replace(`/old-school-cartoons?genre=${e.target.value}`)
                      }
                    }
                  >
                    {type.map((genre) => (
                        <SelectItem key={genre.id}>{genre.cartoon_genre}</SelectItem>
                    ))}
                </Select>
            )
        }
      </>
  );
}