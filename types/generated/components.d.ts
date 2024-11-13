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
    content: Attribute.String;
  };
}

export interface ShippingShippingVariant extends Schema.Component {
  collectionName: 'components_shipping_shipping_variants';
  info: {
    displayName: 'Shipping Variant';
    icon: 'exit';
    description: '';
  };
  attributes: {
    country_code: Attribute.String;
    cbm_1: Attribute.Decimal;
    cbm_2: Attribute.Decimal;
    cbm_3: Attribute.Decimal;
    cbm_4: Attribute.Decimal;
    cbm_5: Attribute.Decimal;
    cbm_6: Attribute.Decimal;
    cbm_7: Attribute.Decimal;
    cbm_8: Attribute.Decimal;
    cbm_9: Attribute.Decimal;
    cbm_10: Attribute.Decimal;
    cbm_11: Attribute.Decimal;
    cbm_12: Attribute.Decimal;
    cbm_13: Attribute.Decimal;
    cbm_14: Attribute.Decimal;
    cbm_15: Attribute.Decimal;
    cbm_16: Attribute.Decimal;
    cbm_17: Attribute.Decimal;
    cbm_18: Attribute.Decimal;
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
    shipping_class: Attribute.Relation<
      'product.variant',
      'oneToOne',
      'api::shipping-class.shipping-class'
    >;
    cbm: Attribute.Decimal;
  };
}

