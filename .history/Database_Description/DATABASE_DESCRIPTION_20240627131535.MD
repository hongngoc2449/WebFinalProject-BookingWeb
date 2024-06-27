# Database Description

## Overview

This document provides a detailed description of the database schema used in our project. The database is designed to manage addresses, orders, products, and product images, ensuring efficient storage and retrieval of data.

## Team Information

- **Team Name**: Chill out
- **Project Name**: Chillout Shopping for Furniture Items

The team "Chill out" is dedicated to developing a seamless and user-friendly shopping experience for furniture items. Our project, "Chillout Shopping for Furniture Items," aims to provide customers with an intuitive platform to browse, select, and purchase furniture with ease.

## Database Hosting and Connectivity

- **Hosting**: The database is hosted on Supabase.

Our database is hosted on Supabase, a scalable and reliable platform that offers seamless integration with PostgreSQL. Supabase provides robust data management capabilities, ensuring high availability and performance for our application.

- **Connectivity**: The connection to the database is managed through Prisma in a project built on the Nuxt3 framework.

The connectivity to our database is facilitated by Prisma, a next-generation ORM that simplifies database access and management. Our project is built on the Nuxt3 framework, leveraging its powerful features for server-side rendering and static site generation. Prisma enables efficient and secure database operations, while Nuxt3 enhances the overall performance and scalability of our application.

## ER Diagram

The following diagram represents the Entity-Relationship (ER) model of our database:

![ER Diagram](/Database_Description/ER_Diagram.png)

## Schema

### Addresses

| Field      | Type      | Attributes                         |
| ---------- | --------- | ---------------------------------- |
| id         | Int       | @id @default(autoincrement())      |
| userId     | String    | @unique @db.Uuid                   |
| name       | String    |                                    |
| address    | String    |                                    |
| zipcode    | String    |                                    |
| city       | String    |                                    |
| country    | String    |                                    |
| created_at | DateTime? | @default(now()) @db.Timestamptz(6) |

### Orders

| Field      | Type        | Attributes                         |
| ---------- | ----------- | ---------------------------------- |
| id         | String      | @id @default(uuid())               |
| userId     | String      | @db.Uuid                           |
| name       | String      |                                    |
| address    | String      |                                    |
| zipcode    | String      |                                    |
| city       | String      |                                    |
| country    | String      |                                    |
| created_at | DateTime?   | @default(now()) @db.Timestamptz(6) |
| orderItem  | OrderItem[] | Relationship with OrderItem        |

### OrderItem

| Field      | Type      | Attributes                                       |
| ---------- | --------- | ------------------------------------------------ |
| id         | Int       | @id @default(autoincrement())                    |
| orderId    | String    |                                                  |
| productId  | Int       |                                                  |
| created_at | DateTime? | @default(now()) @db.Timestamptz(6)               |
| order      | Orders    | @relation(fields: [orderId], references: [id])   |
| product    | Products  | @relation(fields: [productId], references: [id]) |

### Products

| Field             | Type           | Attributes                         |
| ----------------- | -------------- | ---------------------------------- |
| id                | Int            | @id @default(autoincrement())      |
| title             | String         |                                    |
| description       | String         |                                    |
| short_description | String         | @default("")                       |
| url               | String         |                                    |
| price             | Int            |                                    |
| created_at        | DateTime?      | @default(now()) @db.Timestamptz(6) |
| orderItem         | OrderItem[]    | Relationship with OrderItem        |
| images            | ProductImage[] | Relationship with ProductImage     |

### ProductImage

| Field     | Type     | Attributes                                       |
| --------- | -------- | ------------------------------------------------ |
| id        | Int      | @id @default(autoincrement())                    |
| productId | Int      |                                                  |
| url       | String   |                                                  |
| product   | Products | @relation(fields: [productId], references: [id]) |

### Prisma Migrations

| Field               | Type        | Attributes |
| ------------------- | ----------- | ---------- |
| id                  | varchar     |            |
| checksum            | varchar     |            |
| finished_at         | timestamptz |            |
| migration_name      | varchar     |            |
| logs                | text        |            |
| rolled_back_at      | timestamptz |            |
| started_at          | timestamptz |            |
| applied_steps_count | int4        |            |

## Relationships

- **Addresses** and **Orders**: The `userId` in both tables ensures each order is linked to an address.
- **Orders** and **OrderItem**: Each order can have multiple order items, linked through the `orderId`.
- **OrderItem** and **Products**: Each order item is associated with a product, linked via the `productId`.
- **Products** and **ProductImage**: Each product can have multiple images, linked through the `productId`.

## Notes

- The database uses PostgreSQL as the provider.
- Prisma Client is used for generating database client code.

## Conclusion

This schema provides a robust structure for managing various entities involved in the project, ensuring data integrity and ease of access.
