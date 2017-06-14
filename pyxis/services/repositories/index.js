import BaseRepository from './BaseRepository';

export default {
    CoordinatorsRepository: BaseRepository.create('coordinators'),
    InstructorsRepository: BaseRepository.create('instructors'),
    MaintainersRepository: BaseRepository.create('maintainers'),
    StudentsRepository: BaseRepository.create('students'),
    InstitutesRepository: BaseRepository.create('institutes'),
    CoursesRepository: BaseRepository.create('courses'),
    DisciplinesRepository: BaseRepository.create('disciplines'),
    GraduationSemestersRepository: BaseRepository.create('graduation_semesters'),
    GraduationClassesRepository: BaseRepository.create('graduation_classes'),
    PeriodDisciplinesRepository: BaseRepository.create('period_disciplines')
};
