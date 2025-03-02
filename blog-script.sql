create database miniblog;
use miniblog;

drop table if exists posts;
create table posts(
    id int(5) auto_increment primary key,
    author varchar(255),
    title varchar(255),
    content varchar(500),
    created_at datetime default now()
);