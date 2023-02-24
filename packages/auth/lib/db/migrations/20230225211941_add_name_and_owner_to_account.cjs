exports.up = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable('_nango_accounts', function (table) {
        table.integer('owner_id').references('id').inTable('nango._nango_users').defaultTo(0).notNullable();
        table.string('name').notNullable().defaultTo('unknown');
        table.dropColumn('email');
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable('_nango_accounts', function (table) {
        table.dropColumn('owner_id');
        table.dropColumn('name');
        table.string('email').notNullable().defaultTo('unknown');
    });
};
