CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY NOT NULL,
	`sender` text,
	`recipient` text,
	`amount` real,
	`tx_hash` text,
	`network` text,
	`status` text,
	`block_number` integer,
	`gas_fee` real,
	`memo` text,
	`created_at` integer DEFAULT (strftime('%s', 'now') * 1000),
	`completed_at` integer
);
