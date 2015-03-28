/**
 * File
 *
 * @module      :: Model
 * @description :: Store files and their metadata
 *
 */

module.exports = {

  attributes: {
    // ID of the user that created the file
    userId: 'INTEGER',
    // File name
    name: 'STRING',
    // Private file only accessible by the user
    isPrivate: {
      'type': 'BOOLEAN',
      'defaultsTo': false,
    },
    // Type of the file
    mimeType: 'STRING',
    // Size in bytes
    size: 'INTEGER',
    // Raw binary file data
    data: 'BINARY'
  },

  // Don't migrate this table automatically in development because the
  // binary file data can get corrupted when it is extracted then
  // reinserted into the database. Any changes to this table have to be
  // migrated manually
  migrate: 'safe'

};
