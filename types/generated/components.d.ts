import type { Schema, Struct } from '@strapi/strapi';

export interface BloquesNoticiaBloqueImagen extends Struct.ComponentSchema {
  collectionName: 'components_bloques_noticia_bloque_imagens';
  info: {
    displayName: 'BloqueImagen';
  };
  attributes: {
    caption: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BloquesNoticiaBloqueTexto extends Struct.ComponentSchema {
  collectionName: 'components_bloques_noticia_bloque_textos';
  info: {
    displayName: 'BloqueTexto';
  };
  attributes: {
    contenido: Schema.Attribute.RichText;
  };
}

export interface BloquesNoticiaBloqueVideo extends Struct.ComponentSchema {
  collectionName: 'components_bloques_noticia_bloque_videos';
  info: {
    displayName: 'BloqueVideo';
  };
  attributes: {
    url_o_embed: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bloques-noticia.bloque-imagen': BloquesNoticiaBloqueImagen;
      'bloques-noticia.bloque-texto': BloquesNoticiaBloqueTexto;
      'bloques-noticia.bloque-video': BloquesNoticiaBloqueVideo;
    }
  }
}
