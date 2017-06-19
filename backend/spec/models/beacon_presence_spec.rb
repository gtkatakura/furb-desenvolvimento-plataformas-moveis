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

    it { }

    # it do
    #   expect(period_discipline.frequency_days.map(&:class_day)).to eq([
    #     Period.new('2010-01-01 18:30', '2010-01-01 19:20'),
    #     Period.new('2010-01-01 19:20', '2010-01-01 20:10'),
    #     Period.new('2010-01-01 20:20', '2010-01-01 21:10'),
    #     Period.new('2010-01-01 21:10', '2010-01-01 22:00')
    #   ])
    # end
  end
end
