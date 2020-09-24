
exports.up = async function(knex) {
    await knex.schema.createTable('user', (table) => {
        table.string('address', 128).notNullable();
        table.string('city', 128).notNullable();
        table.string('country', 128).notNullable();
        table.string('email', 128).notNullable();
        table.string('first_name', 128).notNullable();
        table.string('house_number', 128).notNullable();
        table.string('last_name', 128).notNullable();
        table.string('password', 128).notNullable();
        table.string('state', 128).notNullable();
        table.string('user_id', 36).notNullable();
        table.primary('user_id');;
        table.string('username', 128).notNullable();
      });

    await knex.schema.createTable('product', (table) => {
        table.text('description').notNullable();
        table.string('image', 128).notNullable();
        table.string('name', 128).notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.string('product_id', 36).notNullable();
        table.primary('product_id');;
    });

    await knex.schema.createTable('order', (table) => {
        table.string('order_id', 36).notNullable();
        table.primary('order_id');;
        table.string('order_number', 128).notNullable();
        table.string('user_id', 36).notNullable();
      })
      .alterTable('order', (table) => {
        table.index('user_id', 'fkIdx_76');
      });

    await knex.schema.createTable('order_product', (table) => {
        table.string('order_id', 36).notNullable();
        table.string('order_product_id', 36).notNullable();
        table.string('product_id', 36).notNullable();
    })
    .alterTable('order_product', (table) => {
        table.index('order_id', 'fkIdx_79');
        table.index('product_id', 'fkIdx_82');
    });
};

exports.down = async function(knex) {
    await Promise.all(
        [
          'user',
          'product',
          'order',
          'order_product',
        ].map((tableName) => knex.schema.dropTableIfExists(tableName))
      );
};
