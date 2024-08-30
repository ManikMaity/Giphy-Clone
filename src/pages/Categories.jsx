import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-Context";
import fetchCatagoryData from "../services/fetchCatagoryData";
import useCheckMobile from "../hooks/useCheckMobile";
import HomeFilterChange from "../components/HomeFilterChange/HomeFilterChange";
import { MdOutlineGifBox } from "react-icons/md";
import GifItem from "../components/GifItem/GifItem";
import CategorySocial from "../components/CategoryComponents/CategorySocial";
import SubCategorySearch from "../components/CategoryComponents/SubCategorySearch";
import { makeFirstCharUpperCase } from "../util/utilFn";
import CategoryGridBtn from "../components/CategoryComponents/CategoryGridBtn";

function Categories() {
  const { categories } = useParams();
  const [subCategory, setSubCategory] = useState(categories);
  const [align, setAlign] = useState("col");

  const { gf, setShowCategories } = GifState();

  useEffect(() => {
    setSubCategory(categories);
    setAlign("col");
    setTimeout(() => {
      setShowCategories(false);
    }, 600);
  }, [categories]);

  const {
    data: categoryData,
    isFetched,
    isLoading,
    isError,
  } = useQuery(
    ["categories", subCategory],
    () => fetchCatagoryData(gf, categories, subCategory),
    {
      cacheTime: 60 * 1000 * 20,
      staleTime: 60 * 1000 * 20,
    }
  );

  return (
    <div className="w-full flex flex-col sm:flex-row gap-5 min-h-[400px] my-4 md:my-6">
      <div className="w-full sm:w-80">
        <div className="mb-2">
          {isLoading ||
            (isError && <div className="w-full h-[200px] skeleton"></div>)}
          {categoryData?.data && (
            <div>
              <GifItem hover={false} data={categoryData?.data[0]} />
              <p className="font-extralight">{categoryData?.data[0]?.title}</p>
            </div>
          )}
        </div>

        <CategorySocial />
        <div className="divider"></div>
        <SubCategorySearch
          category={categories}
          setSubCategory={setSubCategory}
        />
      </div>

      <div className="w-full flex flex-col mb-4 md:mb-6">
        <div className="flex gap-4 items-baseline">
          <h2 className="font-extrabold text-2xl md:text-4xl">
            {makeFirstCharUpperCase(categories)} GIFs
          </h2>
          {isFetched && (
            <p className="font-light flex items-center gap-1">
              {categoryData?.pagination?.total_count} Gifs
              <MdOutlineGifBox />
            </p>
          )}
        </div>
        {categories != subCategory && categoryData?.data && (
          <div className="flex justify-between">
            <p className="my-3 text-xl font-extralight">
              All {makeFirstCharUpperCase(subCategory)} Gifs
            </p>
            <CategoryGridBtn changeAlign={setAlign} />
          </div>
        )}

        <div
          className={
            align == "row"
              ? `${`columns-1 w-3/4 my-5 mx-auto`}`
              : `${"columns-1 md:columns-2 xl:columns-3"} gap-2`
          }
        >
          {(isLoading || isError) && (
            <div className="skeleton h-[800px] w-full"></div>
          )}
          {isFetched &&
            categoryData.data.slice(1).map((gifData) => {
              return <GifItem key={gifData.slug} data={gifData} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
