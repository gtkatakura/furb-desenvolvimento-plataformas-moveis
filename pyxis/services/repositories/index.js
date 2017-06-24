import BaseRepository from './BaseRepository';

export default {
    CoordinatorsRepository: BaseRepository.create('coordinators', 'coordinator'),
    InstructorsRepository: BaseRepository.create('instructors', 'instructor'),
    MaintainersRepository: BaseRepository.create('maintainers', 'maintainer'),
    StudentsRepository: BaseRepository.create('students', 'student'),
    InstitutesRepository: BaseRepository.create('institutes', 'institute'),
    CoursesRepository: BaseRepository.create('courses', 'course'),
    DisciplinesRepository: BaseRepository.create('disciplines', 'discipline'),
    GraduationSemestersRepository: BaseRepository.create('graduation_semesters', 'graduation_semester'),
    GraduationClassesRepository: BaseRepository.create('graduation_classes', 'graduation_class'),
    PeriodDisciplinesRepository: BaseRepository.create('period_disciplines', 'period_discipline'),
    FrequencyDaysRepository: BaseRepository.create('frequency_days', 'frequency_day'),
    BeaconsRepository: BaseRepository.create('beacons', 'beacon'),
    PeriodDaysRepository: BaseRepository.create('period_days', 'period_day'),
    StudentsPeriodDisciplinesRepository: BaseRepository.create('students_period_disciplines', 'students_period_discipline'),
    UsersRepository: BaseRepository.create('users', 'user'),
    BeaconPresencesRepository: BaseRepository.create('beacon_presences', 'beacon_presence'),
};
