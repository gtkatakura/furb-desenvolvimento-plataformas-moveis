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
    PeriodDisciplinesRepository: BaseRepository.create('period_disciplines', 'period_discipline')
};
