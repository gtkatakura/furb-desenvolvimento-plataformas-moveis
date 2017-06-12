import BaseRepository from './BaseRepository';

export default {
    CoordinatorsRepository: BaseRepository.create('coordinators'),
    InstructorsRepository: BaseRepository.create('instructors'),
    MaintainersRepository: BaseRepository.create('maintainers'),
    StudentsRepository: BaseRepository.create('students'),
    InstitutesRepository: BaseRepository.create('institutes'),
    CoursesRepository: BaseRepository.create('courses'),
};
