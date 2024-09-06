import type { Schema, Attribute } from '@strapi/strapi';

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
  };
}

export interface ProductVariant extends Schema.Component {
  collectionName: 'components_product_variants';
  info: {
    displayName: 'Variant';
    icon: 'archive';
  };
  attributes: {
    type: Attribute.Enumeration<['General', 'Color', 'Material']> &
      Attribute.DefaultTo<'General'>;
    value: Attribute.String;
    price: Attribute.Decimal & Attribute.Required;
    is_discount: Attribute.Boolean & Attribute.DefaultTo<false>;
    discount_price: Attribute.Decimal;
    gallery: Attribute.Media<'images', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'table.table': TableTable;
      'product.variant': ProductVariant;
    }
  }
}
