exports.up = async function (knex, _) {
    await knex
        .withSchema('nango')
        .from(`_nango_users`)
        .insert({ id: 0, name: 'unknown', email: 'unknown', password: 'unkown', salt: 'unknown', account_id: 0 })
        .onConflict(['id'])
        .merge();
    return knex.schema.withSchema('nango').createTable('_nango_users', function (table) {
        table.increments('id').primary();
        table.timestamps(true, true);
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('hashed_password').notNullable();
        table.string('salt').notNullable();
        table.integer('account_id').references('id').inTable('nango._nango_accounts').notNullable();
        table.unique('email');
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').dropTable('_nango_users');
};
