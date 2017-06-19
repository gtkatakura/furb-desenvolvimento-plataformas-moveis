# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170614204750) do

  create_table "beacon_presences", force: :cascade do |t|
    t.integer "beacon_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["beacon_id"], name: "index_beacon_presences_on_beacon_id"
    t.index ["user_id"], name: "index_beacon_presences_on_user_id"
  end

  create_table "beacons", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "coordinators", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_coordinators_on_user_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "institute_id", null: false
    t.integer "coordinator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coordinator_id"], name: "index_courses_on_coordinator_id"
    t.index ["institute_id"], name: "index_courses_on_institute_id"
  end

  create_table "disciplines", force: :cascade do |t|
    t.string "name", null: false
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_disciplines_on_course_id"
  end

  create_table "frequency_days", force: :cascade do |t|
    t.datetime "class_day_start", null: false
    t.datetime "class_day_end", null: false
    t.integer "period_discipline_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["period_discipline_id"], name: "index_frequency_days_on_period_discipline_id"
  end

  create_table "graduation_classes", force: :cascade do |t|
    t.integer "year", null: false
    t.integer "semesters", null: false
    t.integer "course_id", null: false
    t.integer "period_day_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_graduation_classes_on_course_id"
    t.index ["period_day_id"], name: "index_graduation_classes_on_period_day_id"
  end

  create_table "graduation_semesters", force: :cascade do |t|
    t.integer "number", null: false
    t.integer "graduation_class_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["graduation_class_id"], name: "index_graduation_semesters_on_graduation_class_id"
  end

  create_table "institutes", force: :cascade do |t|
    t.string "name", null: false
    t.integer "maintainer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["maintainer_id"], name: "index_institutes_on_maintainer_id"
  end

  create_table "instructors", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_instructors_on_user_id"
  end

  create_table "maintainers", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_maintainers_on_user_id"
  end

  create_table "period_days", force: :cascade do |t|
    t.integer "institute_id", null: false
    t.string "name", null: false
    t.integer "class_time", null: false
    t.integer "interval_time", null: false
    t.time "start_of_class", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["institute_id"], name: "index_period_days_on_institute_id"
  end

  create_table "period_disciplines", force: :cascade do |t|
    t.integer "graduation_semester_id", null: false
    t.integer "discipline_id", null: false
    t.datetime "period_start", null: false
    t.datetime "period_end", null: false
    t.integer "instructor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["discipline_id"], name: "index_period_disciplines_on_discipline_id"
    t.index ["graduation_semester_id"], name: "index_period_disciplines_on_graduation_semester_id"
    t.index ["instructor_id"], name: "index_period_disciplines_on_instructor_id"
  end

  create_table "students", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_students_on_user_id"
  end

  create_table "students_period_disciplines", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "period_discipline_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["period_discipline_id"], name: "index_students_period_disciplines_on_period_discipline_id"
    t.index ["student_id"], name: "index_students_period_disciplines_on_student_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

end
