/*
  Warnings:

  - You are about to drop the `collected_wastes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reports` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rewards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."collected_wastes" DROP CONSTRAINT "collected_wastes_collector_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."collected_wastes" DROP CONSTRAINT "collected_wastes_report_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."notifications" DROP CONSTRAINT "notifications_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."reports" DROP CONSTRAINT "reports_collector_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."reports" DROP CONSTRAINT "reports_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."rewards" DROP CONSTRAINT "rewards_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."transactions" DROP CONSTRAINT "transactions_user_id_fkey";

-- DropTable
DROP TABLE "public"."collected_wastes";

-- DropTable
DROP TABLE "public"."notifications";

-- DropTable
DROP TABLE "public"."reports";

-- DropTable
DROP TABLE "public"."rewards";

-- DropTable
DROP TABLE "public"."transactions";
