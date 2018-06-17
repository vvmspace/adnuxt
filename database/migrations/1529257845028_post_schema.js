'use strict';

const Schema = use('Schema');

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments();
      table.string('title');
      table.string('slug');
      table.string('text');
      table.string('previewText');
      table.string('thumbnailUrl');
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
