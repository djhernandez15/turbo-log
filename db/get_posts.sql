SELECT users.username, post.post_id, post.title, post.post, post.date FROM post
JOIN users ON users.user_id = post.user_id
ORDER BY post.date DESC
LIMIT 20