import type { Schema, Attribute } from '@strapi/strapi';

export interface TableTable extends Schema.Component {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String & Attribute.Required;
  };
}

export interface ProductVariant extends Schema.Component {
  collectionName: 'components_product_variants';
  info: {
    displayName: 'Variant';
    icon: 'archive';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['General', 'Color', 'Material']> &
      Attribute.Required &
      Attribute.DefaultTo<'General'>;
    value: Attribute.String & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    is_discount: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    discount_price: Attribute.Decimal & Attribute.Required;
    gallery: Attribute.Media<'images', true> & Attribute.Required;
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
