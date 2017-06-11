const { signUp, signIn } = require('./index');

const main = async () => {
  try {
    const url = 'http://localhost:3000';

    const { maintainersRepository, coordinatorsRepository, instructorsRepository, institutesRepository } = await signIn(url, {
      email: 'gt.katakura4@gmail.com',
      password: '12345678'
    });

    const coordinator = await coordinatorsRepository.save({ user_id: 1 });
    const coordinators = await coordinatorsRepository.all();

    const instructor = await instructorsRepository.save({ user_id: 1 });
    const instructors = await instructorsRepository.all();

    const maintainer = await maintainersRepository.save({ user_id: 1 });

    const institute = await institutesRepository.save({ name: 'Institue 1 ', maintainer_id: maintainer.id });

    await coordinatorsRepository.destroy(coordinator);
    await instructorsRepository.destroy(instructor);

    console.log(coordinator);
    console.log(coordinators);

    console.log(instructor);
    console.log(`Instructor = ${JSON.stringify(instructors)}`);

    console.log(maintainer);

    console.log(institute);
  } catch (err) {
    console.log(err);
  }
};

main();