export interface ProductQuoteCard extends Schema.Component {
  collectionName: 'components_product_quote_cards';
  info: {
    displayName: 'Quote Card';
    description: '';
  };
  attributes: {
    quote: Attribute.Text;
    author: Attribute.String;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProductProductRecommendation extends Schema.Component {
  collectionName: 'components_product_product_recommendations';
  info: {
    displayName: 'Product Recommendation';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    products: Attribute.Relation<
      'product.product-recommendation',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface ProductInTheBox extends Schema.Component {
  collectionName: 'components_product_in_the_boxes';
  info: {
    displayName: 'In The Box';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    item_name: Attribute.String;
  };
}

export interface ProductIcons extends Schema.Component {
  collectionName: 'components_product_icons';
  info: {
    displayName: 'Icons';
    icon: 'stack';
  };
  attributes: {
    text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 25;
      }>;
    icon: Attribute.Media<'images'>;
  };
}

export interface ProductDetailProducts extends Schema.Component {
  collectionName: 'components_product_detail_products';
  info: {
    displayName: 'Detail Products';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ProductCompetitor extends Schema.Component {
  collectionName: 'components_product_competitors';
  info: {
    displayName: 'competitor boolean';
    description: '';
  };
  attributes: {
    competitor_boolean: Attribute.Boolean;
  };
}

export interface ProductCompetitorName extends Schema.Component {
  collectionName: 'components_product_competitor_names';
  info: {
    displayName: 'Competitor Name';
  };
  attributes: {
    brand_name: Attribute.String;
  };
}

export interface ProductComparisonText extends Schema.Component {
  collectionName: 'components_product_comparison_texts';
  info: {
    displayName: 'Comparison Text';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sohnne_value: Attribute.String;
    competitor_value: Attribute.Component<'product.competitor-name', true>;
  };
}

export interface ProductComparisonBoolean extends Schema.Component {
  collectionName: 'components_product_comparison_booleans';
  info: {
    displayName: 'Comparison Boolean';
  };
  attributes: {
    title: Attribute.String;
    sohnne_value: Attribute.Boolean;
    competitor_value: Attribute.Component<'product.competitor', true>;
  };
}

export interface OptionsOptions extends Schema.Component {
  collectionName: 'components_options_options';
  info: {
    displayName: 'options';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    original_price: Attribute.Float;
    discount_price: Attribute.Float;
    is_discount: Attribute.Boolean;
    is_default: Attribute.Boolean;
    label: Attribute.String;
    thumbnail: Attribute.Media<'images'>;
  };
}

export interface HomePageVideoBanner extends Schema.Component {
  collectionName: 'components_home_page_video_banners';
  info: {
    displayName: 'Video Banner';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    video: Attribute.Media<'videos', true>;
  };
}

export interface HomePageTrustedBySection extends Schema.Component {
  collectionName: 'components_home_page_trusted_by_sections';
  info: {
    displayName: 'Trusted By Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
    image: Attribute.Media<'images', true>;
  };
}

export interface HomePageServicesSection extends Schema.Component {
  collectionName: 'components_home_page_services_sections';
  info: {
    displayName: 'Services Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
    icons: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HomePageReviews extends Schema.Component {
  collectionName: 'components_home_page_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    reviews: Attribute.Text;
    profile_picture: Attribute.Media<'images'>;
    product_image: Attribute.Media<'images'>;
    customer_name: Attribute.String;
    customer_location: Attribute.String;
  };
}

export interface HomePagePaymentSection extends Schema.Component {
  collectionName: 'components_home_page_payment_sections';
  info: {
    displayName: 'Payment Section';
  };
  attributes: {
    purchase_icon: Attribute.Component<'home-page.payment-icons'>;
    payment_icons: Attribute.Component<'home-page.payment-icons'>;
    shipping_partners: Attribute.Component<'home-page.payment-icons'>;
  };
}

export interface HomePagePaymentIcons extends Schema.Component {
  collectionName: 'components_home_page_payment_icons';
  info: {
    displayName: 'Payment Icons';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    icons: Attribute.Media<'images', true>;
  };
}

export interface HomePageInstagramPost extends Schema.Component {
  collectionName: 'components_home_page_instagram_posts';
  info: {
    displayName: 'Instagram Post';
  };
  attributes: {
    instagram_url: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePageInstagramFeed extends Schema.Component {
  collectionName: 'components_home_page_instagram_feeds';
  info: {
    displayName: 'Instagram Feed';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    instagram_post: Attribute.Component<'home-page.instagram-post', true>;
  };
}

export interface HomePageInspiredDesign extends Schema.Component {
  collectionName: 'components_home_page_inspired_designs';
  info: {
    displayName: 'Inspired Design';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    collections: Attribute.Relation<
      'home-page.inspired-design',
      'oneToMany',
      'api::collection.collection'
    >;
  };
}

export interface HomePageHeroBanner extends Schema.Component {
  collectionName: 'components_home_page_hero_banners';
  info: {
    displayName: 'Hero Banner';
    description: '';
  };
  attributes: {
    banner_desktop: Attribute.Media<'images', true>;
    heading: Attribute.String;
    banner_mobile: Attribute.Media<'images', true>;
  };
}

export interface HomePageCustomerReview extends Schema.Component {
  collectionName: 'components_home_page_customer_reviews';
  info: {
    displayName: 'Customer Review';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    reviews: Attribute.Component<'home-page.reviews', true>;
  };
}

export interface HomePageB2BSection extends Schema.Component {
  collectionName: 'components_home_page_b2_b_sections';
  info: {
    displayName: 'B2B Section';
    icon: 'shoppingCart';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    image: Attribute.Media<'images'>;
    phone_number: Attribute.String;
    email: Attribute.String;
  };
}

export interface HomePageAffirmSection extends Schema.Component {
  collectionName: 'components_home_page_affirm_sections';
  info: {
    displayName: 'Affirm Section';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
    button_text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'table.table': TableTable;
      'shipping.shipping-variant': ShippingShippingVariant;
      'product.variant': ProductVariant;
      'product.quote-card': ProductQuoteCard;
      'product.product-recommendation': ProductProductRecommendation;
      'product.in-the-box': ProductInTheBox;
      'product.icons': ProductIcons;
      'product.detail-products': ProductDetailProducts;
      'product.competitor': ProductCompetitor;
      'product.competitor-name': ProductCompetitorName;
      'product.comparison-text': ProductComparisonText;
      'product.comparison-boolean': ProductComparisonBoolean;
      'options.options': OptionsOptions;
      'home-page.video-banner': HomePageVideoBanner;
      'home-page.trusted-by-section': HomePageTrustedBySection;
      'home-page.services-section': HomePageServicesSection;
      'home-page.reviews': HomePageReviews;
      'home-page.payment-section': HomePagePaymentSection;
      'home-page.payment-icons': HomePagePaymentIcons;
      'home-page.instagram-post': HomePageInstagramPost;
      'home-page.instagram-feed': HomePageInstagramFeed;
      'home-page.inspired-design': HomePageInspiredDesign;
      'home-page.hero-banner': HomePageHeroBanner;
      'home-page.customer-review': HomePageCustomerReview;
      'home-page.b2-b-section': HomePageB2BSection;
      'home-page.affirm-section': HomePageAffirmSection;
    }
  }
}
