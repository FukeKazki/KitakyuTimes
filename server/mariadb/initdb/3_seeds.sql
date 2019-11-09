INSERT INTO kt.user (user_handle, user_mail_address, user_password, user_content) VALUES
('kazuki', 'kazkichi0906@gmail.com', 'password', '{}'),
('test_user_name', 'test@gmail.com', 'test_password', '{}');

INSERT INTO kt.post (post_user_id, post_content, post_geo, post_date) VALUES
(1, '{"title": "投稿タイトル！！", "body": "投稿内容"}', GeomFromText('POINT(33.8849244 130.8816063)'), '2019-11-09 14:30:00.500');

INSERT INTO kt.location (location_user_id, location_geo, location_date) VALUES
(1, GeomFromText('POINT(33.8845774 130.8794502)'), '2019-11-09 14:30:00.500');