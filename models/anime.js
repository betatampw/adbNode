var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Anime = new keystone.List('Anime', {
  map: {
    name: 'title'
  },
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true
  }
});

Anime.add({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    index: true
  },
  titles: {
    type: String
  },
  type: {
    type: String, //GET LIST
  },
  url: {
    type: Types.Url,
  },
  episodecount: {
    type: Number
  },
  startdate: {
    type: Types.Date
  },
  enddate: {
    type: Types.Date
  },
  related: { // GET LIST
    type: Types.Relationship,
    ref: 'Anime',
    many: true
  },
  same: {
    type: Types.Relationship,
    ref: 'Anime',
    many: true
  },
  image: {
    type: Types.CloudinaryImage
  },
  desc: {
    type: Types.Html,
    wysiwyg: true,
    height: 150
  },
  categories: {
    type: Types.Relationship,
    ref: 'AnimeCategory',
    many: true
  },
  tag: {
    type: Types.Relationship,
    ref: 'AnimeTag',
    many: true
  },
  anidbid: {
    type: Number
  }
});

/*
  recomm:
  creators: 
  characters: 
*/

Anime.addPattern('standard meta');
Anime.defaultColumns = 'title';
Anime.register();
