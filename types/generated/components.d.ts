import type { Struct, Schema } from '@strapi/strapi';

export interface ServiceHighlightsServiceHighlights
  extends Struct.ComponentSchema {
  collectionName: 'components_service_highlights_service_highlights';
  info: {
    displayName: 'Service_Highlights';
  };
  attributes: {
    Title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metadiscription: Schema.Attribute.Text;
    metaImages: Schema.Attribute.Media<'files' | 'images', true>;
  };
}

export interface ImageGalleryImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_image_gallery_image_galleries';
  info: {
    displayName: 'Image Gallery';
    icon: 'picture';
  };
  attributes: {
    Images: Schema.Attribute.Media<'images' | 'files', true>;
    caption: Schema.Attribute.Text;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    PlanType: Schema.Attribute.String;
    PlanPrice: Schema.Attribute.String;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    link: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    placeholder: Schema.Attribute.String;
    lable: Schema.Attribute.String;
    input: Schema.Attribute.String;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.String;
    input: Schema.Attribute.Component<'elements.input', true>;
    button: Schema.Attribute.Component<'elements.button', true>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    titel: Schema.Attribute.String;
    link: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface HeadlineHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_headline_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    subheadline: Schema.Attribute.String;
    background_image: Schema.Attribute.Media<'files' | 'images', true>;
    callto_action_button: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ContactFormContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    Name: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    message: Schema.Attribute.Text;
    submit_button: Schema.Attribute.String;
  };
}

export interface BlocksRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    name: Schema.Attribute.String;
    description: Schema.Attribute.String;
    plan: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.button', false>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'elements.form', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service-highlights.service-highlights': ServiceHighlightsServiceHighlights;
      'seo.metadata': SeoMetadata;
      'image-gallery.image-gallery': ImageGalleryImageGallery;
      'elements.pricing-card': ElementsPricingCard;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button': ElementsButton;
      'headline.hero-section': HeadlineHeroSection;
      'contact-form.contact-form': ContactFormContactForm;
      'blocks.row': BlocksRow;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
      'blocks.cta': BlocksCta;
    }
  }
}
