import { useLoaderData, useNavigation } from "react-router-dom";
import MenuItem from "./MenuItem";
import type { IMenuItem } from "../../types";

function Menu() {
  const menu = useLoaderData() as IMenuItem[];

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
