require 'rails_helper'

describe BeaconPresence, type: :model do
  let(:user) { User.create!(email: 'test@test.com', password: '12345678') }
  let(:maintainer) { Maintainer.create!(user: user) }
  let(:student) { Student.create!(user: user) }
  let(:coordinator) { Coordinator.create!(user: user) }
  let(:instructor) { Instructor.create!(user: user) }
  let(:institute) { Institute.create!(maintainer: maintainer, name: 'FURB') }
  let(:period_day) { PeriodDay.create!(institute: institute, name: 'Noturno', class_time: 50, interval_time: 10, start_of_class: '18:30') }
  let(:course) { Course.create!(institute: institute, coordinator: coordinator, name: 'Ciência da Computação') }
  let(:discipline) { Discipline.create!(course: course, name: 'Projeto de Software II') }
  let(:graduation_class) { GraduationClass.create!(course: course, period_day: period_day, year: 2000, semesters: 1) }
  let(:graduation_semester) { graduation_class.graduation_semesters.first }
  let(:period_attributes) { { start: Time.new(2010, 1, 1), end: Time.new(2010, 1, 1) } }
  let(:period_discipline) { PeriodDiscipline.new(graduation_semester: graduation_semester, discipline: discipline, instructor: instructor, period: period_attributes) }
  let(:students_period_discipline) { StudentsPeriodDiscipline.new(period_discipline: period_discipline, student: student) }
  let(:beacon) { Beacon.new(name: 'Projeto de Software II - Beacon') }

  describe '#check_frequency' do
    before { students_period_discipline.save }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 30)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 33)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 35)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 40)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 45)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 50)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 18, 55)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 19, 0)) }
    before { BeaconPresence.create(user: user, beacon: beacon, created_at: Time.new(2010, 1, 1, 19, 5)) }

    it { expect(period_discipline.frequency_days.first.presences.exists?).to eq(true) }
  end
end
