import classNames from "classnames";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../../store/modules/takeaway";
import { useEffect } from "react";

const Menu = () => {
  const { foodsList, activeIndex } = useSelector((state) => state.take);
  const dispatch = useDispatch();
  const clickItem = (index) => {
    const ele = document.getElementById(`${index}`);
    ele.scrollIntoView({
      behavior: "instant",
      block: "start",
      inline: "nearest",
    });
    setTimeout(() => {
      dispatch(setActiveIndex(index));
    }, 100);
  };
  const handleFun = () => {
    const right_title = document.getElementsByClassName("cate-title");

    for (const i of right_title) {
      const a = i.getBoundingClientRect();
      if (a.top < 100) {
        dispatch(setActiveIndex(i.id * 1));
      }
    }
  };
  useEffect(() => {
    document.querySelector(".goods-list").addEventListener("scroll", handleFun);
    return () => {
      document
        .querySelector(".goods-list")
        .removeEventListener("scroll", handleFun);
    };
  }, []);
  return (
    <nav className="list-menu" style={{ height: foodsList.length * 48 + "px" }}>
      {/* 添加active类名会变成激活状态 */}
      {foodsList.map((item, index) => {
        return (
          <div
            key={item.tag}
            onClick={() => {
              clickItem(index);
            }}
            className={classNames(
              "list-menu-item",
              activeIndex === index && "active"
            )}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
