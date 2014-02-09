var keystone = require('keystone'),
  Types = keystone.Field.Types;

var AnimeCategory = new keystone.List('AnimeCategory', {
  autokey: {
    from: 'name',
    path: 'key'
  }
});

AnimeCategory.add({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: Types.Html,
    wysiwyg: true,
    height: 150
  },
});

AnimeCategory.relationship({
  ref: 'Anime',
  path: 'categories'
});

AnimeCategory.addPattern('standard meta');
AnimeCategory.register();
