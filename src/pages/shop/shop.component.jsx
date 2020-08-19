import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, title, items }) => (
          <CollectionPreview
            key={id}
            title={title}
            items={items}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
