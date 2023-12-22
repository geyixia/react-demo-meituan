import FoodItem from "./FoodItem";
import "./index.scss";

const FoodsCategory = ({ name, foods, id }) => {
  return (
    <div className="category">
      <dl className="cate-list">
        <dt className="cate-title" id={id}>
          {name}
        </dt>

        {foods.map((item) => {
          return <FoodItem key={item.id} {...item} />;
        })}
      </dl>
    </div>
  );
};

export default FoodsCategory;
