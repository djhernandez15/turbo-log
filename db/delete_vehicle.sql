DELETE FROM report
WHERE vehicle_id = $1;


DELETE FROM vehicle 
WHERE vehicle_id = $1;

SELECT * FROM vehicle
WHERE user_id = $2;