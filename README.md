## Technatives (Image Sharing task - Backend)

Backend for a webapp that allows user to upload a post with a caption and an image, and displays all the posts created by all users.

## Developed using these technologies:
* Node.js
* Express
* Postgres
* Typescript
* Knex (ORM): Handles the logic required to interact with database.
* AWS S3 Buckets: Hostes our images.
* AWS RDS: Hosts our postgres database.

## Project Features

* List all posts created by any user, sorted by chronologica order (newest to oldest).
* Upload post with a caption and an image.

#### Frontend Link:

<a href="https://technatives-web.vercel.app/">https://technatives-web.vercel.app/</a>

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

#### Install all dependencies:
`yarn install`  

#### Create a public S3 bucket on AWS:
follow these links: 
1. <a href="https://havecamerawilltravel.com/how-allow-public-access-amazon-bucket/">Allow Public Access to an Amazon S3 Bucket</a> 
2.  <a href="https://awstip.com/tutorial-aws-creating-an-s3-bucket-for-a-test-user-6322c431c370">Tutorial: AWS — Creating an S3 Bucket for a Test User</a> 

#### Create a local database:
follow this tutorial:
1. <a href="https://www.codecademy.com/article/installing-and-using-postgresql-locally">Installing and Using PostgreSQL Locally</a>

Apply the following Schema:
Table: images
Fields: 
1. id: serial
2. image: text
3. caption: text
4. created_at: timestamp

#### Start the server:
`yarn dev`

#### To Visit App Locally:
`localhost:3000`  

#### Next step:
1. Configure a Docker container to allow developers easily clone the repo and start working with it in a minutes, instead of configuring a lot of things (database, s3 bucket, etc.) manually.

