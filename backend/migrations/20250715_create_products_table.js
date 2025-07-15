// migrations/xxxx_create_products.js
export function up(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("category").notNullable();
    table.integer("price").notNullable();
    table.string("image").notNullable(); // ✅ Add this
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("products");
}
